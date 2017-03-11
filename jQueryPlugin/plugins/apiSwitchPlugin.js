;(function($) {
	$.fn.apiSwitch = function(options) {
		var setting = $.extend({
			on: '<span>On</span>',
			waiting: '<span>Processing</span>',
			off: '<span>Off</span>',
			api: '',
			data: {},
		}, options);

		this.each(function() {
			var status = $(this).attr('status');

			if(status === 'on') {
				$(this).html('').html(setting.on);
			} else {
				$(this).html('').html(setting.off);
			}

        	$(this).unbind('click').bind('click', function(e) {
				e.preventDefault();
				var status = $(this).attr('status');
				var selector = $(this);
				data = $.extend({
					'status': status
				}, setting.data);
				$.ajax({
					'url': setting.api,
					'data': data,
					'type': 'POST',
					'dataType': 'json',
				}).done(function(data) {
					selector.attr('status', data.status);
					content = (data.status=='on')?setting.on:setting.off;
					selector.html('').html(content);
				});
				$(this).html('').html(setting.waiting);
			});
        });
        return this;
	};
}(jQuery));
