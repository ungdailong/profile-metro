<?php
if($_GET['quickkey']){
	$appId = "34282";
	$apiKey = "ynk82qkpv75m3wk93kkcpt323getvdneqa85mw62";
	$email = "ungdailong@yahoo.com";
	$password = "thuongvien";
	include ("/lib/api-mediafire.php");
	
	$mflib = new mflib ( $appId, $apiKey );
	$mflib->email = $email;
	$mflib->password = $password;
	
	$sessionToken = $mflib->userGetSessionToken ();
	$respond = $mflib->fileGetLinks($_GET['quickkey'],'direct_download',$sessionToken);
	if(isset($respond['links'][0]['error']))
		echo '<h1 align="center">Link invalid</h1>';
	else 
		echo '<h1 align="center"> Link download : <a href="'.$respond['links'][0]['direct_download'].'">'.$respond['links'][0]['direct_download'].'</a></h1>';
}