<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
$admin_email = get_option( 'admin_email' );
?>
	
	</section>
	
	<footer class="footer">
		<div class="quarter no-border">
			<?php print apply_filters( 'the_content', pure_get_option( 'column-one' ) ); ?>
		</div>
		<div class="quarter">
			<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'nav-menu' ) ); ?>
			<?php print apply_filters( 'the_content', pure_get_option( 'column-two' ) ); ?>
		</div>
		<div class="quarter">
			<?php print apply_filters( 'the_content', pure_get_option( 'column-three' ) ); ?>
		</div>
		<div class="quarter">
			<?php print apply_filters( 'the_content', pure_get_option( 'column-four' ) ); ?>
		</div>
	</footer>

	<div class="colophon">
		<div class="two-fifth">
			<img src="<?php bloginfo('template_url') ?>/img/logo-ncua.png" class="ncua" /> Your savings are federally insured to at least $250,000, and backed by the full faith and credit of the United States Government.
		</div>
		<div class="two-fifth">
			<img src="<?php bloginfo('template_url') ?>/img/logo-equal-housing.png" class="equal-housing" /> Equal Housing Lender - We do business in accordance with the Federal Fair Housing Law and the Equal Housing Opportunity Act. 
		</div>
		<div class="one-fifth notices-menu">
			<a href="/wp-content/uploads/2020/05/Privacy-Policy.pdf">Privacy Policy</a><br>
			<a href="/notices">Notices & Policies</a>
		</div>
	</div>

	<div class="copyright group">Copyright &copy; <?php print date( 'Y' ) ?></div>

</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>
