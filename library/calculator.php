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


