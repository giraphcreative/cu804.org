<?php

/*
Template Name: Homepage
*/

get_header();

?>

	<?php the_showcase(); ?>
	
	<div class="icons text-center group">
		<?php the_icon_showcase(); ?>
	</div>
	<div class="content-wide home-bottom">
		<img src="<?php bloginfo('template_url') ?>/img/title-news.png" alt="Delivering Value">
		<div class="blog-listing">
		<?php
		$args = array(
			'post_type' => array( 'post' ),
			'post_count' => 3
		);

		// The Query
		$the_query = new WP_Query( $args );

		if ( $the_query->have_posts() ) { 
		    while ( $the_query->have_posts() ) { 
		    	$the_query->the_post();
				?>
				<div class="entry third">
				    <?php if ( has_post_thumbnail() ) { ?><div class="post-thumbnail-container"><?php the_post_thumbnail(); ?></div><?php } ?>
				    <h3><a href="<?php the_permalink(); ?>"><?php print get_the_title(); ?></a></h3>
				    <?php the_excerpt(); ?>
				    <p><a href="<?php the_permalink() ?>" class="btn arrow">Read More</a></p>
				</div>
				<?php
			}
	    }
		wp_reset_postdata();
		?>
		</div>
	</div>

<?php

get_footer();

?>