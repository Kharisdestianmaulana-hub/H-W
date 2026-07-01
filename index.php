<?php
// ------------------------------------------------------------
// Custom Native MVC - Application Entry Point
// ------------------------------------------------------------

error_reporting(E_ALL);
ini_set('display_errors', 1);

if (PHP_SAPI !== 'cli' && session_status() === PHP_SESSION_NONE) {
    session_start();
}

define('UPLOAD_PATH', realpath('public/img') ? realpath('public/img') . DIRECTORY_SEPARATOR : __DIR__ . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'img' . DIRECTORY_SEPARATOR);

require_once __DIR__ . '/app/config/config.php';
require_once __DIR__ . '/app/config/function.php';
require_once __DIR__ . '/app/core/Database.php';
require_once __DIR__ . '/app/core/Controller.php';
require_once __DIR__ . '/app/core/App.php';

try {
    new App();
} catch (Exception $e) {
    http_response_code(500);
    echo '<h1>Internal Server Error</h1>';
    echo '<p>' . e($e->getMessage()) . '</p>';
}

