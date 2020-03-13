<?php

get_header();

?>

	<?php the_showcase(); ?>

	<div class="content-wide" role="main">
		<?php 
		
		if ( have_posts() ) :
			while ( have_posts() ) : the_post(); 
				?>
		<h1 class="post-title"><?php the_title(); ?></h1>
		<?php the_content(); ?>
				<?php
			endwhile;
		endif;

		?>
	</div><!-- #content -->

	<?php the_icon_showcase(); ?>

<?php

get_footer();

?>