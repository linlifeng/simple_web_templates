
/* ---------------------------------- BG IMAGE CYCLE ANIMATION ----------------------------*/


$(document).ready(function() {
    function alternatebackground(){
		$('#background4').delay(4000).fadeOut(2000).delay(22000).fadeIn(2000);
		$('#background3').delay(10000).fadeOut(2000).delay(16000).fadeIn(2000);
		$('#background2').delay(16000).fadeOut(2000).delay(10000).fadeIn(2000);
		$('#background1').delay(22000).fadeOut(2000).delay(4000).fadeIn(2000);
	}
	alternatebackground();
	homeinterval=window.setInterval(alternatebackground,30000);

});






/* ---------------------------------- JUMPING MENU ----------------------------*/

function showcontent(button)

{

	$('#contents').animate({top:1000},500);
	if (button=="home"){
       setTimeout(function(){
	       $.post('home.php',{},function(data){
		    	$('#contents').html(data).animate({top:'0'},'medium');
	       });
  		},500);
	}
	
	
	else if (button=="projects"){
		setTimeout(function(){
			$.post('projects.php',{},function(data){
				$('#contents').html(data).animate({top:'0'},'medium');
			});
		},500);
	}
	
	
	else if (button=="gallery"){

		setTimeout(function(){
			$.post('gallery.php',{},function(data){
				$('#contents').html(data).animate({top:'0'},'medium');
			});
		},500);
	}
	
	
	
	else if (button=="contact"){
		setTimeout(function(){
			$.post('contact.php',{},function(data){
				$('#contents').html(data).animate({top:'0'},'medium');
			});
		},500);
	}

	/* ---------------------ADD XXX


		else if (button=="XXX"){
		setTimeout(function(){
			$.post('XXX.php',{},function(data){
				$('#contents').html(data).animate({top:'0'},'medium');
			});
		},500);
	}
	
	--------------------------*/	
	
}

