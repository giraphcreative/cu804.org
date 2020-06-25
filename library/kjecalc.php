<?php


function kjecalc_shortcode( $atts ) {
    $att = shortcode_atts(array(
        'type' => 'auto'
    ), $atts);

    if ( $att['type'] == 'auto' ) {

    	return <<<HTML
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJE.css'>
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.css'>
<div id="KJEAllContent"></div>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJE.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/AutoLoan.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/AutoLoanParams.js"></script>
HTML;

    } else if ( $att['type'] == 'autorefi' ) {

    	return <<<HTML
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJE.css'>
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.css'>
<div id="KJEAllContent"></div>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJE.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/ShouldIRefiAuto.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/ShouldIRefiAutoParams.js"></script>
HTML;

    } else if ( $att['type'] == 'mortgage' ) {

    	return <<<HTML
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJE.css'>
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.css'>
<div id="KJEAllContent"></div>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJE.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/MortgageRefinance.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/MortgageRefinanceParams.js"></script>
HTML;

    } else if ( $att['type'] == 'cc' ) {

    	return <<<HTML
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJE.css'>
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.css'>
<div id="KJEAllContent"></div>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJE.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/PayoffCC.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/PayoffCCParams.js"></script>
HTML;

    } else if ( $att['type'] == 'consolidate' ) {

    	return <<<HTML
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJE.css'>
<link type='text/css' rel='StyleSheet' href='/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.css'>
<div id="KJEAllContent"></div>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJE.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/KJESiteSpecific.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/Consolidate.js"></script>
<script type="text/javascript" SRC="/wp-content/themes/cu804/js/lib/kjecalc/ConsolidateParams.js"></script>
HTML;

    }
}
add_shortcode('kjecalc', 'kjecalc_shortcode');


