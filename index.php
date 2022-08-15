<?php

try
{
	// require_once('app/resources/html/page.html');
	// require_once('app/resources/css/page.css');
	// require_once('app/resources/js/page.js');
	$content = file_get_contents('app/resources/html/page.html');
	echo $content;
}
catch( Throwable $e )
{
	echo $e->getMessage();
}

