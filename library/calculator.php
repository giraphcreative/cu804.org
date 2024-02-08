<?php

// calculator shortcode
function calculator_func( $atts ) {
    
    // get the attributes
    $a = shortcode_atts( array(
        'amount' => '$6,000',
        'rate' => '5%',
        'rate_compare' => '0',
        'term' => '48m',
        'method' => ''
    ), $atts );


    // comparison calculator if applicable
    if ( !empty( $a['rate_compare'] ) ) {
    $calculator_code = '<div class="calculator-compare group">
	<div class="half form">
		<input type="hidden" class="rate_compare" value="' . $a['rate_compare'] . '" />
		<p>Amount:<br>
			<input type="text" name="amount" class="amount" value="' . $a['amount'] . '" /></p>
		<p>Term:<br>
			<input type="text" name="term" class="term" value="' . $a['term'] . '" /></p>
		<p>Rate:<br>
			<input type="text" name="rate" class="rate" value="' . $a['rate'] . '" /></p>
	</div>
	<div class="half">
		<p><label>Results:</label></p>
		<div class="results"></div>
	</div>
</div>';
    } else {
    $calculator_code = '<div class="calculator-loan group">
	<div class="half form">
		<p>Amount:<br>
			<input type="text" class="amount" value="' . $a['amount'] . '" /></p>
		<p>Term:<br>
			<input type="text" class="term" value="' . $a['term'] . '" /></p>
		<p>Rate:<br>
			<input type="text" class="rate" value="' . $a['rate'] . '" /></p>
	</div>
	<div class="half">
		<p><label>Results:</label></p>
		<div class="results"></div>
	</div>
</div>';
    }

    return $calculator_code;
}
add_shortcode( 'calculator', 'calculator_func' );


// calculator shortcode
function amortization_func( $atts ) {
    
    // get the attributes
    $a = shortcode_atts( array(
        'amount' => '$20,000',
        'rate' => '5%',
        'term' => '10y',
        'method' => ''
    ), $atts );


    // comparison calculator if applicable
    $calculator_code = '<div class="amortization group">
	<div class="form">
		<div class="third">Amount:<br>
			<input type="text" class="amount" value="' . $a['amount'] . '" /></div>
		<div class="third">Term:<br>
			<input type="text" class="term" value="' . $a['term'] . '" /></div>
		<div class="third">Rate:<br>
			<input type="text" class="rate" value="' . $a['rate'] . '" /></div>
	</div>
	<div class="results"></div>
</div>';

    return $calculator_code;
}
add_shortcode( 'amortization', 'amortization_func' );


// hooks your functions into the correct filters
function calc_add_mce_button() {
	// check user permissions
	if ( !current_user_can( 'edit_posts' ) &&  !current_user_can( 'edit_pages' ) ) {
		return;
	}

	// check if WYSIWYG is enabled
	if ( 'true' == get_user_option( 'rich_editing' ) ) {
		add_filter( 'mce_external_plugins', 'calc_add_tinymce_plugin' );
		add_filter( 'mce_buttons', 'calc_register_mce_button' );
	}
}
add_action('admin_head', 'calc_add_mce_button');



// register new button in the editor
function calc_register_mce_button( $buttons ) {
	array_push( $buttons, 'calc_mce_button' );
	return $buttons;
}



// declare a script for the new button
// the script will insert the shortcode on the click event
function calc_add_tinymce_plugin( $plugin_array ) {
	$plugin_array['calc_mce_button'] = get_stylesheet_directory_uri() .'/js/editor/calculator.js';
	return $plugin_array;
}



// hooks your functions into the correct filters
function amort_add_mce_button() {
	// check user permissions
	if ( !current_user_can( 'edit_posts' ) &&  !current_user_can( 'edit_pages' ) ) {
		return;
	}

	// check if WYSIWYG is enabled
	if ( 'true' == get_user_option( 'rich_editing' ) ) {
		add_filter( 'mce_external_plugins', 'amort_add_tinymce_plugin' );
		add_filter( 'mce_buttons', 'amort_register_mce_button' );
	}
}
add_action('admin_head', 'amort_add_mce_button');



// register new button in the editor
function amort_register_mce_button( $buttons ) {
	array_push( $buttons, 'amort_mce_button' );
	return $buttons;
}



// declare a script for the new button
// the script will insert the shortcode on the click event
function amort_add_tinymce_plugin( $plugin_array ) {
	$plugin_array['amort_mce_button'] = get_stylesheet_directory_uri() .'/js/editor/amortization.js';
	return $plugin_array;
}


