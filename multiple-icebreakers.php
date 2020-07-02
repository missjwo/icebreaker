<?php

namespace jwo\icebreaker\multiples;

use const jwo\icebreaker\POST_TYPE;
use const jwo\icebreaker\TEXTDOMAIN;

/* 
 * Page to add multiple icebreakers in one go. 
 */

if ( ! current_user_can( 'edit_posts' ) ) {
	return;
}


// verify nounce
if ( isset( $_POST['addMultipleIcebreakers'] ) ) {
	
	check_admin_referer( 'icebreaker_settings', POST_TYPE .'_nonce' );

	$multiple_icebreakers = explode( PHP_EOL, sanitize_textarea_field( $_POST['addMultipleIcebreakers'] ) );
	// looks like sanitize_textarea_field gets rid of <> characters. 

	foreach ( $multiple_icebreakers as $icebreaker ) {

		wp_insert_post( [
			'post_title' => $icebreaker,
			'post_status' => 'publish',
			'post_type' => POST_TYPE, 
		] );
	}
}

$return_url = esc_url( add_query_arg( array(
	'post_type' => POST_TYPE,
	'page'		=> 'add_multiples',
	), admin_url( 'edit.php' ) ) );


$render  = '';
$render .= '<div class="wrap">';
$render .= '<h2>' . __( 'Add Multiple Icebreakers', TEXTDOMAIN ) . '</h2>';
$render .= '<p>' . __( 'Use the box below to add multiple icebreakers in one go.', TEXTDOMAIN ) . '</p>';
$render .= '<p>' . __( 'One icebreaker per line', TEXTDOMAIN ) . '</p>';
$render .= '<form action="' . $return_url . '" method="post">';
$render .= wp_nonce_field( 'icebreaker_settings', POST_TYPE .'_nonce' );
$render .= '<textarea name="addMultipleIcebreakers" class="large-text" placeholder="' . __( 'Enter icebreakers here.', TEXTDOMAIN ) .'"></textarea>';
$render .= '<input type="submit" value="' . __( 'Save', TEXTDOMAIN ) . '" />';
$render .= '</form>';
$render .= '</div>';

echo $render;
