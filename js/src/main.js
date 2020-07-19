

// onload responsive footer and menu stuff
jQuery(document).ready(function($){


	// remove height and width from images inside
	var fluid_images = $( '.content img' );
	fluid_images.removeAttr( 'width' ).removeAttr( 'height' );


	// show/hide menus when they click the toggler
	var menu = $( 'header nav' );
	var menu_toggle = menu.find( 'button.menu-toggle' );
	var menu_ul = menu.find( '.nav-menu' );
	menu_toggle.click(function(){

		// if the menu is visible, hide it, 
		if ( menu_ul.is( ':visible' ) ) {
			menu_ul.hide();
		} else {
			menu_ul.show();
		}

		// when user clicks a link in the menu, open submenu if it exists.
		menu_ul.find( 'a' ).click(function(){
			var parent_li = $( this ).parent( 'li' );
			var submenu = $( this ).next( 'ul' );
			if ( !submenu.is( ':visible' ) && parent_li.hasClass( 'menu-item-has-children' ) ) {
				event.preventDefault();
				parent_li.addClass( 'open' );
				submenu.show();
			}
		});

	});


	$( '.content a:not(.previous):not(.next):not(.lightbox-iframe), a.off-site' ).click(function( e ){
		
		// break the normal linking behavior
		e.preventDefault();

		// get the link
		var the_link = $( this );
		var the_link_href = the_link.attr( 'href' );

		// prompt the user and if they confirm the prompt, proceed to the third party site.
		if ( the_link.hasClass( 'bypass' ) ||
			the_link_href.match( /cu804.org/i ) || 
			the_link_href.match( /cu804.test/i ) || 
			the_link_href.match( /cu804.giraph.io/i ) || 
			the_link_href.match( /www.mobicint.net/i ) || 
			the_link_href.charAt(0) === '#' || 
			the_link_href.charAt(0) === '/' ) {
			location.href = the_link_href;
		} else {
			if ( confirm( "This link is taking you to a third party provider - are you sure you want to proceed?" ) ) {
				window.open( the_link_href, "_blank" );
			}
		}

	});

	var menuPosition = $('nav').offset();
	$( window ).on('resize',function() {
		menuPosition = $('nav').offset();
	});


	$( window ).on('scroll',function(){
    	scrollPosition = $(this).scrollTop();
    	if ( scrollPosition >= menuPosition.top & $( window ).innerWidth()>820 ) {
    		$( 'header nav' ).addClass( 'sticky' );
    	} else {
    		$( 'header nav' ).removeClass( 'sticky' );
    	}
	});


	// couple of quick bindings for magnific popup
	$( '.lightbox-iframe' ).magnificPopup({ 'type': 'iframe' });
	$( '.lightbox' ).magnificPopup({ 'type': 'image' });


});

