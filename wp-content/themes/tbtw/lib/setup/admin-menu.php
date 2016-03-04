<?php

/**
 * Custom Admin Menu 
 * @link http://stackoverflow.com/questions/14672258/wordpress-remove-menu-items-from-wp-admin
 */


function prefix_remove_menu_pages() {
    remove_menu_page('edit-comments.php');//comments
    remove_menu_page('upload.php'); //media
    remove_menu_page('edit.php');//posts
    remove_menu_page('tools.php');//tools
}
add_action( 'admin_menu', 'prefix_remove_menu_pages' );
