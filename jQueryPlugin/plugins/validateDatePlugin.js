;(function($){
	var validateDate = function(date) {
		var regex = new RegExp('^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$');
		return regex.test(date);
	};

	$.fn.validateDate = function(option) {
		var settings = $.extend({
			error_class: ''
		}, option);

		var res = validateDate(this.val());
		if(res) {
			this.removeClass(settings.error_class);
		} else {
			this.addClass(settings.error_class);
		}

		return res;
	};
}(jQuery));
