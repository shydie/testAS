$(function() {

	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("#form").submit(function() { //Change
		var self  = $(this),
		email     = $('#mail').val(),
		date      = $('#date').val(),
		dateMax   = $('#date').attr('max'),
		pass      = $('#pass').val(),
		repass    = $('#repass').val();

		if (new Date(date) <= new Date(dateMax) && pass == repass){
			$('#preloader').bind('ajaxStart', function(){
				$(this).show();
			}).bind('ajaxStop', function(){
				$(this).hide();
			});
			$.ajax({
				type: "POST",
				url: "welcome.php",
				data: self.serialize()
			}).done(function( data ) {
				alert("Welcome " + email + "");
				setTimeout(function() {
					// Done Functions
					self.trigger("reset");
				}, 1000);
				$('button[type="submit"]').prop('disabled', true);
			});
			return false;
		}

	});
});
