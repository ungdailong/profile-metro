<div id="charms" class="win-ui-dark slide">

   <div id="theme-charms-section" class="charms-section">
      <div class="charms-header">
         <a href="#" class="close-charms win-backbutton"></a>
         <h2>Settings</h2>
      </div>

      <div class="row-fluid">
         <div class="span12">

            <form class="">
               <label for="win-theme-select">Change theme:</label>
               <select id="win-theme-select" class="">
                  <option value="metro-ui-light">Light</option>
                  <option value="metro-ui-dark">Dark</option>
               </select>
            </form>

         </div>
      </div>
   </div>
   
</div>
<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>window.jQuery || document.write("<script src='scripts/jquery-1.8.3.min.js'>\x3C/script>")</script>

<script type="text/javascript" src="scripts/google-code-prettify/prettify.js"></script>
<script type="text/javascript" src="scripts/bootstrap.min.js"></script>
<script type="text/javascript" src="scripts/bootmetro-panorama.js"></script>
<script type="text/javascript" src="scripts/bootmetro-pivot.js"></script>
<script type="text/javascript" src="scripts/bootmetro-charms.js"></script>
<script type="text/javascript" src="scripts/bootstrap-datepicker.js"></script>
<!--<script type="text/javascript" src="scripts/jquery.nicescroll.js"></script>-->
<script type="text/javascript" src="scripts/jquery.touchSwipe.js"></script>
<script type="text/javascript" src="scripts/demo.js"></script>
<script type="text/javascript" src="scripts/holder.js"></script>
<script type="text/javascript">
$('.panorama').panorama({
   nicescroll: false,
   showscrollbuttons: true,
   keyboard: true
});

$('#pivot').pivot();
</script>
</body>
</html>
