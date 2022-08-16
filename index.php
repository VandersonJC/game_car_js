<?php

try
{
	$content = file_get_contents('app/resources/html/page.html');
	echo $content;
}
catch( Throwable $e )
{
	echo $e->getMessage();
}

