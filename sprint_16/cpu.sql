-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 10, 2023 at 07:58 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comp`
--

-- --------------------------------------------------------

--
-- Table structure for table `processors`
--

CREATE TABLE `processors` (
  `id` int NOT NULL,
  `title` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `family` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `socket` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `core` tinyint UNSIGNED DEFAULT NULL,
  `video` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `cache` int DEFAULT NULL,
  `cost` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `processors`
--

INSERT INTO `processors` (`id`, `title`, `family`, `socket`, `core`, `video`, `cache`, `cost`) VALUES
(2, 'AMD Ryzen 5 5500', 'AMD Ryzen 5', 'AM4', 6, NULL, 16, 3999),
(3, 'AMD Ryzen 5 5600X', 'AMD Ryzen 5', 'AM4', 6, NULL, 32, 6999),
(4, 'Intel Core i7-13700K', 'Intel Core i7', 'Socket 1700', 16, 'Intel UHD Graphics 770', 30, 18569),
(5, 'AMD Ryzen 9 7950X', 'AMD Ryzen 9', 'Socket AM5', 16, 'AMD Radeon Graphics', 64, 25999),
(6, 'AMD A4 X2 3400', 'AMD Athlon', 'FM1', 2, NULL, 284, NULL),
(7, 'Intel Celeron G1620',  'Celeron', '1155', 2, 'Intel HD Graphics', 2, 1497);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `processors`
--
ALTER TABLE `processors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `processors`
--
ALTER TABLE `processors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
