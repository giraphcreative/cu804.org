

(function() {
	tinymce.PluginManager.add('calc_mce_button', function( editor, url ) {
		editor.addButton('calc_mce_button', {
			title: 'Add Loan Calculator',
			image: url + '/icon/calculator.png',
			onclick: function() {
				// change the shortcode as per your requirement
				editor.insertContent('[calculator amount="5000" rate="7.5" term="36m" /]');
			}
		});
	});
})();

