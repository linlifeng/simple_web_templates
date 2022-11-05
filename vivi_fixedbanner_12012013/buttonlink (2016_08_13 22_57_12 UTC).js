//------------- SCRIPTS FOR BG BODYWRAP (do not touch!) -------------------




         function reel(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
				  $('#backgroundimage').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('reel.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
         function shorts(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
				  $('#backgroundimage').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('shorts.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }

         function gallery(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
				  $('#backgroundimage').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('gallery.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
         function other(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
				  $('#backgroundimage').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('other.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
		function showvids(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
				  $('#backgroundimage').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('clips.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
         function resume(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
				  $('#backgroundimage').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('resume.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).animate({width:'show'});
                                   });
         }
         
      //--------------  PROJECT PAGES  ----------------------------

         function showproject1(){
                  $('#bodywrap').animate({opacity:.2});
                  //$('#bodywrap').hide();
                  $('#subcontent').hide();
                  $.post('project_pages/project1.php',{contenttype:""},
                  function(output) {
                                   $('#subcontent').html(output).animate({width:'show'},'slow');
                                   });
         }
         function showproject2(){
                  $('#bodywrap').animate({opacity: .2});
                  //$('#bodywrap').hide();
                  $('#subcontent').hide();
                  $.post('project_pages/project2.php',{contenttype:""},
                  function(output) {
                                   $('#subcontent').html(output).animate({width:'show'},'slow');
                                   });
         }
         function showprojectback(){
                  $('#subcontent').animate({width:'hide'});
                  $.post('projects.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).animate({opacity:1});
                                   });
         }
