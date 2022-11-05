<html>
<head>
<link rel="stylesheet" type="text/css" href="boxes2.css" />
<script src="jquery.js"></script>
<script src="jquery.mansonry.min.js"></script>
<script>
//   $(this).toggleClass("thumbnail",1000);
//   $(this).toggleClass("blown",1000); 

$(document).ready(function(){

var $container = $('#container');
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
</head>
<body>

<div id="container">
<?php
$imagedir="./images/";
$imagedirhandle=opendir($imagedir);
$i=0;



while ($images=readdir($imagedirhandle)){
      if ($images != "." && $images != ".." && $images !="descriptions.txt") {
            //echo "$images<br>";
            echo "<div class=\"imagecontainer\">";
            $i++;
            $size=getimagesize("$imagedir/$images");
            $width=$size[0];
            $height=$size[1];
                        echo "<img class=\"thumbnail\" src=$imagedir/$images>";
            //if ($width>$height){echo "<img class=\"thumbnail thumbnail_horiz\" src=$imagedir/$images>";}
            //else{echo "<img class=\"thumbnail thumbnail_vert\" src=$imagedir/$images>";}
            //if (fmod($i,5)>2){echo "<img class=\"thumbnail thumbnail_end\" src=$imagedir/$images>";}
            //else{echo "<img class=\"thumbnail thumbnail_front\" src=$imagedir/$images>";}
                        echo "<div class=\"caption\">";
                             $desc_file="./images/descriptions.txt";
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
            echo "</div>";
        }
}
?>

</div>
</body>
</html>