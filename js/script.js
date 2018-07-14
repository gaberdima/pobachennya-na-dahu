$(function(){



	$( "#trapezoid" ).click(function() {
  		$( ".hid" ).slideToggle( "slow" );
	});

	$("form").submit(function(){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		});
	});

    // $("#form").submit(function() {
    //     $.ajax({
    //         type: "POST",
    //         url: "mail.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
    //         $("#form").trigger("reset");
    //     });
    //     return false;
    // });





    $("#phone").inputmask("+380(99)99-99-999");
    $("#phone2").inputmask("+380(99)99-99-999");


});