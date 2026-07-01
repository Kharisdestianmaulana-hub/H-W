<?php

$scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? ''));
$baseUrl = ($scriptDir === '/' || $scriptDir === '.') ? '' : rtrim($scriptDir, '/');

define('BASE_URL', $baseUrl);