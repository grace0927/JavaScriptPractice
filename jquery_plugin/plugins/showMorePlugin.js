/**
 * jQuery show more plugin
 * author: Jianyu Feng ( grace0927@github )
 * Licensed under the MIT license
 *
 * TODO: need more refactor to make it robust and clean
 */
 ;( function( $ ) {
	$.fn.showMore = function( elem, options ) {
		var setting = $.extend( {
			more: "<span>Show More &#9660;</span>",
		less: "<span>Show Less &#9650;</span>",
		}, options );

		this.each( function() {
			elem.hide();

			$( this ).attr( "data-now", "0" );

			$( this ).html( "" ).html( setting.more );

			$( this ).unbind( "click" ).bind( "click", function( e ) {
				e.preventDefault();

				var status = $( this ).attr( "data-now" );
				if ( status === "1" ) {
					elem.hide();
					$( this ).attr( "data-now", "0" );
					$( this ).html( "" ).html( setting.more );
				} else {
					elem.show();
					$( this ).attr( "data-now", "1" );
					$( this ).html( "" ).html( setting.less );
				}
			} );
		} );

		return this;
	};
}( jQuery ) );
