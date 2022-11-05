//------------- SCRIPTS FOR BG BODYWRAP (do not touch!) -------------------




         function showdemo(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('demo.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
         function showprojects(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('projects.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }

         function showgallery(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('gallery.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
         function showother(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('other.php',{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
                                   });
         }
         function showcontact(){
                  $('#bodywrap').hide();
                  $('#subcontent').hide();
                  $('#bodywrap').animate({opacity:1});
                  $.post('contact.php',{contenttype:""},
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
