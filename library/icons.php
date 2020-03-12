<?php


// icon showcase
function the_icon_showcase() {

	$icons = get_cmb_value( 'icon_showcase' );

	if ( !empty( $icons ) ) {
        $num=1;
		foreach ( $icons as $icon ) {
			if ( !empty( $icon['link'] ) && !empty( $icon['image'] ) ) { ?>
			<a href="<?php print $icon['link']; ?>">
				<div class="quarter icon <?php print $icon['color'] ?> icon-<?php print $num ?>">
					<img src="<?php print $icon['image']; ?>" alt="Icon for: <?php print $icon['title']; ?>">
					<?php if ( !empty( $icon['alt-text'] ) ) { ?><div class="super-title"><?php  print $icon['alt-text']; ?></div><?php } ?>
					<?php if ( !empty( $icon['title'] ) ) { ?><h5><?php print $icon['title']; ?></h5><?php } ?>
				</div>
			</a>
				<?php 
                $num++;
			}
		}
	}

}



// add metabox(es)
function page_metaboxes( $meta_boxes ) {

    // thumb showcase metabox
    $icon_showcase_metabox = new_cmb2_box( array(
        'id' => 'icon_showcase_metabox',
        'title' => 'Icon Showcase',
        'object_types' => array( 'page' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $icon_showcase_metabox_group = $icon_showcase_metabox->add_field( array(
        'id' => 'icon_showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Icon', 'cmb2'),
            'remove_button' => __('Remove Icon', 'cmb2'),
            'group_title'   => __( 'Icon {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Image',
        'desc' => 'Upload a 100x100 pixel icon image. Ideally a transparent PNG.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 100, 100 )
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Title',
        'desc' => 'Set a title to display below this icon.',
        'id'   => 'title',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => 'link',
        'type' => 'text',
    ) );

}
add_filter( 'cmb2_init', 'page_metaboxes' );


