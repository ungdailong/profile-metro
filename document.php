<?php
error_reporting(0);
include ("header.php");
include ("nav-bar.php");
/*
 * Required parameters
 */
$appId = "34282";
$apiKey = "ynk82qkpv75m3wk93kkcpt323getvdneqa85mw62";
$email = "ungdailong@yahoo.com";
$password = "thuongvien";
include ("/lib/api-mediafire.php");

$mflib = new mflib ( $appId, $apiKey );
$mflib->email = $email;
$mflib->password = $password;

$sessionToken = $mflib->userGetSessionToken ();
$extensions = array('zip','rar' ,'7z' ,'ppt' ,'pptx', 'doc' , 'docx' ,'pdf' ,'xls' ,'xlsx','txt' ,'php','exe');
$extension_icon = array('zip' => 'archive','rar' => 'archive','7z' => 'archive','ppt' => 'presentation','pptx' => 'presentation', 'doc' => 'document', 'docx' => 'document','pdf' => 'document','txt' => 'document','xls' => 'spreadsheet','xlsx' => 'spreadsheet','php' => 'development','exe' => 'application');
if(isset($_GET['folderkey'])){
	$folderkey = $_GET['folderkey'];
	$folderDepth = $mflib->folderGetDepth ($sessionToken,$folderkey);
	//print_r($folderDepth);die();
	$folder = $mflib->folderGetContent ( $folderkey, $sessionToken, 'folders' );
	$file = $mflib->folderGetContent ( $folderkey, $sessionToken, 'files' );
	$files = $file['files'];
}
else
	$folder = $mflib->folderGetContent ( null, $sessionToken, 'folders' );
$folders = $folder ['folders'];

?>
<link rel="stylesheet" type="text/css"
	href="content/css/document.css">
<div class="container">
	<div class="row">
		<div class="span12">
			<h1>
				All my document for sharing<small></small>
			</h1>
		</div>
	</div>
</div>
<div id="myfilesCurrentFolderNameWrap">
	<div id="breadcrumbs_filemgr" class="breadcrumbs_container">
		<a class="breadcrumb" href="document.php">Root</a>
		<?php for($i = ($folderDepth['depth'] - 1); $i > 0; $i --) {?>
			<a class="breadcrumb" href="?folderkey=<?php echo $folderDepth['chain_folders'][$i]['folderkey'] ?>"><?php echo $folderDepth['chain_folders'][$i]['name']?></a>
		<?php }?>
	</div>
	<div id="myfilesCurrentFolderName" title="This is your current folder location."><?php echo $folderDepth['chain_folders'][0]['name']?></div>
</div>
<br/>
<div id="myfiles_content" class="wrap cf">
	<div id="main_files_container" class="thisfolder_root">
	<ol  id="main_list" style='list-style: none outside none; margin: 0px 0px 90px; padding: 0px;'>
	<?php foreach ($folders as $index => $one){?>
         	<li class="row_container mf_filecontainer folder cf public">
					<div class="filetype_column">
						<div class="filetype-folder"></div>
					</div>
					<div class="file_maindetails">
						<span class="created"><?php echo $one['created']?></span>
					</div>
					<div class="info cf">
						<div class="filename_outer">
							<a title="Softwares, Folders: <?php echo $one['folder_count']?> Files: <?php echo $one['file_count']?>" href="?folderkey=<?php echo $one['folderkey']?>"class="foldername"> 
							<span class="item-name"><?php echo $one['name']?></span>
							<span class="extraInfo">Folders: <?php echo $one['folder_count']?>, Files: <?php echo $one['file_count']?></span>
							</a>
						</div>
					</div>
         	</li>
     <?php }?>
     <?php if(isset($files) && count($files) > 0) foreach ($files as $index => $one){
     	$size = ceil($one['size'] / 1024);
     	$size_m = $size . ' KB';
     	if($size >= 1024){
     		$size = ceil($size / 1024);
     		$size_m = $size . ' MB';
     	}
     	$extension = explode('.', $one['filename']);    	
     	if(in_array($extension[1], $extensions))
			$class_ex = 'filetype-'.$extension_icon[$extension[1]].' '.$extension[1];
     	else
     		$class_ex = 'filetype-other '.$extension[1];
     ?>
     		<li class="row_container mf_filecontainer file other public">
					<div class="filetype_column">
						<div class="<?php echo $class_ex?>"></div>
					</div>
					<div class="file_maindetails">
						<span class="created"><?php echo $one['created']?></span>
					</div>
					<div class="info">
						<div class="filename_outer">
							<a title="<?php echo $one['filename']?>, Downloads: <?php echo $one['downloads']?>, Size: <?php echo $size_m?>" class="foldername" href="download.php?quickkey=<?php echo $one['quickkey']?>" target="_blank"> 
							<span class="item-name"><?php echo $one['filename']?></span>
							<span class="extraInfo">Downloads: <?php echo $one['downloads']?>, Size: <?php echo $size_m?></span>
							</a>
							<br/>
							<i><?php echo $one['description']?></i>
						</div>
						
					</div>
         	</li>
     <?php }?>
         	</ol>
			</div>
			</div>

<?php include("footer.php")?>