<html>
<head>
<link rel="stylesheet" type="text/css" href="boxes.css" />
<script src="jquery.js"></script>
<script src="jquery.mansonry.min.js"></script>
<script>
//   $(this).toggleClass("thumbnail",1000);
//   $(this).toggleClass("blown",1000); 

$(document).ready(function(){

var $container = $('#container');
$container.imagesLoaded( function(){
  $container.masonry({
//    itemSelector : '.thumbnail',
    isAnimated:"true",
//    columnWidth: 100
  });
});




// $(".thumbnail").click(function(){
//   $(this).animate({zIndex:'+=50'},1);
//   $(this).animate({width:"40%",opacity:1},1000);
//   $(this).toggleClass('blown');
//   });


 $(".thumbnail").toggle(
     function()
     {
      $(this).animate({zIndex:'50'},1);
      $(this).animate({width: "40%",opacity:1}, 500);
      },
     function()
     {
      $(this).animate({zIndex:'1'},1);
      $(this).animate({width: "20%",opacity:.3}, 500);
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
      if ($images != "." && $images != "..") {
            //echo "$images<br>";
            //echo "<div class=\"imagecontainer\">";
            $i++;
            $size=getimagesize("$imagedir/$images");
            $width=$size[0];
            $height=$size[1];
            //if ($width>$height){echo "<img class=\"thumbnail thumbnail_horiz\" src=$imagedir/$images>";}
            //else{echo "<img class=\"thumbnail thumbnail_vert\" src=$imagedir/$images>";}
            if (fmod($i,5)>2){echo "<img class=\"thumbnail thumbnail_end\" src=$imagedir/$images>";}
            else{echo "<img class=\"thumbnail thumbnail_front\" src=$imagedir/$images>";}
            //echo "</div>";
        }
}
?>

</div>
</body>
</html>