-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 30, 2026 at 12:12 PM
-- Server version: 8.0.30
-- PHP Version: 8.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `handw`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori_produk`
--

CREATE TABLE `kategori_produk` (
  `id_kategori` int NOT NULL,
  `nama_kategori` varchar(50) NOT NULL,
  `slug` varchar(60) NOT NULL,
  `keterangan` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `kategori_produk`
--

INSERT INTO `kategori_produk` (`id_kategori`, `nama_kategori`, `slug`, `keterangan`) VALUES
(1, 'Breads', 'breads', 'Roti artisan seperti sourdough dan baguette'),
(2, 'Pastries', 'pastries', 'Produk pastry seperti croissant dan cinnamon roll'),
(3, 'Pies', 'pies', 'Produk pie ukuran tray atau loyang');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int NOT NULL,
  `id_kategori` int NOT NULL,
  `nama_produk` varchar(100) NOT NULL,
  `slug` varchar(120) NOT NULL,
  `deskripsi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `harga` decimal(10,2) NOT NULL,
  `berat_ukuran` varchar(50) DEFAULT NULL,
  `jadwal_panggang` varchar(100) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `status` enum('tersedia','habis','nonaktif') NOT NULL DEFAULT 'tersedia'
) ;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `id_kategori`, `nama_produk`, `slug`, `deskripsi`, `harga`, `berat_ukuran`, `jadwal_panggang`, `gambar`, `status`) VALUES
(1, 1, 'Classic Sourdough', 'classic-sourdough', 'Roti sourdough utama dengan wild-yeast starter, difermentasi dingin selama 48 jam, lalu dipanggang sampai kulitnya renyah.', 48000.00, '700g', 'Setiap hari, 06:00', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80', 'tersedia'),
(2, 1, 'Rustic Baguette', 'rustic-baguette', 'Baguette bergaya Prancis dengan bagian luar renyah dan bagian dalam ringan serta chewy.', 28000.00, '250g', 'Dua kali sehari', 'https://images.unsplash.com/photo-1589367920969-ab8e050bfbb7?w=500&q=80', 'tersedia'),
(3, 2, 'Butter Croissant', 'butter-croissant', 'Croissant berlapis dengan butter, dipanggang sampai flaky dan lembut di bagian dalam.', 22000.00, '90g', 'Setiap hari, 06:00', 'https://images.unsplash.com/photo-1555507036-ab1e4006aa07?w=500&q=80', 'tersedia'),
(4, 2, 'Hearth Cinnamon Roll', 'hearth-cinnamon-roll', 'Roti gulung kayu manis dengan glaze gula merah yang cocok untuk menu pagi.', 26000.00, '140g', 'Setiap hari, 07:00', 'https://images.unsplash.com/photo-1509365465994-3d8eb5127214?w=500&q=80', 'tersedia'),
(5, 3, 'Hearth Apple Pie', 'hearth-apple-pie', 'Apple pie dengan lattice crust dan isian apel yang dimasak perlahan.', 95000.00, '20cm', 'Kamis-Minggu', 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=500&q=80', 'tersedia');

-- --------------------------------------------------------

--
-- Table structure for table `testimoni`
--

CREATE TABLE `testimoni` (
  `id_testimoni` int NOT NULL,
  `nama_pelanggan` varchar(100) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `rating` tinyint NOT NULL DEFAULT '5',
  `isi_testimoni` text NOT NULL,
  `status` enum('tampil','sembunyi') NOT NULL DEFAULT 'tampil',
  `dibuat_pada` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `testimoni`
--

INSERT INTO `testimoni` (`id_testimoni`, `nama_pelanggan`, `foto`, `rating`, `isi_testimoni`, `status`, `dibuat_pada`) VALUES
(1, 'Jane Doe', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', 5, 'Saya belum pernah mencicipi roti seperti ini. Sourdough-nya punya rasa yang dalam dan enak sekali.', 'tampil', '2026-06-30 11:55:43'),
(2, 'John Smith', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80', 5, 'Croissant-nya flaky, buttery, dan benar-benar sempurna. Salah satu bakery terbaik.', 'tampil', '2026-06-30 11:55:43'),
(3, 'Emily Chen', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80', 5, 'Pengalaman yang menyenangkan setiap akhir pekan. Cinnamon roll-nya selalu saya tunggu.', 'tampil', '2026-06-30 11:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_pengguna` int NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','pelanggan') NOT NULL DEFAULT 'pelanggan',
  `status` enum('aktif','nonaktif') NOT NULL DEFAULT 'aktif',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_pengguna`, `nama_lengkap`, `email`, `password`, `role`, `status`, `created_at`) VALUES
(1, 'Admin Hearth Wheat', 'admin@hearthwheat.test', 'admin123', 'admin', 'aktif', '2026-06-30 11:55:43'),
(2, 'Jane Doe', 'jane@example.com', 'pelanggan123', 'pelanggan', 'aktif', '2026-06-30 11:55:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori_produk`
--
ALTER TABLE `kategori_produk`
  ADD PRIMARY KEY (`id_kategori`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `fk_produk_kategori` (`id_kategori`);

--
-- Indexes for table `testimoni`
--
ALTER TABLE `testimoni`
  ADD PRIMARY KEY (`id_testimoni`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_pengguna`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori_produk`
--
ALTER TABLE `kategori_produk`
  MODIFY `id_kategori` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimoni`
--
ALTER TABLE `testimoni`
  MODIFY `id_testimoni` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_pengguna` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `fk_produk_kategori` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_produk` (`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
