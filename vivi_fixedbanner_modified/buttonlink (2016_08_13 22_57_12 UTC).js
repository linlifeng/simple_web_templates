function changebg(){}

//------------- SCRIPTS FOR BG BODYWRAP (do not touch!) -------------------

         function switchcontent(pagename){
				//$('#bodywrap').animate({opacity:0});
				$('#bodywrap').hide();
                $('#subcontent').hide();
				$('#backgroundimage').hide();
                //$('#bodywrap').animate({opacity:1});
				$('#loading').show();
                $.post(pagename,{contenttype:""},
                  function(output) {
                                   $('#bodywrap').html(output).fadeIn();
								   $('#loading').fadeOut();
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
