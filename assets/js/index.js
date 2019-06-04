jQuery(document).ready(function ($) {
  var $sub = $("#_subject");
	$("#email").on("input", function() {
		$sub.val("Request Appointment (" + $(this).val() + ")");
	});

  $('.navbar-close').on('click',function() {
    $('#navbarSupportedContent').removeClass('show');
  });

  $('.contact-footer-info').on('click',function() {
    $('.contact-footer').toggleClass('bar-active');
  });

  $("form[name='book'").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      options: "required"
    },
    messages: {
      name: "Please enter your name",
      phone: "Please enter your phone number",
      email: "Please enter your email address",
      options: "Please select an option"
    },
    submitHandler: function(form){
      form.submit();
    },
    errorPlacement: function(error, element){
      if(element.prop('name') == 'options'){
        error.appendTo('.book-radio-group');
      }else{
        error.insertAfter(element);
      }
    }
  })
});