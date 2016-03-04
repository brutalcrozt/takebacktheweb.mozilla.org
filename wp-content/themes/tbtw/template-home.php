<?php
/*
Template Name: Home
*/

$data = Timber::get_context();
//$data['post'] = Timber::get_post('pagename=home');
$post = new TimberPost();
$data['post'] = $post;


//Stories. Preference order: Sticky, Latest
$recent_stories_sticky = Timber::get_posts(array(
    'post_type'		=> 'story',
    'numberposts'	=> 8,
    'orderby'        => 'post_date',
    'order'          => 'ASC',
    'category_name' => 'featured',
    //'meta_key'	  	=> 'cpt_sticky',
    //'meta_value'    => 1
    )
);
$recent_stories_not_sticky = Timber::get_posts(array(
    'post_type'		=> 'story',
    'numberposts'	=> 4,
    'orderby'        => 'post_date',
    'order'          => 'ASC',
    'category_name' => 'uncategorized',
    //'meta_key'      => 'cpt_sticky',
    //'meta_value'    => 0
    )
);

$data['stories'] = array_slice(
    array_merge($recent_stories_sticky, $recent_stories_not_sticky),
    0,
    4
);

// partners
$partners = Timber::get_posts(array(
    'post_type'		=> 'partner',
    'numberposts'	=> -1,
    'orderby'        => 'title',
    'order'          => 'ASC',
    'category_name' => 'featured',
    //'meta_key'	  	=> 'cpt_sticky',
    //'meta_value'    => 1
    )
);
$data['partners'] = $partners;



$data["gfCategories"] = $gfCategories;

Timber::render('template-home.twig', $data);

?>
