<?php
/**
 * Base abstract Controller class
 */

require_once __DIR__ . '/Database.php';

abstract class Controller
{
    protected Database $db;

    public function __construct(Database $db)
    {
        $this->db = $db;
        $this->boot();
    }

    protected function boot(): void
    {
        // Can be overridden in child controller
    }

    protected function model(string $model)
    {
        $path = __DIR__ . '/../models/' . $model . '.php';
        if (file_exists($path)) {
            require_once $path;
            return new $model($this->db);
        }

        throw new Exception("Model {$model} not found");
    }

    protected function view(string $view, array $data = []): void
    {
        $baseUrl = defined('BASE_URL') ? rtrim(BASE_URL, '/') : '';
        extract($data, EXTR_SKIP);

        $file = __DIR__ . '/../views/' . $view . '.php';

        if (file_exists($file)) {
            require_once $file;
            return;
        }

        http_response_code(500);
        echo "<h3>View '" . htmlspecialchars($view, ENT_QUOTES, 'UTF-8') . "' not found.</h3>";
    }
}
