/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.24-MariaDB : Database - db_toko
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_toko` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `db_toko`;

/*Table structure for table `kasir` */

DROP TABLE IF EXISTS `kasir`;

CREATE TABLE `kasir` (
  `id_kasir` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kasir` varchar(250) DEFAULT NULL,
  `jenis_kelamin` varchar(100) DEFAULT NULL,
  `alamat` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_kasir`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `kasir` */

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id_barang` int(11) NOT NULL AUTO_INCREMENT,
  `nama_barang` varchar(250) DEFAULT NULL,
  `stok_barang` varchar(250) DEFAULT NULL,
  `harga_barang` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_barang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `product` */

/*Table structure for table `purchase` */

DROP TABLE IF EXISTS `purchase`;

CREATE TABLE `purchase` (
  `id_transaksi` int(11) NOT NULL AUTO_INCREMENT,
  `no_nota` varchar(250) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `id_kasir` int(11) DEFAULT NULL,
  `id_barang` int(11) DEFAULT NULL,
  `total_barang` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_transaksi`),
  KEY `c2` (`id_kasir`),
  KEY `c3` (`id_barang`),
  CONSTRAINT `c2` FOREIGN KEY (`id_kasir`) REFERENCES `kasir` (`id_kasir`),
  CONSTRAINT `c3` FOREIGN KEY (`id_barang`) REFERENCES `product` (`id_barang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `purchase` */

/*Table structure for table `supplier` */

DROP TABLE IF EXISTS `supplier`;

CREATE TABLE `supplier` (
  `id_supplier` int(11) NOT NULL AUTO_INCREMENT,
  `tanggal` date DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `stok` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_supplier`),
  KEY `c1` (`id_product`),
  CONSTRAINT `c1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_barang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `supplier` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
