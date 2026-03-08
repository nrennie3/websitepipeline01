<?php
/**
 * WPGraphQL schema extensions for Thai Nigiri.
 * Exposes ACF fields on the menuItem type.
 * Only loaded when WPGraphQL is active (checked in plugin bootstrap).
 */
defined( 'ABSPATH' ) || exit;

add_action( 'graphql_register_types', 'thainigiri_register_graphql_fields' );

function thainigiri_register_graphql_fields(): void {
    register_graphql_field( 'MenuItem', 'price', [
        'type'        => 'Float',
        'description' => 'Menu item price in USD',
        'resolve'     => function( $post ) {
            $val = get_post_meta( $post->ID, 'price', true );
            return $val !== '' ? (float) $val : null;
        },
    ] );

    register_graphql_field( 'MenuItem', 'isFeatured', [
        'type'        => 'Boolean',
        'description' => 'Whether this item appears in the featured section on the home page',
        'resolve'     => function( $post ) {
            return (bool) get_post_meta( $post->ID, 'is_featured', true );
        },
    ] );

    register_graphql_field( 'MenuItem', 'priceDisplay', [
        'type'        => 'String',
        'description' => 'Optional display label, e.g. "From $18". Null when not set.',
        'resolve'     => function( $post ) {
            $val = get_post_meta( $post->ID, 'price_display', true );
            return $val !== '' ? $val : null;
        },
    ] );

    // Note: menuCategories connection is auto-registered by WPGraphQL
    // because menu_category taxonomy has show_in_graphql => true.
}
