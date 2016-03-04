<?php
    // PATH: *

    $data = Timber::get_context();
    $post = new TimberPost( 1744 ); // Set this to the 404 pages ID
    $data['post'] = $post;

    Timber::render('404.twig', $data);
?>
