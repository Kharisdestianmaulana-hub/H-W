<?php

class Database
{
    private ?PDO $pdo = null;

    public function __construct()
    {
        // Front website belum membutuhkan database.
        // Nanti koneksi PDO bisa ditambahkan di sini saat model mulai dipakai.
    }

    public function pdo(): ?PDO
    {
        return $this->pdo;
    }
}
