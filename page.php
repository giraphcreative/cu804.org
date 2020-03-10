<?php

get_header();

the_showcase();

?>

<div class="content-wide" role="main">
	<div class="icons text-center group">
		<?php the_icon_showcase(); ?>
	</div>

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

<?php

get_footer();

?>