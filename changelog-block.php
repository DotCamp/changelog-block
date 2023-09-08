<?php
/**
 * Plugin Name: Changelog Block
 * Description: Changelog Block for Gutenberg. Can be used to add changelog for software, theme, plugin or anything.
 * Version: 1.0
 * Author: DotCamp
 */

defined('ABSPATH') || exit;

function register_changelog_block() {
    // Dependencies
    $dependencies = array(
        'wp-blocks',
        'wp-element',
        'wp-block-editor',
        'wp-components'
    );

    // Automatically load dependencies and version
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    // Merge the automatically detected dependencies with the ones we defined
    $merged_dependencies = array_merge($dependencies, $asset_file['dependencies']);

    // Register block script
    wp_register_script(
        'changelog-block',
        plugins_url('build/index.js', __FILE__),
        $merged_dependencies,
        $asset_file['version']
    );

    // Register block styles (frontend + editor)
    wp_register_style(
        'changelog-block-style',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    // Register block
    register_block_type('changelog/block', [
        'editor_script' => 'changelog-block',
        'style' => 'changelog-block-style',
    ]);
}
add_action('init', 'register_changelog_block');

