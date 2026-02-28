<?php
/**
 * ACF field group registrations for Thai Nigiri.
 * Requires Advanced Custom Fields PRO or ACF Free.
 * Fields are registered in code to prevent schema drift.
 */
defined( 'ABSPATH' ) || exit;

add_action( 'acf/init', 'thainigiri_register_fields' );

function thainigiri_register_fields(): void {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) {
        return;
    }

    acf_add_local_field_group( [
        'key'      => 'group_menu_item_fields',
        'title'    => 'Menu Item Details',
        'fields'   => [
            [
                'key'           => 'field_menu_item_price',
                'label'         => 'Price',
                'name'          => 'price',
                'type'          => 'number',
                'required'      => 1,
                'min'           => 0,
                'step'          => 0.01,
                'prepend'       => '$',
                'instructions'  => 'Enter the price without the dollar sign (e.g. 15.00)',
            ],
            [
                'key'           => 'field_menu_item_is_featured',
                'label'         => 'Featured on Home Page',
                'name'          => 'is_featured',
                'type'          => 'true_false',
                'default_value' => 0,
                'ui'            => 1,
                'instructions'  => 'Show this item in the Featured Dishes section on the home page.',
            ],
        ],
        'location' => [
            [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'menu_item' ] ],
        ],
        'active'   => true,
    ] );
}
