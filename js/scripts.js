
    
	// Validation
	
	var nameError = document.getElementById('name_error');
    var mailError = document.getElementById('mail_error');
    var phoneError = document.getElementById('phone_error');
    var subjectError = document.getElementById('subject_error');
    var submitError = document.getElementById('submit_error');

    function validateName(){
      var name = document.getElementById('contact_name').value;
      if (name.length == 0){
        nameError.innerHTML="Name is required";
        return false;
      }
      if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name";
        return false;
      }
      nameError.innerHTML='valid';
      return true;
    }

    function validateEmail(){
      var email = document.getElementById('contact_email').value
      if(email.length == 0){
        mailError.innerHTML="Email is required";
        return false;
      }
      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        mailError.innerHTML="Not Valid";
        return false;
      }
      mailError.innerHTML='valid';
      return true;
    }

    function validatePhone(){
      var phone = document.getElementById('contact_phone').value
      if (phone.length == 0){
        phoneError.innerHTML="Phone No is required";
        return false;
      }
      if (phone.length !== 10){
        phoneError.innerHTML="Phone No ahould be 10 digit";
        return false;
      }
      if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Only digits";
        return false;
      }
      phoneError.innerHTML='valid';
      return true;

    }
    function validateSubject(){
      var subject = document.getElementById('contact_subject').value
      var required =5
      var left = required - subject.length
      if(left > 0){
        subjectError.innerHTML=left + "More charecters required";
        return false;
      }
      subjectError.innerHTML='valid';
      return true;
    }
    function validateMessage(){
      var message = document.getElementById('contact_message').value
      var required = 25
      var left = required - message.length
      if(left > 0){
        message_error.innerHTML = left + "More charecters required";
        return false;
      }
      message_error.innerHTML='valid';
      return true;
    }
    function validateSubmit(){
      if(!validateName() || !validateEmail() || !validatePhone() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML='Fill all data'
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false;
      }
    }

// ---------------------------------------//


( function($) {
  'use strict';

    
   /*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/

	var navbar=$('.js-navbar:not(.navbar-fixed)');


	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: 50
	  }
	});



	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/



	$('.navbar-toggle').on('click',function(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture').on('click', function(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});


    if ($('.pagepiling').length > 0){

      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 280,
		    loopBottom:true,
		    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		    afterLoad: function(anchorLink, index){
	            if ( $('.pp-section.active').scrollTop() > 0 ){
	            	$('.navbar').removeClass('navbar-white');
	            }
	            else{
	            	$('.navbar').addClass('navbar-white');
	            }
	            
  			}
		});



		/*-------------------------------------------------------------------------------
		   Scroll into sections 
		/-------------------------------------------------------------------------------*/



		$('.pp-scrollable').on('scroll', function () {
    		var scrollTop =$(this).scrollTop();
    		if (scrollTop > 0 ) {
    			$('.navbar-2').removeClass('navbar-white');
    		}
    		else{
    			$('.navbar-2').addClass('navbar-white');
    		}
		});



		/*-------------------------------------------------------------------------------
		   Scroller navigation
		/-------------------------------------------------------------------------------*/



		$('#pp-nav').remove().appendTo('body').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
    } 


	

})(jQuery);
