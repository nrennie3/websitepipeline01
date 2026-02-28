#!/usr/bin/env bash
# setup.sh — Idempotent WordPress configuration via WP-CLI
# Run inside the wpcli container:
#   docker compose run wpcli /scripts/setup.sh
set -euo pipefail

WP="wp --allow-root --path=/var/www/html"

echo "==> Waiting for WordPress to be ready..."
until $WP core is-installed 2>/dev/null; do
  echo "    WordPress not ready yet, retrying in 5s..."
  sleep 5
done

echo "==> WordPress is ready."

# ── Core settings ────────────────────────────────────────────────────────────
echo "==> Configuring site settings..."
$WP option update blogname "Thai Nigiri"
$WP option update blogdescription "Thai & Japanese Fusion — Sandpoint, ID"
$WP option update timezone_string "America/Los_Angeles"
$WP option update date_format "F j, Y"
$WP option update time_format "g:i a"
$WP option update start_of_week 1

# ── Permalinks ───────────────────────────────────────────────────────────────
echo "==> Setting permalink structure..."
$WP rewrite structure '/%postname%/' --hard
$WP rewrite flush --hard

# ── Plugins ──────────────────────────────────────────────────────────────────
echo "==> Installing and activating plugins..."

# WPGraphQL
if ! $WP plugin is-installed wp-graphql; then
  $WP plugin install wp-graphql --activate
else
  $WP plugin activate wp-graphql
fi

# ACF (free)
if ! $WP plugin is-installed advanced-custom-fields; then
  $WP plugin install advanced-custom-fields --activate
else
  $WP plugin activate advanced-custom-fields
fi

# Thai Nigiri site plugin (mounted from repo)
$WP plugin activate thainigiri-site

echo "==> Active plugins:"
$WP plugin list --status=active --fields=name,version

# ── Reading settings (disable blog) ─────────────────────────────────────────
echo "==> Disabling blog-style posts..."
$WP option update show_on_front 'page'

# ── Create automation user ────────────────────────────────────────────────────
echo "==> Creating automation service user..."
if ! $WP user get automation --field=ID 2>/dev/null; then
  $WP user create automation automation@thainigiri.local \
    --role=editor \
    --user_pass=automation_local_only
  echo "    Automation user created."
else
  echo "    Automation user already exists, skipping."
fi

# ── App password for seed script ─────────────────────────────────────────────
echo ""
echo "==> Setup complete."
echo "    WordPress admin: http://localhost:8080/wp-admin"
echo "    Default credentials: admin / password (set during initial WP install)"
echo "    Run seed script next: docker compose run wpcli /scripts/seed.sh"
