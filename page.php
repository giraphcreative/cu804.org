<?php

get_header();

?>

	<?php the_showcase(); ?>

	<div class="content-wide" role="main">
		<div class="wrap">
		<?php 
		
		if ( have_posts() ) :
			while ( have_posts() ) : the_post(); 
				the_content();
			endwhile;
		endif;

		?>
		</div>
	</div><!-- #content -->

	<?php the_icon_showcase(); ?>

<?php

get_footer();

?>