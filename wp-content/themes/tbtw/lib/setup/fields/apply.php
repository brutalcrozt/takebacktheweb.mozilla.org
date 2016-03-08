<?php 
if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_apply',
		'title' => 'Apply',
		'fields' => array (
			array (
				'key' => 'field_56de6ce7b72f1',
				'label' => 'Apply 1 Headline',
				'name' => 'apply_1_headline',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_56de6d2bb72f2',
				'label' => 'Apply 1 Message',
				'name' => 'apply_1_message',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 'yes',
			),
			array (
				'key' => 'field_56de6d4ab72f3',
				'label' => 'Apply 1 Link',
				'name' => 'apply_1_link',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_56de6d6bb72f4',
				'label' => 'Apply 2 Headline',
				'name' => 'apply_2_headline',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_56de6d75b72f5',
				'label' => 'Apply 2 Message',
				'name' => 'apply_2_message',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 'yes',
			),
			array (
				'key' => 'field_56de6d86b72f6',
				'label' => 'Apply 2 Link',
				'name' => 'apply_2_link',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'default',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}
