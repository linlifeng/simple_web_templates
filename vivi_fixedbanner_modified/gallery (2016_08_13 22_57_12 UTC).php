<script type="text/javascript" src="shadowbox.js"></script>
<script type="text/javascript">
        Shadowbox.init();
</script>

<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
$(document).ready(function() {
        $('.thumbnail_title').hide();
});
</script>




<div class="bgimage" id="gallerybg">
</div>



<div class="content">
<!------------------3D images---------------------->
<p class="title">+3D ART WORKS</p>
<?php
$imagedir="./thumbnail/gallery/3d/";
$imagedirhandle=opendir($imagedir);
$i=0;
while ($images=readdir($imagedirhandle)){
      if ($images != "." && $images != ".." && $images !="descriptions.txt") {
         //<!----------------------thumbnail container----------------->
         echo "<div class=\"thumbnail_complex\">";
          //    <!-----------------thumbnail title--------------------->
              echo "<div class=\"thumbnail_title\">";
              $desc_file="./thumbnail/gallery/descriptions.txt";
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
            echo "<a href=\"gallery_images/3d/$images\" rel=\"shadowbox[gallery]\"><img class=\"gallery_thumbnail\" src=$imagedir/$images></a>";
         echo "</div>";
      }
}
?>
<!-------------------concept images------------------->
<p class="title">+CONCEPT ART</p>
<?php
$imagedir="./thumbnail/gallery/concept/";
$imagedirhandle=opendir($imagedir);
$i=0;
while ($images=readdir($imagedirhandle)){
      if ($images != "." && $images != ".." && $images !="descriptions.txt") {
         //<!----------------------thumbnail container----------------->
         echo "<div class=\"thumbnail_complex\">";
          //    <!-----------------thumbnail title--------------------->
              echo "<div class=\"thumbnail_title\">";
              $desc_file="./thumbnail/gallery/descriptions.txt";
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
            echo "<a href=\"gallery_images/concept/$images\" rel=\"shadowbox[gallery]\"><img class=\"gallery_thumbnail\" src=$imagedir/$images></a>";
         echo "</div>";
      }
}
?>


<!--------------------story board images----------------->

<p class="title">+STORY BOARDS</p>
<?php
$imagedir="./thumbnail/gallery/storyboard/";
$imagedirhandle=opendir($imagedir);
$i=0;
while ($images=readdir($imagedirhandle)){
      if ($images != "." && $images != ".." && $images !="descriptions.txt") {
         //<!----------------------thumbnail container----------------->
         echo "<div class=\"thumbnail_complex\">";
          //    <!-----------------thumbnail title--------------------->
              echo "<div class=\"thumbnail_title\">";
              $desc_file="./thumbnail/gallery/descriptions.txt";
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
            echo "<a href=\"gallery_images/storyboard/$images\" rel=\"shadowbox[gallery]\"><img class=\"gallery_thumbnail\" src=$imagedir/$images></a>";
         echo "</div>";
      }
}
?>

<!---------------------fine art images----------------------->
<p class="title">+TRADITIONAL FINE ART</p>
<?php
$imagedir="./thumbnail/gallery/fineart/";
$imagedirhandle=opendir($imagedir);
$i=0;
while ($images=readdir($imagedirhandle)){
      if ($images != "." && $images != ".." && $images !="descriptions.txt") {
         //<!----------------------thumbnail container----------------->
         echo "<div class=\"thumbnail_complex\">";
          //    <!-----------------thumbnail title--------------------->
              echo "<div class=\"thumbnail_title\">";
              $desc_file="./thumbnail/gallery/descriptions.txt";
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
            echo "<a href=\"gallery_images/fineart/$images\" rel=\"shadowbox[gallery]\"><img class=\"gallery_thumbnail\" src=$imagedir/$images></a>";
         echo "</div>";
      }
}
?>