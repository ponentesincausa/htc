(function($){
	$(function(){
		var controller = $('.console').console({
			promptLabel: '> ',
			commandValidate: function(line) {
				return line != "";
			},
			commandHandle: function(line){
				console.log(line);
				return [
					{
						msg: "=> [12,42]",
						className: "jquery-console-message-value"
					},
					{
						msg:":: [a]",
						className:"jquery-console-message-type"
					},
					{
						msg: "this is neat",
						className: 'jquery-console-message-type'
					}
				]
			},
			autofocus: true,
			animateScroll: true,
			promptHistory: true,
			// charInsertTrigger: function(keycode,line){
			// 	// Let you type until you press a-z
			// 	// Never allow zero.
			// 	return !line.match(/[a-z]+/) && keycode != '0'.charCodeAt(0);
			// }
		});
	});

	function inputHandler() {
		
	}
})(jQuery);