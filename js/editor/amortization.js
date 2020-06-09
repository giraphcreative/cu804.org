

(function() {
	tinymce.PluginManager.add('amort_mce_button', function( editor, url ) {
		editor.addButton('amort_mce_button', {
			title: 'Add Amortization Calculator',
			image: url + '/icon/amort.png',
			onclick: function() {
				editor.insertContent('[amortization amount="$25,000" rate="3.99%" term="10y" /]');
			}
		});
	});
})();

