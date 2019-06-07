import $ from "jquery";

import "./example-styles/index.scss";

$(document).ready(function() {
	$("body").addClass('page_loaded')

	$('input').focusout(function(event) {
		/* Act on the event */
		let el = $(event.currentTarget)
		if (el.val().replace(/ /g, '').length !== 0) {
			el.addClass('active')
		} else {
			el.removeClass('active')
		}
	});
});