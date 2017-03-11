/**
 * jQuery download table plugin
 * author: Jianyu Feng ( grace0927@github )
 * Licensed under the MIT license
 *
 * TODO: need more refactor to make it robust and clean
 */
 ;( function( $ ) {
	$.fn.downloadTable = function( elem, options ) {
		var setting = $.extend( {
			target: ""
		}, options );

		this.unbind( "click" ).bind( "click", function( e ) {
			e.preventDefault();

			var content = "data:text/csv,";

			$( elem ).find( "tr" ).each( function( i, v ) {
				$( v ).find( "th,td" ).each( function( i, v ) {
					content += v.textContent+"%2C";
				} );
				content += "%0A";
			} );

			window.open( content );
		} );

		return this;
	}
}( jQuery ) );
