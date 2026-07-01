<?php

/*
|--------------------------------------------------------------------------
| Front Routes
|--------------------------------------------------------------------------
| .htaccess mengirim URL ke index.php?url=...
| Contoh: /H-W/about => index.php?url=about
*/

$router->get('', 'FrontController@index');
$router->get('home', 'FrontController@index');
$router->get('index', 'FrontController@index');
$router->get('index.html', 'FrontController@index');

$router->get('about', 'FrontController@about');
$router->get('about.html', 'FrontController@about');

$router->get('product', 'FrontController@product');
$router->get('products', 'FrontController@product');
$router->get('product.html', 'FrontController@product');

$router->get('product-detail', 'FrontController@productDetail');
$router->get('product-detail.html', 'FrontController@productDetail');

$router->get('contact', 'FrontController@contact');
$router->get('contact.html', 'FrontController@contact');
