/**
 * jQuery API select plugin
 * author: Jianyu Feng ( grace0927@github )
 * Licensed under the MIT license
 *
 * TODO: need more refactor to make it robust and clean
 */
 ;( function( $ ) {
	$.fn.apiInitSelect = function( options ) {
		var setting = $.extend( {
			orig: {
				key: "all",
				value: "All"
			},
			api: "",
			data: {},
		}, options );

		var init = function( elem ) {
			$.ajax( {
				"url": setting.api,
				"type": "GET",
				"dataType": "json",
			} ).done( function( data ) {
				$.each( data, function( idx, val ) {
					elem.append( $( "<option></option>" ).attr( "value", val.key ).text( val.value ) );
				} );
			} ).fail( function( data ) {} );

			elem.append( $( "<option></option>" ).attr( "value", setting.orig.key ).text( setting.orig.value ) );
		}

		init( this );

		return this;
	};
}( jQuery ) );
