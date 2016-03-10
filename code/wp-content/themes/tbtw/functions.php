<?php
    //
    // Include Setup files
    //
    include_once("lib/setup/admin-menu.php");
    
    include_once("lib/setup/fields/home.php");
    include_once("lib/setup/fields/apply.php");
    
    //
    // Globals
    //
    define('THEME_URL', get_template_directory_uri());
    
    
    // Wordpress Theme Support Config
    // REMOVAL OF THESE = POTIENTAL LOSS OF DATA
    //
    add_theme_support('post-formats');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    
    
    //
    // Add Menus to Timber
    //
    register_nav_menus(array(
        'header' => 'Header Navigation'
    ));

    function header_menus( $data ) {
        $data["header_menus"] = new TimberMenu('header');

        return $data;
    }

    //
    // Global Variables
    //
    function global_variables( $data ) {
        $data["gv"] = get_theme_mods();
        $data["year"] = date('Y');
        return $data;
    }

    //
    // Enviroment Helper
    //
    function env_helper( $data ) {
        if ( defined('WP_ENV') ) {
            $data["environment"] = WP_ENV;
        } else {
            $data["environment"] = "production";
        }

        $theme = get_stylesheet_directory_uri();

        if ( $data["environment"] == "production" ) {
            $data["assets_dir"] = $theme . '/assets';
            $data["img_dir"]    = $theme . '/assets/img';
            $data["css_dir"]    = $theme . '/assets/css';
            $data["js_dir"]     = $theme . '/assets/js';
        } else {
            $data["assets_dir"] = $theme . '/assets';
            $data["img_dir"]    = $theme . '/assets/img';
            $data["css_dir"]    = $theme . '/assets/css';
            $data["js_dir"]     = $theme . '/assets/js';
        }

        return $data;
    }

    //
    // Action/Filter Triggers
    //

    add_filter('timber_context', 'env_helper');
    add_filter('timber_context', 'header_menus');
    add_filter('timber_context', 'global_variables');


    // Allows upload to Media Library with these file types

    function cc_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
    add_filter('upload_mimes', 'cc_mime_types');

?>
