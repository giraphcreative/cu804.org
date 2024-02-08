<?php


function online_branch_login() {
	$form_code = <<<EOD
<form action="https://www.mobicint.net/l80/" autocomplete="off" method="post" name="form" _lpchecked="1">
	<p>Username:<br>
		<input name="user" type="text" placeholder="Username" autocomplete="off"></p>
	<p>Password:<br>
		<input name="password" type="password" placeholder="Password" autocomplete="off"></p>
	<p><input class="login login-submit" type="submit" value="Log In"> &nbsp; <a href="https://www.mobicint.net/l80/forgotPassword/enterUsername" class="forgot">Forgot Password?</a></p>
</form>
EOD;
	return $form_code;
}
add_shortcode('online-branch-login', 'online_branch_login');


