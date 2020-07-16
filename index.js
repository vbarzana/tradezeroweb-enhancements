'use strict';

$(document).ready(function () {
	$('head')
		.append("<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500,400italic,700,700italic' rel='stylesheet' type='text/css'>");

	$('.trade-type').each(function () {
		var item = $(this);
		if (!item) {
			return;
		}
		var text = item.text();
		item.addClass(text === "Short Stock" ? 'fa fa-arrow-down' : text === "Long Stock" ? 'fa fa-arrow-up' : '');
		item.css('display', 'block');
		item.text('');
	})
});