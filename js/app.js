$(document).ready(function() {
	// nice inline images
	$(".row > .columns img").each(function(i_not_used, img) {
		var $img = $(img).wrap('<div class="th right text-center"></div>');
		var $parent = $img.parent(); // now it's wrapped
		var $h5 = $parent.next();
		if ($h5.is("h5")) {
			$h5.detach().appendTo($parent);
		}
	});
}).
foundation();
