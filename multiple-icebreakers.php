<?php

namespace jwo\icebreaker\multiples;
use const jwo\icebreaker\POST_TYPE;
/* 
 * Page to add multiple icebreakers in one go. 
 */

if ( ! current_user_can( 'edit_posts' ) ) {
	return;
}

if ( isset($_POST['addMultipleIcebreakers']) ) {

	$multiple_icebreakers = explode( PHP_EOL, $_POST['addMultipleIcebreakers']);

	foreach ( $multiple_icebreakers as $icebreaker ) {
		wp_insert_post( [
			'post_title' => $icebreaker,
			'post_status' => 'publish',
			'post_type' => 'jw_icebreaker', 
		]);
	}
}

?>
<div class="wrap">
    <h2>Add Multiple Icebreakers</h2>
    <p>Use the box below to add multiple icebreakers in one go.</p>
    <p>One icebreaker per line</p>
	<form action="edit.php?post_type=<?php echo POST_TYPE; ?>&page=add_multiples" method="post">
		<textarea name="addMultipleIcebreakers" class="large-text"></textarea>
		<input type="submit" value="save" />
	</form>
</div>
