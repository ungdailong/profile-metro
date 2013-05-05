<?php 
$name_path = "Contact me";
   include("header.php");
   include("nav-bar.php");
?>

<div class="container">
   <div class="row">
      <div class="span12">

         
         <div class="alert alert-info">Contact me if you have any question or issue. Thanks you...!</div>
         <p>
         	<form method='POST' action=''>
         		<table>
         			<tr>
         				<td>Your name</td>
         				<td><input type='text' name = 'yourname'></td>
         			</tr>
         			<tr>
         				<td>Your email</td>
         				<td><input type='text' name = 'youremail'></td>
         			</tr>
         			<tr>
         				<td>Message</td>
         				<td><textarea cols = '20' name = 'yourmessage'></textarea></td>
         			</tr>
         			<tr>
         				<td></td>
         				<td><input type="submit" value = "Submit"></td>
         			</tr>
         		</table>
      
				
			</form>          
         </p>

         

      </div>
   </div>
</div>
<?php include("footer.php")?>