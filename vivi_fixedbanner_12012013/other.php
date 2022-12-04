<script src="jquery.js"></script>
<script type="text/javascript" src="shadowbox.js"></script>
<script type="text/javascript">
        Shadowbox.init();
</script>
<script src="jquery.mansonry.min.js"></script>

<script>

$(document).ready(function(){

var $container = $('#doodlecontainer');
    $container.imagesLoaded( function(){
    $container.masonry({
//    itemSelector : '.imagecontainer',
    isAnimated:"true",
//    columnWidth: 100
  });
});



 $('.caption').hide();

 $('.imagecontainer').on('mouseover',function(){$(this).children('.caption').slideDown('500'); $(this).animate({opacity:1},1);});
 $('.imagecontainer').on('mouseout',function(){$('.caption').hide();});
 $('.thumbnail').on('mouseover',function(){$(this).animate({opacity:1},400)});
 //$('.thumbnail').on('mouseout',function(){$(this).animate({opacity:.3},300)});
 $('.imagecontainer').toggle(
     function()
     {
      $(this).animate({zIndex:'50'},1);
      $(this).animate({width: "60%"}, 500);
      $(this).children('.thumbnail').animate({opacity:1},500);
      },
     function()
     {
      $(this).animate({zIndex:'1'},500);
      $(this).animate({width: "20%",opacity:1}, 500);
      $(this).children('.thumbnail').animate({opacity:.3},500);
      });



});
</script>

<div class="content">
<p class="title">+SANDBOX</p>
<div id="doodlecontainer">
<?php
$imagedir="../boxes/images/";
$imagedirhandle=opendir($imagedir);
$i=0;
while ($images=readdir($imagedirhandle)){
      if ($images != "." && $images != ".." && $images !="descriptions.txt") {
         //<!----------------------thumbnail container----------------->
         echo "<div class=\"thumbnail_complex\">";
          //    <!-----------------thumbnail title--------------------->
              echo "<div class=\"thumbnail_title\">";
              $desc_file="./thumbnail/descriptions.txt";
              $desc=fopen($desc_file,'r');
              while (!feof($desc))
              {
               $line=fgets($desc,1024);
               $word=explode('@',$line);
               //echo $word[0];
               //echo $images;
               if ($word[0]==$images){echo $word[1];}
               }
               echo "</div>";
            //<!------------------------thumbnail image------------------->
            echo "<a href=\"../boxes/images/$images\" rel=\"shadowbox[gallery]\"><img class=\"gallery_thumbnail\" src=$imagedir/$images></a>";
         echo "</div>";
      }
}
?>

</div>
</div>