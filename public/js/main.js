jQuery(function($) {

	//Ajax contact
	var form = $('.contact-form');
		form.submit(function () {
			$this = $(this);
			$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//Goto Top
	$('.gototop').click(function(event) {
		 event.preventDefault();
		 $('html, body').animate({
			 scrollTop: $("body").offset().top
		 }, 500);
	});	
	//End goto top	

	

});

//Contador Campus Party El Salvador
function getTime() {
	hoy = new Date();
	cpslv = new Date("Nov 27 2014 15:00:00");
	dias = (cpslv - hoy) / 1000 / 60 / 60 / 24;
	contarDia = Math.floor(dias);
	dy = (contarDia == 1) ? " d&iacute;a, " : " d&iacute;as, "
	document.getElementById("contador").innerHTML = "Estamos a " + contarDia + dy + "participa en la rifa de entradas <a href='http://goo.gl/MjdnCq'>AQUÍ</a>";
	newTiempo = window.setTimeout("getTime();", 1000);
}