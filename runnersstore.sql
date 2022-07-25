CREATE DATABASE  IF NOT EXISTS `runnersstore` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `runnersstore`;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: runnersstore
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrocompras`
--

DROP TABLE IF EXISTS `carrocompras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrocompras` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `precioTotal` int(11) NOT NULL,
  `cantidadProducts` int(11) NOT NULL,
  `usuario_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carrocompras_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `carrocompras_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrocompras`
--

LOCK TABLES `carrocompras` WRITE;
/*!40000 ALTER TABLE `carrocompras` DISABLE KEYS */;
INSERT INTO `carrocompras` VALUES (1,NULL,NULL,15000,3,1);
/*!40000 ALTER TABLE `carrocompras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrocomprasprod`
--

DROP TABLE IF EXISTS `carrocomprasprod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrocomprasprod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `carroCompras_id` int(10) unsigned NOT NULL,
  `prod_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carroComprasProd_carroCompras_id_foreign` (`carroCompras_id`),
  KEY `carroComprasProd_prod_id_foreign` (`prod_id`),
  CONSTRAINT `carroComprasProd_carroCompras_id_foreign` FOREIGN KEY (`carroCompras_id`) REFERENCES `carrocompras` (`id`),
  CONSTRAINT `carroComprasProd_prod_id_foreign` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrocomprasprod`
--

LOCK TABLES `carrocomprasprod` WRITE;
/*!40000 ALTER TABLE `carrocomprasprod` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrocomprasprod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Mujer'),(2,'Hombre'),(3,'Zapatillas'),(4,'Accesorios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriesusers`
--

DROP TABLE IF EXISTS `categoriesusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoriesusers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesusers`
--

LOCK TABLES `categoriesusers` WRITE;
/*!40000 ALTER TABLE `categoriesusers` DISABLE KEYS */;
INSERT INTO `categoriesusers` VALUES (1,'usuario'),(2,'administrador');
/*!40000 ALTER TABLE `categoriesusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colours`
--

DROP TABLE IF EXISTS `colours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colours` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `colour` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colours`
--

LOCK TABLES `colours` WRITE;
/*!40000 ALTER TABLE `colours` DISABLE KEYS */;
INSERT INTO `colours` VALUES (1,'2022-07-12 03:00:00',NULL,'rojo'),(2,'2022-07-12 03:00:00',NULL,'blanco'),(3,'2022-07-12 03:00:00',NULL,'negro'),(4,'2022-07-12 03:00:00',NULL,'gris'),(5,'2022-07-12 03:00:00',NULL,'azul');
/*!40000 ALTER TABLE `colours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coloursprod`
--

DROP TABLE IF EXISTS `coloursprod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coloursprod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `colour_id` int(10) unsigned DEFAULT NULL,
  `prod_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `coloursprod_colour_id_foreign` (`colour_id`),
  KEY `coloursprod_prod_id_foreign` (`prod_id`),
  CONSTRAINT `coloursprod_colour_id_foreign` FOREIGN KEY (`colour_id`) REFERENCES `colours` (`id`),
  CONSTRAINT `coloursprod_prod_id_foreign` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coloursprod`
--

LOCK TABLES `coloursprod` WRITE;
/*!40000 ALTER TABLE `coloursprod` DISABLE KEYS */;
INSERT INTO `coloursprod` VALUES (1,'2022-07-12 03:00:00',NULL,1,1),(2,'2000-04-23 00:00:00',NULL,2,1),(3,'2000-04-23 00:00:00',NULL,3,2),(4,'2000-04-23 00:00:00',NULL,2,3),(5,'2000-04-23 00:00:00',NULL,3,4),(6,'2000-04-23 00:00:00',NULL,3,5),(7,'2000-04-23 00:00:00',NULL,5,6),(8,'2000-04-23 00:00:00',NULL,4,7),(9,'2000-04-23 00:00:00',NULL,1,8),(10,'2000-04-23 00:00:00',NULL,5,9);
/*!40000 ALTER TABLE `coloursprod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(200) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `images_product_id_foreign` (`product_id`),
  CONSTRAINT `images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'calzaNegraM1.jpg',1),(2,'calzaNegraM2.jpg',1),(3,'calzaNegraM3.jpg',1),(4,'CalzaReebook.jpg',2),(5,'adidas3.jpg',6),(6,'adidas.jpg',6),(7,'adidas2.jpg',6),(8,'adidas1.png',6),(9,'imagen-1653622471266.jpg',3),(10,'imagen-1653622471266.jpg',4),(11,'imagen-1653625134027.jpg',5),(12,'imagen-1653625277298.jpg',7),(13,'imagen-1653626765375.jpg',8),(14,'imagen-1653626868869.jpg',9);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medios_pago`
--

DROP TABLE IF EXISTS `medios_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medios_pago` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `metodoDePago` varchar(45) NOT NULL,
  `metodoDePagoDesc` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medios_pago`
--

LOCK TABLES `medios_pago` WRITE;
/*!40000 ALTER TABLE `medios_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `medios_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `carroCompras_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`),
  KEY `products_carroCompras_id_foreign` (`carroCompras_id`),
  CONSTRAINT `products_carroCompras_id_foreign` FOREIGN KEY (`carroCompras_id`) REFERENCES `carrocompras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2022-07-12 03:00:00',NULL,'Calza negra Reebok','calza deportiva',10000.00,NULL,1,1),(2,'2022-07-12 03:00:00',NULL,'Calza estampada Reebok','calza deportiva',100.00,10,1,1),(3,'2022-07-12 03:00:00',NULL,'Remera River Plate','Remera de river femenina',10000.00,10,1,1),(4,'2022-07-12 03:00:00',NULL,'Remera River Plate','Remera de river hombre',25000.00,NULL,2,1),(5,'2022-07-12 03:00:00',NULL,'Short River Plate','Pantalos de futbol de river hombre',7999.00,NULL,2,1),(6,'2022-07-12 03:00:00',NULL,'Zapatillas Adidas Urbanas','Zapatillas urbanas',24999.99,NULL,3,1),(7,'2022-07-12 03:00:00',NULL,'Zapatillas Adidas Running','Zapatillas de running',24999.99,NULL,3,1),(8,'2022-07-12 03:00:00',NULL,'Reloj Smart sports','Reloj inteligente para running',35900.99,NULL,4,1),(9,'2022-07-12 03:00:00',NULL,'Vinchas termicas Running','Vinchas termicas para Running',4000.00,NULL,4,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `size` varchar(45) NOT NULL,
  `size_description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'2022-07-12 03:00:00',NULL,'XS',''),(2,'2022-07-12 03:00:00',NULL,'S',''),(3,'2022-07-12 03:00:00',NULL,'M',''),(4,'2022-07-12 03:00:00',NULL,'L',''),(5,'2022-07-12 03:00:00',NULL,'XL',''),(6,'2022-07-12 03:00:00',NULL,'36',''),(7,'2022-07-12 03:00:00',NULL,'37',''),(8,'2022-07-12 03:00:00',NULL,'38',''),(9,'2022-07-12 03:00:00',NULL,'39',''),(10,'2022-07-12 03:00:00',NULL,'40',''),(11,'2022-07-12 03:00:00',NULL,'41',''),(12,'2022-07-12 03:00:00',NULL,'42',''),(13,'2022-07-12 03:00:00',NULL,'43',''),(14,'2022-07-12 03:00:00',NULL,'44','');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizesprod`
--

DROP TABLE IF EXISTS `sizesprod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizesprod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `sizes_id` int(10) unsigned NOT NULL,
  `prod_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sizesprod_sizes_id_foreign` (`sizes_id`),
  KEY `sizesprod_prod_id_foreign` (`prod_id`),
  CONSTRAINT `sizesprod_prod_id_foreign` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sizesprod_sizes_id_foreign` FOREIGN KEY (`sizes_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizesprod`
--

LOCK TABLES `sizesprod` WRITE;
/*!40000 ALTER TABLE `sizesprod` DISABLE KEYS */;
INSERT INTO `sizesprod` VALUES (1,'2022-07-12 03:00:00',NULL,1,1),(2,'2000-04-23 00:00:00',NULL,2,1),(3,'2000-04-23 00:00:00',NULL,3,2),(4,'2000-04-23 00:00:00',NULL,2,3),(5,'2000-04-23 00:00:00',NULL,3,4),(6,'2000-04-23 00:00:00',NULL,3,5),(7,'2000-04-23 00:00:00',NULL,7,6),(8,'2000-04-23 00:00:00',NULL,6,7),(9,'2000-04-23 00:00:00',NULL,1,8),(10,'2000-04-23 00:00:00',NULL,2,9);
/*!40000 ALTER TABLE `sizesprod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_images`
--

DROP TABLE IF EXISTS `user_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_images`
--

LOCK TABLES `user_images` WRITE;
/*!40000 ALTER TABLE `user_images` DISABLE KEYS */;
INSERT INTO `user_images` VALUES (1,'default-avatar.jpg');
/*!40000 ALTER TABLE `user_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `documentoTipo` varchar(45) NOT NULL,
  `nDocumento` bigint(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `genero` varchar(45) DEFAULT NULL,
  `categoryUsu_id` int(10) unsigned NOT NULL,
  `image_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_categoryUsu_id_foreign` (`categoryUsu_id`),
  KEY `users_image_id_foreign` (`image_id`),
  CONSTRAINT `users_categoryUsu_id_foreign` FOREIGN KEY (`categoryUsu_id`) REFERENCES `categoriesusers` (`id`),
  CONSTRAINT `users_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `user_images` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'ezequiel','brunori','1983-12-21 00:00:00','DNI',30526817,'e_brunoricarp@hotmail.com','$2a$10$/wmBxyVKc2RYbWksj0JgBOtiM.t1otiXF4Xiu.A.wiuRx7X53DecG','Masculino',2,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-25  1:05:32
