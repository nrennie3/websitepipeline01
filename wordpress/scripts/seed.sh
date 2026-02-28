#!/usr/bin/env bash
# seed.sh — Idempotent content seeder for Thai Nigiri
# Reads /seed/content.json and upserts content via WP-CLI.
# Updates /seed/content-map.json with slug → WP ID mappings.
# Safe to re-run: existing content is updated, not duplicated.
#
# Run inside the wpcli container:
#   docker compose run wpcli /scripts/seed.sh
set -euo pipefail

WP="wp --allow-root --path=/var/www/html"
CONTENT_FILE="/seed/content.json"
MAP_FILE="/seed/content-map.json"

if ! command -v jq &>/dev/null; then
  echo "ERROR: jq is required. Add it to the wpcli image or install it."
  exit 1
fi

echo "==> Starting content seed..."

# ── Menu Categories ───────────────────────────────────────────────────────────
echo "==> Seeding menu categories..."
CATEGORIES=$(jq -c '.menuCategories[]' "$CONTENT_FILE")
while IFS= read -r cat; do
  SLUG=$(echo "$cat" | jq -r '.slug')
  NAME=$(echo "$cat" | jq -r '.name')

  EXISTING_ID=$($WP term get menu_category "$SLUG" --by=slug --field=term_id 2>/dev/null || echo "")
  if [ -z "$EXISTING_ID" ]; then
    ID=$($WP term create menu_category "$NAME" --slug="$SLUG" --porcelain)
    echo "    Created category: $NAME (ID: $ID)"
  else
    $WP term update menu_category "$EXISTING_ID" --name="$NAME" --slug="$SLUG"
    ID=$EXISTING_ID
    echo "    Updated category: $NAME (ID: $ID)"
  fi

  # Update map
  jq --arg slug "$SLUG" --argjson id "$ID" \
    '.menuCategories[$slug] = $id' "$MAP_FILE" > /tmp/map_tmp.json && mv /tmp/map_tmp.json "$MAP_FILE"
done <<< "$CATEGORIES"

# ── Menu Items ────────────────────────────────────────────────────────────────
echo "==> Seeding menu items..."
ITEMS=$(jq -c '.menuItems[]' "$CONTENT_FILE")
while IFS= read -r item; do
  SLUG=$(echo "$item"    | jq -r '.slug')
  TITLE=$(echo "$item"   | jq -r '.title')
  CONTENT=$(echo "$item" | jq -r '.content')
  CATEGORY=$(echo "$item"| jq -r '.category')
  PRICE=$(echo "$item"   | jq -r '.price')
  FEATURED=$(echo "$item"| jq -r '.is_featured')

  EXISTING_ID=$($WP post get "$SLUG" --post_type=menu_item --field=ID 2>/dev/null || echo "")
  if [ -z "$EXISTING_ID" ]; then
    ID=$($WP post create \
      --post_type=menu_item \
      --post_title="$TITLE" \
      --post_name="$SLUG" \
      --post_content="$CONTENT" \
      --post_status=publish \
      --porcelain)
    echo "    Created: $TITLE (ID: $ID)"
  else
    $WP post update "$EXISTING_ID" \
      --post_title="$TITLE" \
      --post_content="$CONTENT" \
      --post_status=publish
    ID=$EXISTING_ID
    echo "    Updated: $TITLE (ID: $ID)"
  fi

  # Set ACF fields
  $WP post meta update "$ID" price "$PRICE"
  FEATURED_VAL=0
  [ "$FEATURED" = "true" ] && FEATURED_VAL=1
  $WP post meta update "$ID" is_featured "$FEATURED_VAL"

  # Set taxonomy
  CAT_ID=$(jq -r --arg slug "$CATEGORY" '.menuCategories[$slug]' "$MAP_FILE")
  if [ "$CAT_ID" != "null" ] && [ -n "$CAT_ID" ]; then
    $WP post term set "$ID" menu_category "$CAT_ID" 2>/dev/null || true
  fi

  # Update map
  jq --arg slug "$SLUG" --argjson id "$ID" \
    '.menuItems[$slug] = $id' "$MAP_FILE" > /tmp/map_tmp.json && mv /tmp/map_tmp.json "$MAP_FILE"
done <<< "$ITEMS"

echo ""
echo "==> Seed complete. content-map.json updated."
echo "    Commit content-map.json to track WP IDs across environments."
