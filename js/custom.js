jQuery(document).ready(function($) {	

	// VALIDATION FORM
	$("#commentForm").validate();

	$("#signupForm").validate({
		rules: {
			Uname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6
			},
			confirm_password: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			Uname: "Insira seu nome",
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Insira uma senha",
				minlength: "Sua senha deve ter no mínimo 6 caracteres"
			},
			confirm_password: {
				required: "Insira a confirmação de senha",
				minlength: "Sua senha deve ter no mínimo 6 caracteres",
				equalTo: "Confirmação incorreta, insira a mesma senha"
			},
			email: "Insira um e-mail válido",
			agree: "Please accept our policy"
		}
	});
	
	//	=== EVENTOS
	//DEV 1

	$('#definicao1').hide();

	$('#imgmat').mouseover(function(){
		document.getElementById("imgmat").src = "img/matanza.jpg";
		$('#definicao1').show(400);
	});

	$('#imgmat').mouseleave(function(){
		document.getElementById("imgmat").src = "img/matanza.jpg";
		$('#definicao1').hide(400);
	});

	//DEV2 

	$('#definicao2').hide();

	$('#imghur').mouseover(function(){
		document.getElementById("imghur").src = "img/hurt.jpg";
		$('#definicao2').show(400);
	});

	$('#imghur').mouseleave(function(){
		document.getElementById("imghur").src = "img/hurt.jpg";
		$('#definicao2').hide(400);
	});

	//DEV3

	$('#definicao3').hide();

	$('#imgwal').mouseover(function(){
		document.getElementById("imgwal").src = "img/walktheline.jpg";
		$('#definicao3').show(400);
	});

	$('#imgwal').mouseleave(function(){
		document.getElementById("imgwal").src = "img/walktheline.jpg";
		$('#definicao3').hide(400);
	});

	
	// GEOLOCATION
	
	
var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);

	// SMOOTHSCROLL

	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	        $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});



	$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }
	});


	
	$("ul.sf-menu").superfish({ 
        animation: {height:'show'},   
        delay:     200 ,              
        autoArrows:  false,
        speed: 200
    });
    
	
    $('.home-slider').flexslider({
    	animation: "fade",
    	controlNav: false,
    	keyboardNav: true
    });
    
	
    $('.project-slider').flexslider({
    	animation: "fade",
    	controlNav: true,
    	directionNav: false,
    	keyboardNav: true
    });
    
	
	var topContainer = $("#top-widget");
	var topTrigger = $("#top-open");
	
	topTrigger.click(function(){
		topContainer.animate({
			height: 'toggle'
		});
		
		if( topTrigger.hasClass('tab-closed')){
			topTrigger.removeClass('tab-closed');
		}else{
			topTrigger.addClass('tab-closed');
		}
		
		return false;
		
	});
	
	
	$('.poshytip').poshytip({
    	className: 'tip-twitter',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 5,
		allowTipHover: false
    });
	
   
    $('.form-poshytip').poshytip({
		className: 'tip-twitter',
		showOn: 'focus',
		alignTo: 'target',
		alignX: 'right',
		alignY: 'center',
		offsetX: 5
	});
	
	
	$('a[data-rel]').each(function() {
	    $(this).attr('rel', $(this).data('rel'));
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto();
		
		

	$("<select id='comboNav' />").appendTo("#combo-holder");
	

	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Navigation"
	}).appendTo("#combo-holder select");
	

	$("#nav a").each(function() {
		var el = $(this);		
		var label = $(this).parent().parent().attr('id');
		var sub = (label == 'nav') ? '' : '- ';
		
		$("<option />", {
		 "value"   : el.attr("href"),
		 "text"    :  sub + el.text()
		}).appendTo("#combo-holder select");
	});
	 
	
	$("#comboNav").change(function() {
	  location = this.options[this.selectedIndex].value;
	});

		
});

