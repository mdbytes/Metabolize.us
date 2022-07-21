console.log("JavaScript is Ready");

   

$(document).ready(function () {
    console.log("JQuery is Ready");
    
    // hide .navbar first
    $(".navbar").hide();
    
    // fade in .navbar
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn('slow');
            } else {
                $('.navbar').fadeOut();
            }
        });
    
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
      });
    
    $("#message_response").hide();
    $("#contact_form_error_message").hide();
/*
    $('#message_submit').click(function (e) {
        if ($('#contact-form').valid()) {
            e.preventDefault();
            $('#contact-form').trigger('reset');        
            $('#message_response').dialog();
            
        } else {
            $('#contact_form_error_message').fadeToggle(); 
        }
    });
  */  
    
    });