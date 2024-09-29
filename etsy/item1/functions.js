
var mq = window.matchMedia( "(min-device-width: 800px)" );
//redirect for mobile site below
//     if (!mq.matches){
//         window.location = "http://llresume.weebly.com";
//    }

    
function toTeaching(){
    $("html,body").animate({scrollTop: $('#teaching').offset().top},1000);
}

function toBioinfo(){
    $("html,body").animate({scrollTop: $('#bioinfo').offset().top},1000);
}
function toBioinfoProjects(){
    $("html,body").animate({scrollTop: $('#bioinfoprojects').offset().top},1000);
}
function toBioinfoSkills(){
    $("html,body").animate({scrollTop: $('#bioinfoskills').offset().top},1000);
}
$(document).ready(function(){
    $('.subleft p').hide();
    $('.subright p').hide();
    $('#menudiv').hide();
    $('#contact').hide();

    if (mq.matches){
        menuwidth = "24%";
    }
    else{
        menuwidth = "76%";
    }
    
    $('#menuicon').click(
        function(){
            $("#menudiv").fadeIn().animate({'width': menuwidth},0);
            $("html").animate({'right': menuwidth},0);
            
            //$('.exon').animate({opacity: 1},500);
        });
    $('.menu,#namelogo').click(
        function(){
            $('#contact').fadeOut();
            $("html").delay(1000).animate({'right': '0px'},100);
            $("#menudiv").delay(1000).fadeOut();
            
            $('.exon').animate({opacity: 1},200);
        }
    );
    
    $('.exon, #contact').click(function(){
        $("#menudiv").fadeOut();
        $("html").delay(10).animate({'right': '0px'},100);
    });
    
    $('#namelogo').click(function(){
        $("html,body").animate({scrollTop: $('#namecard').offset().top},1000);
        //$("html").animate({'right': '0px'},100);
        //$("#menudiv").delay(1000).fadeOut();
        //$('.exon').animate({opacity: 1},200);
        //$('#contact').fadeOut();
    }); 
    
    $('#assaydevmenu').click(function(){
        $("html,body").animate({scrollTop: $('#verigene').offset().top},1000);
    });    
    $('#assaymenu').click(function(){
        $("html,body").animate({scrollTop: $('#products').offset().top},1000);
    });
    $('#dutymenu').click(function(){
        $("html,body").animate({scrollTop: $('#teamrole').offset().top},1000);
    });

    $('#genomemenu').click(function(){
        $("html,body").animate({scrollTop: $('#resprojects').offset().top},1000);
    });
    $('#projectmenu').click(function(){
        $("html,body").animate({scrollTop: $('#projects').offset().top},1000);
    });
    $('#publicationmenu').click(function(){
        $("html,body").animate({scrollTop: $('#publications').offset().top-0},1000);
    });
    //$('#teachingmenu').click(function(){
        //$("html,body").animate({scrollTop: $('#teaching').offset().top},1000);
    //});
    $('#teachingfeedbackmenu').click(function(){
        $("html,body").animate({scrollTop: $('#teachingfeedback').offset().top},1000);
    });
    $('#teachingmenu').click(function(){
        toTeaching()
    });
    $('#bioinfomenu').click(function(){
        toBioinfo()
    });
    $('#bioinfoprojectsmenu').click(function(){
        toBioinfoProjects()
    });
    $('#bioinfoskillsmenu').click(function(){
        toBioinfoSkills()
    });
    $('#timelinemenu').click(function(){
        $("html,body").animate({scrollTop: $('#timeline').offset().top},1000);
    });
    $('#contactmenu').click(function(){
        $("#contact").fadeIn();
        $('.exon').animate({opacity: 0},500);
    });
    
    
    $('.subcontent').click(function(){
        $(this).animate({'width': '88%', 'left':'2%'});
        //$(this).slideUp();
        $("html,body").animate({scrollTop: $(this).offset().top-0},500);
        $(this).children('p').slideToggle();
        
    });
    
    $('.nextSegButton').click(function(){
        //var eid = this.id;
        //var prevId = $(this).parents(".section").prev().prev()[0].id;
        var nextId = '#'+$(this).parents(".section").next().next().children()[0].id;
        $("html,body").animate({scrollTop: $(nextId).offset().top},1000);
        //alert(eid);
        //alert(nextId);
    });
    $('.prevSegButton').click(function(){
        //var eid = this.id;
        var prevId = '#'+$(this).parents(".section").prev().prev().children()[0].id;
        //var nextId = $(this).parents(".section").next().next()[0].id;
        $("html,body").animate({scrollTop: $(prevId).offset().top},1000);
        //alert(eid);
       // alert(prevId);
    });

});
