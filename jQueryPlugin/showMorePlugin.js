;(function($) {
    $.fn.showMore = function(elem) {
        this.each(function() {
        	elem.hide();
			$(this).attr('data-now', '0');
			$(this).html('').html('<span>Show More &#9660;</span>');
        	$(this).unbind('click').bind('click', function(e) {
				e.preventDefault();
				var status = $(this).attr('data-now');
	            if(status === '1') {
					elem.hide();
					$(this).attr('data-now', '0');
					$(this).html('').html('<span>Show More &#9660;</span>');
			    } else {
					elem.show();
					$(this).attr('data-now', '1');
					$(this).html('').html('<span>Show Less &#9650;</span>');
			    }
			});
        });
        return this;
    }; 
}(jQuery));