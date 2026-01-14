<!DOCTYPE html>
<!--[if IE 7]><html class="ie ie7" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 8]><html class="ie ie8" <?php language_attributes(); ?>><![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!--><html <?php language_attributes(); ?>><!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />

<title><?php wp_title( '|', true, 'right' ); ?> <?php bloginfo( 'sitename' ) ?></title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
<link href="<?php bloginfo( "template_url" ) ?>/css/main.css?v=15" rel="stylesheet" type="text/css">

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-178042198-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-178042198-1');
</script>

</head>
<body <?php body_class(); ?>>
<div class="container">
<header>

	<div class="wrap">
	
		<div class="logo">
			<a href="/" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<img src="<?php bloginfo( "template_url" ) ?>/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
			</a>
		</div>

		<div class="search-box">
			<a href="/contact" class="contact">Contact Us</a>
			<a href="https://cu804.locatorsearch.net/" class="locations">Locations</a>
			<a href="/rates" class="rates">Rates</a>
			<a href="/secure-login" class="online-banking-mobile">Online Banking</a>
			<form name="search" action="/" method="get"><span class="search-label">Search</span> <input type="text" name="s" value="" /></form>
		</div>

		<div class="online-banking">
			<span class="heading">Online Banking</span>
			<form action="https://www.mobicint.net/l80/" autocomplete="off" method="post" name="form" _lpchecked="1">
				<input name="user" type="text" placeholder="Username" autocomplete="off">
				<input name="password" type="password" placeholder="Password" autocomplete="off"><br>
				<input class="login login-submit" type="submit" value="Log In"> <a href="https://mobicint.net/l80/autoEnrollment" class="btn join">Join</a> <a href="https://www.mobicint.net/l80/forgotPassword" class="forgot">Forgot Password</a>
			</form>
		</div>

	</div>

	<nav>
		<button class="menu-toggle">Show/hide Menu</button>
		<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'nav-menu' ) ); ?>
	</nav>
	
</header>

<section class="content">
	<a name="content"></a>
