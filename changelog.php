<?php
/**
 * Plugin Name: Changelog Block
 * Plugin URI: https://imtiazrayhan.com/changelog-block/
 * Description: Changelog Block for Plugins and Themes or anything.
 * Author: Imtiaz Rayhan
 * Author URI: https://imtiazrayhan.com/about/
 * Version: 1.0.0
 * License: GPL3+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package changelog-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function changelog_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'changelog_block_init' );
