<?php
    function theme_options( $wp_customize ) {

        //
        // Footer Section
        //

        $wp_customize->add_section( 'footer', array(
            'title'     =>  'Footer',
            'priority'  =>  20
        ));

        // Fields

        $wp_customize->add_setting( 'footer_legal', array(
            'default' => ''
        ));
        $wp_customize->add_control( new Textarea_Custom_Control( $wp_customize, 'footer_legal', array(
            'label'     => 'Footer Legal',
            'section'   => 'footer',
            'settings'  => 'footer_legal',
        )));

        $wp_customize->add_setting( 'footer_privacy_url', array(
            'default' => ''
        ));
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_privacy_url', array(
            'label'     => 'Footer privacy url',
            'section'   => 'footer',
            'settings'  => 'footer_privacy_url',
        )));

        $wp_customize->add_setting( 'footer_terms_url', array(
            'default' => ''
        ));
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_terms_url', array(
            'label'     => 'Footer terms url',
            'section'   => 'footer',
            'settings'  => 'footer_terms_url',
        )));


    }

    add_action('customize_register', 'theme_options');
?>
