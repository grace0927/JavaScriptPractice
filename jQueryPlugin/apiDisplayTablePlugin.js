;(function($) {
	$.fn.apiDisplayData = function(elem, options) {
		var settings = $.extend({
			api: "",
			data: {},
			titles: [],
			callback: function() {},
		}, options);

		var getData = function(elem) {
			var data = {};
			$.each(elem, function(key, value) {
				data[key] = value.val();
			})
			return data;
		};

		this.unbind('click').bind('click', function(e) {
			var data = getData(settings.data);
			$.ajax({
				url: settings.api,
				data: data,
				type: 'POST',
				dataType: 'json',
			}).done(function(data) {
				var table = $('<table></table>').addClass('table table-bordered');
				
				var thead = $('<thead></thead>');
				var row = $('<tr></tr>');
				$.each(settings.titles, function(key, value) {
					row.append($('<th></th>').text(value));
				});
				thead.append(row);

				var tbody = $('<tbody></tbody>');
				$.each(data, function(key, value) {
					row = $('<tr></tr>');
					$.each(value, function(key, value) {
						row.append($('<td></td>').text(value));
					});
					tbody.append(row);
				});

				table.append(thead);
				table.append(tbody);

				elem.html('').html(table);
				settings.callback();
			});
			elem.html('').html($('<span></span>').attr('id', 'msg').text('Processing'));
		});
	}
}(jQuery));