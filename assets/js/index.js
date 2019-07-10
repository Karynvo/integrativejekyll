jQuery(document).ready(function ($) {
  
  var stickyThreshold = document.getElementById("stick").offsetTop - document.getElementById("banner").offsetTop;
  
  var initializeThreshold = function(){
    if(window.innerWidth < 1199)
      stickyThreshold = document.getElementById("banner").offsetHeight + document.getElementById("banner").offsetTop;
    else
      stickyThreshold = document.getElementById("stick").offsetTop - document.getElementById("banner").offsetTop;
  }
  
  initializeThreshold();

  // When the user scrolls the page or resizes page, execute myFunction 
  window.onload = function() {
    $("#cover").hide();
    myFunction();
  };
  window.onscroll = function() {
    myFunction();
  };
  window.onresize = function() {
    myFunction();
    initializeThreshold();
  };

  // Get the navbar
  var navbar = document.getElementById("stick");
  var headerContact = document.getElementById("header-contact");

  // Add the sticky class to the navbar when you reach  its scroll position. Remove "sticky" when you leave  the scroll position
  var myFunction = function() {
    if (window.pageYOffset > 0){
      document.getElementById("icon-logo-img").classList.add("skinny")
      headerContact.classList.add("short");
    }else {
      document.getElementById("icon-logo-img").classList.remove("skinny")
      headerContact.classList.remove("short");
    }
    // add padding to body for "integrative dentistry" banner
    document.body.style.paddingTop = document.getElementById("header-contact").offsetHeight + "px";

    if (window.pageYOffset > stickyThreshold){
      navbar.style.top = headerContact.offsetHeight + "px";
      navbar.classList.add("sticky");
    } 
    else{
      navbar.classList.remove("sticky");
    } 
  };


  /* contact form validation */
  var $sub = $("#_subject");
	$("#email").on("input", function() {
		$sub.val("Request Appointment (" + $(this).val() + ")");
	});

  $('.navbar-close').on('click',function() {
    $('#navbarSupportedContent').removeClass('show');
  });

  $( ".about-wrapper div.doctor-wrapper:even").addClass('flex-lg-row');
  $( ".about-wrapper div.doctor-wrapper:odd").addClass('flex-lg-row-reverse');

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