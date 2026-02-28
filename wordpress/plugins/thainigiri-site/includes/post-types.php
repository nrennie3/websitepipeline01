<?php
defined( 'ABSPATH' ) || exit;

add_action( 'init', 'thainigiri_register_post_types' );

function thainigiri_register_post_types(): void {
    register_post_type( 'menu_item', [
        'labels' => [
            'name'               => 'Menu Items',
            'singular_name'      => 'Menu Item',
            'add_new'            => 'Add New Item',
            'add_new_item'       => 'Add New Menu Item',
            'edit_item'          => 'Edit Menu Item',
            'view_item'          => 'View Menu Item',
            'search_items'       => 'Search Menu Items',
            'not_found'          => 'No menu items found.',
            'not_found_in_trash' => 'No menu items found in Trash.',
        ],
        'public'              => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'menuItem',
        'graphql_plural_name' => 'menuItems',
        'supports'            => [ 'title', 'editor', 'thumbnail', 'custom-fields' ],
        'menu_icon'           => 'dashicons-food',
        'has_archive'         => false,
        'rewrite'             => [ 'slug' => 'menu-items' ],
    ] );
}
