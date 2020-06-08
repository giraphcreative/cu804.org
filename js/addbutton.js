

(function() {
       tinymce.PluginManager.add('btn_mce_button', function( editor, url ) {
           editor.addButton('btn_mce_button', {
                       text: 'Button',
                       icon: false,
                       onclick: function() {
                         // change the shortcode as per your requirement
                          editor.insertContent('[button url="/link" class="blue"]Button Text[/button]');
                      }
             });
       });
})();