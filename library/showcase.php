<?php


// function to use on front-end templates to output the showcase.
function the_showcase() {

	// get the slides
	$slides = get_post_meta( get_the_ID(), "showcase", 1 );

	if ( !empty( $slides ) ) {
		?>
		<div class="showcase">
		<?php
		$count = 0;
		foreach ( $slides as $key => $slide ) {
			if ( !empty( $slide["image"] ) ) {

				// store the content, link, image, and title (if applicable)
				$content = ( isset( $slide["content"] ) ? $slide["content"] : '' );
				$link = ( isset( $slide["link"] ) ? $slide["link"] : '' );
				$image = $slide['image'];
				$title = ( isset( $slide['title'] ) ? $slide['title'] : '' );

				?>
			<div class="slide<?php print ( $key==0 ? ' visible' : '' ); ?>" style="background-image: url(<?php print $slide["image"]; ?>);<?php print ( !empty( $link ) ? 'cursor: pointer;' : '' ) ?>"<?php print ( !empty( $link ) ? ' data-href="' . $link . '"' : '' ) ?>>
				
				<?php if ( !empty( $content ) ) { ?>
				<div class="wrap">
					<div class="slide-content">
					<?php 
					if ( !empty( $content ) ) { 
						print apply_filters( 'the_content', $content );
					}
					?>
					</div>
				</div>
				<?php } else if ( !empty( $title ) ) { ?>
					<h1 class="slide-title"><?php print $title; ?></h1>
				<?php } ?>

			</div>
				<?php

				$count++;
			}
		}

		if ( $count > 1 ) { 
			?>
			<div class="showcase-nav">
				<a class="previous">Previous</a>
				<a class="next">Next</a>
			</div>
			<?php
		}
		?>
		</div>
		<?php
	}
}



// add the showcase metabox
function showcase_metabox( $meta_boxes ) {

    $showcase_metabox = new_cmb2_box( array(
        'id' => 'showcase_metabox',
        'title' => 'Showcase',
        'object_types' => array( 'page' ), // post type
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $showcase_metabox_group = $showcase_metabox->add_field( array(
        'id' => 'showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Slide', 'cmb2'),
            'remove_button' => __('Remove Slide', 'cmb2'),
            'group_title'   => __( 'Slide {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Image/Video',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 200, 100 )
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Content',
        'desc' => 'Enter the content for the slide.',
        'id'   => 'content',
        'type' => 'wysiwyg',
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Title',
        'desc' => "Enter the title for this page - this will only be visible if you don't enter any content.",
        'id'   => 'title',
        'type' => 'text',
    ) );

    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Link',
        'id'   => 'link',
        'type' => 'text',
    ) );

}
add_filter( 'cmb2_init', 'showcase_metabox' );


