-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.5.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for entertainmentdb
CREATE DATABASE IF NOT EXISTS `entertainmentdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `entertainmentdb`;

-- Dumping structure for table entertainmentdb.media
CREATE TABLE IF NOT EXISTS `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `director` varchar(250) DEFAULT NULL,
  `picName` varchar(50) DEFAULT NULL,
  `releaseDate` year(4) DEFAULT NULL,
  `Genre` varchar(100) DEFAULT NULL,
  `typeOfMedia` varchar(100) DEFAULT NULL,
  `Rating` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table entertainmentdb.media: ~1 rows (approximately)
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
REPLACE INTO `media` (`id`, `title`, `description`, `director`, `picName`, `releaseDate`, `Genre`, `typeOfMedia`, `Rating`, `createdAt`, `updatedAt`) VALUES
	(1, 'Beetlejuice', 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.', 'Tim Burton', 'beetlejuice.png', '1988', 'Horror', 'Movie', 4, '2020-11-30 20:55:44', '2020-11-30 20:55:44'),
	(2, 'Lion King', 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', 'Rob Minkoff', 'lionking.png', '1994', 'Animation', 'Movie', 4.5, '2020-11-30 20:58:05', '2020-11-30 20:58:05'),
	(3, 'Twilight', 'When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.', 'Catherine Harwicke', 'twilight.png', '2008', 'Romance', 'Movie', 3.5, '2020-11-30 20:58:44', '2020-11-30 20:58:44'),
	(4, 'Game of Thrones', 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.', 'George R. R. Martin, David Benioff, D. B. Weiss, Vanessa Taylor, Bryan Cogman, Jane Espenson, Dave Hill', 'gameofthrones.png', '2011', 'Drama', 'TV Show', 4.5, '2020-11-30 20:59:06', '2020-11-30 20:59:06'),
	(5, 'Breaking Bad', 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.', ' Vince Gilligan', 'breakingbad.png', '2008', 'Crime', 'TV Show', 5, '2020-11-30 20:59:41', '2020-11-30 20:59:41'),
	(6, 'Friends', 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', 'David Crane, Marta Kauffman', 'friends.png', '1994', 'Comedy', 'TV Show', 5, '2020-11-30 21:00:01', '2020-11-30 21:00:01'),
	(7, 'The Office', 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.', ' Greg Daniels', 'theoffice.png', '2005', 'Mocumentary', 'TV Show', 4.5, '2020-11-30 21:00:20', '2020-11-30 21:00:20'),
	(8, 'Grey\'s Anatomy', 'A drama centered on the personal and professional lives of five surgical interns and their supervisors.', 'Shonda Rhimes', 'greysanatomy.png', '2005', 'Drama', 'TV Show', 4.5, '2020-11-30 21:00:37', '2020-11-30 21:00:37'),
	(9, 'It\'s a Wonderful Life', 'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.', 'Frank Capra', 'itsawonderfullife.png', '1947', 'Fantasy', 'Movie', 4.5, '2020-11-30 21:00:55', '2020-11-30 21:00:55'),
	(10, 'Joker', 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', 'Todd Phillips', 'joker.png', '2019', 'Crime', 'Movie', 5, '2020-11-30 21:01:23', '2020-11-30 21:01:23');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
