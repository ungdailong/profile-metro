<?php
class rss
{
	protected $url;
	protected $reference;
	public function __construct(){
		
	}
	public function getContent(){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this -> url);
		curl_setopt($ch, CURLOPT_REFERER, $this -> reference);
		curl_setopt($ch, CURLOPT_USERAGENT, "MozillaXYZ/1.0");
		curl_setopt($ch, CURLOPT_HEADER, 1);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);
		$output = curl_exec($ch);
		curl_close($ch);
	}
}