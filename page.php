<?php

get_header();

?>

	<?php the_showcase(); ?>

	<div class="wrap">
		<div class="content-wide" role="main">
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