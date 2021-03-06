<?php
/**
 * Icebreaker
 *
 * @package           Icebreaker
 * @author            Jenny Wong
 * @copyright         2020 Jenny Wong
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Icebreaker
 * Plugin URI:        https://github.com/missjwo/icebreaker
 * Description:       Add custom icebreakers to your webite. 
 * Version:           0.1.0
 * Requires at least: 5.4
 * Requires PHP:      7.3
 * Author:            Jenny Wong
 * Author URI:        https://jwong.co.uk
 * Text Domain:       icebreaker
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace jwo\icebreaker;
const AUTHOR_PREFIX = 'jwo';
const POST_TYPE = AUTHOR_PREFIX .'_icebreaker';
const TEXTDOMAIN = 'icebreaker';

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Plugin Initializer.
 */
add_action( 'plugins_loaded', __NAMESPACE__ .'\init' ); 

function init() {

    // Hook: Block assets.
    add_action( 'init', __NAMESPACE__. '\block_assets' );
    add_action( 'init', __NAMESPACE__. '\register_cpt');
    add_action('admin_menu', __NAMESPACE__ .'\register_add_multiples_page');

    add_filter( 'enter_title_here', __NAMESPACE__. '\change_title_text' );

}

/**
 * Block Initializer.
 */
function block_assets() { // phpcs:ignore
    // Register block editor script for backend.
    wp_register_script(
        POST_TYPE . '-block-js', // Handle.
        plugins_url( '/dist/blocks.build.js', __FILE__ ), // Block.build.js: We register the block here. Built with Webpack.
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
        null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
        true // Enqueue the script in the footer.
    );

    // WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
    wp_localize_script(
        POST_TYPE . '-block-js',
        'cgbGlobal', // Array containing dynamic data for a JS Global.
        [
            'pluginDirPath' => plugin_dir_path( __FILE__ ),
            'pluginDirUrl'  => plugin_dir_url( __FILE__ ),
            // Add more data here that you want to access from `cgbGlobal` object.
        ]
    );

    /**
     * Register Gutenberg block on server-side.
     *
     * Register the block on server-side to ensure that the block
     * scripts and styles for both frontend and backend are
     * enqueued when the editor loads.
     *
     * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
     * @since 1.16.0
     */
    register_block_type(
        AUTHOR_PREFIX . '/block-icebreaker', array(
            // Enqueue blocks.build.js in the editor only.
            'editor_script' => POST_TYPE . '-block-js',
        )
    );
}

function register_cpt() {
    register_post_type(POST_TYPE,
        array(
            'labels'      => array(
                'name'				=> __( 'Icebreakers', TEXTDOMAIN ),
                'singular_name'		=> __( 'Icebreaker', TEXTDOMAIN ),
                'menu_name'         => __( 'Icebreakers', TEXTDOMAIN ),
				'parent_item_colon' => __( 'Parent Icebreaker', TEXTDOMAIN ),
				'all_items'         => __( 'All Icebreakers', TEXTDOMAIN ),
				'view_item'         => __( 'View Icebreaker', TEXTDOMAIN ),
				'add_new_item'      => __( 'Add New Icebreaker', TEXTDOMAIN ),
				'add_new'           => __( 'Add New', TEXTDOMAIN ),
				'edit_item'         => __( 'Edit Icebreaker', TEXTDOMAIN ),
				'update_item'       => __( 'Update Icebreaker', TEXTDOMAIN ),
				'search_items'		=> __( 'Search Icebreakers', TEXTDOMAIN ),
			),
            'public'      => true,
            'has_archive' => true,
            'show_in_rest'=> true,
            'rest_base'	  => 'icebreakers',
            'taxonomies'  => array( 'category' ),
            'supports'    => array( 'title', 'author', 'revisions', ),
            'rewrite'     => array( 'slug' => 'icebreakers' ),
            'menu_icon'	  => 'data:image/svg+xml;base64,' . base64_encode('<svg role="img" aria-hidden="true" focusable="false" data-icon="snowflake" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" height="100" width="100" xml:space="preserve"><path fill="currentColor" d="M97.5,50c0,1.7-1.4,3.1-3.1,3.1h-8l4,4c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-8.4-8.4  H57.4l14.3,14.3h11.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1H78l5.6,5.6c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9  s-1.6-0.3-2.2-0.9L73.6,78v5.7c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V71.8L53.1,57.4v20.1l8.4,8.4c1.2,1.2,1.2,3.2,0,4.4  c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-4-4v8.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-8.2l-4,4  c-0.6,0.6-1.4,0.9-2.2,0.9s-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l8.4-8.4v-20L32.7,71.8v11.9c0,1.7-1.4,3.1-3.1,3.1  c-1.7,0-3.1-1.4-3.1-3.1V78l-5.6,5.6c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l5.6-5.6h-5.7  c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h11.9l14.3-14.3H22.5l-8.4,8.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9  c-1.2-1.2-1.2-3.2,0-4.4l4-4H5.6c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h8.2l-4-4c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0  l8.4,8.4h20.1L28.4,32.7H16.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h5.7l-5.8-5.8c-1.2-1.2-1.2-3.2,0-4.4  c1.2-1.2,3.2-1.2,4.4,0l5.8,5.8v-5.7c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1v11.9l14.2,14.2V22.3l-8.4-8.4  c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l4,4v-8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v8l4-4c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4l-8.4,8.4v20.4l14.3-14.3V16.5c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v5.7l5.8-5.8c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4L78,26.5h5.7c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1H71.8L57.6,46.9h20.1l8.4-8.4  c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-4,4h8C96.1,46.9,97.5,48.3,97.5,50z"></path></svg>'),
        )
    );
}

function register_add_multiples_page() {
    add_submenu_page(
        'edit.php?post_type=' . POST_TYPE, // parent slug
        __( 'Add Multiple Icebreakers', TEXTDOMAIN ), //page title
        __( 'Add Multiples', TEXTDOMAIN ), //menu title
        'edit_posts', //capabilities
        'add_multiples', //menu-slug
        __NAMESPACE__. '\add_multiple_icebreakers_callback', //callback function
    ); 
}

function change_title_text( $title ) {

    if( get_post_type() !== POST_TYPE ) {
        return;
    }

    $title = __( 'Enter icebreaker here', TEXTDOMAIN );
    return $title;
}

function add_multiple_icebreakers_callback() {
    include( __DIR__ . '/multiple-icebreakers.php' );
}
