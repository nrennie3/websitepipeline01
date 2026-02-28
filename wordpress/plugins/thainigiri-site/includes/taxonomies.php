<?php
defined( 'ABSPATH' ) || exit;

add_action( 'init', 'thainigiri_register_taxonomies' );

function thainigiri_register_taxonomies(): void {
    register_taxonomy( 'menu_category', [ 'menu_item' ], [
        'labels' => [
            'name'              => 'Menu Categories',
            'singular_name'     => 'Menu Category',
            'search_items'      => 'Search Categories',
            'all_items'         => 'All Categories',
            'edit_item'         => 'Edit Category',
            'update_item'       => 'Update Category',
            'add_new_item'      => 'Add New Category',
            'new_item_name'     => 'New Category Name',
            'menu_name'         => 'Categories',
        ],
        'hierarchical'        => true,
        'public'              => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'menuCategory',
        'graphql_plural_name' => 'menuCategories',
        'rewrite'             => [ 'slug' => 'menu-category' ],
    ] );
}
