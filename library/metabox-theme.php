<?php
/**
 * CMB2 Theme Options
 * @version 0.1.0
 */
class pure_admin {

	/**
 	 * Option key, and option page slug
 	 * @var string
 	 */
	private $key = 'pure_options';

	/**
 	 * Options page metabox id
 	 * @var string
 	 */
	private $metabox_id = 'pure_option_metabox';

	/**
	 * Options Page title
	 * @var string
	 */
	protected $title = '';

	/**
	 * Options Page hook
	 * @var string
	 */
	protected $options_page = '';

	/**
	 * Constructor
	 * @since 0.1.0
	 */
	public function __construct() {
		// Set our title
		$this->title = __( 'Site Options', 'pure' );
	}

	/**
	 * Initiate our hooks
	 * @since 0.1.0
	 */
	public function hooks() {
		add_action( 'admin_init', array( $this, 'init' ) );
		add_action( 'admin_menu', array( $this, 'add_options_page' ) );
		add_action( 'cmb2_init', array( $this, 'add_options_page_metabox' ) );
	}


	/**
	 * Register our setting to WP
	 * @since  0.1.0
	 */
	public function init() {
		register_setting( $this->key, $this->key );
	}

	/**
	 * Add menu options page
	 * @since 0.1.0
	 */
	public function add_options_page() {
		$this->options_page = add_menu_page( $this->title, $this->title, 'manage_options', $this->key, array( $this, 'admin_page_display' ) );

		// Include CMB CSS in the head to avoid FOUT
		add_action( "admin_print_styles-{$this->options_page}", array( 'CMB2_hookup', 'enqueue_cmb_css' ) );
	}

	/**
	 * Admin page markup. Mostly handled by CMB2
	 * @since  0.1.0
	 */
	public function admin_page_display() {
		?>
		<div class="wrap cmb2-options-page <?php echo $this->key; ?>">
			<h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
			<?php cmb2_metabox_form( $this->metabox_id, $this->key, array( 'cmb_styles' => false ) ); ?>
		</div>
		<?php
	}

	/**
	 * Add the options metabox to the array of metaboxes
	 * @since  0.1.0
	 */
	function add_options_page_metabox() {

		$cmb = new_cmb2_box( array(
			'id'      => $this->metabox_id,
			'hookup'  => false,
			'show_on' => array(
				// These are important, don't remove
				'key'   => 'options-page',
				'value' => array( $this->key, )
			),
		) );


		// Set up our fields 
		/*
		$cmb->add_field( array(
			'name' => 'Mobile Banking App Bars',
			'id' => 'mobile-banking',
			'type' => 'title',
			'desc' => 'Set the copy and links used to populate the mobile banking app bars on the site. If the link field is left empty, the bar will not display.'
		) );

		$cmb->add_field( array(
			'name' => 'Android App Message',
			'id' => 'android-content',
			'type' => 'text',
			'default' => 'Install our Android mobile banking app!'
		) );

		$cmb->add_field( array(
			'name' => 'Android App Link',
			'id' => 'android-link',
			'type' => 'text',
			'default' => ''
		) );

		$cmb->add_field( array(
			'name' => 'iOS App Message',
			'id' => 'ios-content',
			'type' => 'text',
			'default' => 'Install our iOS mobile banking app!'
		) );

		$cmb->add_field( array(
			'name' => 'iOS App Link',
			'id' => 'ios-link',
			'type' => 'text',
			'default' => ''
		) );
		*/


		// Set up our fields 
		$cmb->add_field( array(
			'name' => 'Footer Content',
			'id' => 'footer-content',
			'type' => 'title',
			'desc' => 'Set the content for the footer columns.'
		) );

		$cmb->add_field( array(
			'name' => 'Column One Content',
			'id' => 'column-one',
			'type' => 'wysiwyg',
			'default' => '',
			'options' => array(
			    'textarea_rows' => 6
			)
		) );

		$cmb->add_field( array(
			'name' => 'Column Two Content',
			'id' => 'column-two',
			'type' => 'wysiwyg',
			'default' => '',
			'options' => array(
			    'textarea_rows' => 6
			)
		) );

		$cmb->add_field( array(
			'name' => 'Column Three Content',
			'id' => 'column-three',
			'type' => 'wysiwyg',
			'default' => '',
			'options' => array(
			    'textarea_rows' => 6
			)
		) );

		$cmb->add_field( array(
			'name' => 'Column Four Content',
			'id' => 'column-four',
			'type' => 'wysiwyg',
			'default' => '',
			'options' => array(
			    'textarea_rows' => 6
			)
		) );


	}

	/**
	 * Public getter method for retrieving protected/private variables
	 * @since  0.1.0
	 * @param  string  $field Field to retrieve
	 * @return mixed          Field value or exception is thrown
	 */
	public function __get( $field ) {
		// Allowed fields to retrieve
		if ( in_array( $field, array( 'key', 'metabox_id', 'title', 'options_page' ), true ) ) {
			return $this->{$field};
		}

		throw new Exception( 'Invalid property: ' . $field );
	}

}

/**
 * Helper function to get/return the pure_admin object
 * @since  0.1.0
 * @return pure_admin object
 */
function pure_admin() {
	static $object = null;
	if ( is_null( $object ) ) {
		$object = new pure_admin();
		$object->hooks();
	}

	return $object;
}



/**
 * Wrapper function around cmb2_get_option
 * @since  0.1.0
 * @param  string  $key Options array key
 * @return mixed        Option value
 */
function pure_get_option( $key = '' ) {
	return cmb2_get_option( pure_admin()->key, $key );
}

// Get it started
pure_admin();


