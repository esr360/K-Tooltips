
/* Tooltips
================================================================ */

(function ( $ ) {
	
	$.fn.extend({
		
		tooltip: function(options) {
			
			var defaults = {  
				position : "top",
				style    : "default"
			};  
			
			var options = $.extend(defaults, options);	
			
			return this.each(function() {
				
				var $content = $(this).attr("data-tooltip");			
				var $position = options.position;		
				var $style = options.style;
				
				$(this).attr("ontouchstart", " ");
				
				$(this).append(
					$("<div class='tooltip-wrapper-" + $position + "-" + $style + "'><div class='tooltip-content'>"+ $content +"</div></div>")
				);
				
			});
			
		} // tooltip
		
	});

}( jQuery ));