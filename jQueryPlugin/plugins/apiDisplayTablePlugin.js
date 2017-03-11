;(function($) {
	$.fn.apiDisplayData = function(elem, options) {
		var settings = $.extend({
			api: "",
			data: {},
			titles: [],
			fields: [],
			table_id: '',
			table_class: 'table table-bordered',
			callback: function(data) {},
			validator: function(){return true;},
		}, options);

		var getData = function(elem) {
			var data = {};
			$.each(elem, function(key, value) {
				data[key] = $(value).val();
			})
			return data;
		};

		this.unbind('click').bind('click', function(e) {
			if(typeof settings.validator==='function' && !settings.validator()) {
				$(elem).html('').html($('<span></span>').attr('id', 'msg').text('Invalid Input'));
				return ;
			}
			var data = getData(settings.data);
			$.ajax({
				url: settings.api,
				data: data,
				type: 'POST',
				dataType: 'json',
			}).done(function(data) {
				var table = $('<table></table>').addClass(settings.table_class).attr('id', settings.table_id);

				var thead = $('<thead></thead>');
				var row = $('<tr></tr>');
				$.each(settings.titles, function(key, value) {
					row.append($('<th></th>').text(value));
				});
				thead.append(row);

				var tbody = $('<tbody></tbody>');
				$.each(data, function(key, value) {
					row = $('<tr></tr>');
					for(field of settings.fields) {
						row.append($('<td></td>').text(value[field]));
					}
					tbody.append(row);
				});

				table.append(thead);
				table.append(tbody);

				$(elem).html('').html(table);
				if(typeof settings.callback === 'function') {
					settings.callback(data);
				}
			});
			$(elem).html('').html($('<span></span>').attr('id', 'msg').text('Processing'));
		});
	}
}(jQuery));
