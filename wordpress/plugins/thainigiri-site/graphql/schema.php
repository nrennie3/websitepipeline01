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

    register_graphql_field( 'MenuItem', 'menuCategories', [
        'type'        => [ 'list_of' => 'MenuCategory' ],
        'description' => 'Menu categories for this item',
        'resolve'     => function( $post ) {
            $terms = get_the_terms( $post->ID, 'menu_category' );
            return $terms && ! is_wp_error( $terms ) ? $terms : [];
        },
    ] );
}
