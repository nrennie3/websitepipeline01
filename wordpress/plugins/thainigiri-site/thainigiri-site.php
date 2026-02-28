<?php
/**
 * Plugin Name: Thai Nigiri Site
 * Plugin URI:  https://thainigiri.com
 * Description: Site plugin for Thai Nigiri. Registers custom post types, taxonomies, and ACF fields.
 *              Managed via version control — do not deactivate.
 * Version:     1.0.0
 * Author:      Website Pipeline
 * License:     Private
 */

defined( 'ABSPATH' ) || exit;

define( 'THAINIGIRI_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'THAINIGIRI_PLUGIN_VERSION', '1.0.0' );

require_once THAINIGIRI_PLUGIN_DIR . 'includes/post-types.php';
require_once THAINIGIRI_PLUGIN_DIR . 'includes/taxonomies.php';
require_once THAINIGIRI_PLUGIN_DIR . 'includes/fields.php';

if ( defined( 'GRAPHQL_VERSION' ) ) {
    require_once THAINIGIRI_PLUGIN_DIR . 'graphql/schema.php';
}
