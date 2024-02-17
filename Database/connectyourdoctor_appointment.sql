-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: connectyourdoctor
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `appointment_type` varchar(45) NOT NULL DEFAULT 'walk-in',
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  `status` varchar(45) DEFAULT 'scheduled',
  `cancelled_by` varchar(45) DEFAULT NULL,
  `remark_id` int DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `app_fk_doctor_id_idx` (`doctor_id`),
  KEY `app_fk_patient_id_idx` (`patient_id`),
  KEY `app_fk_remark_id_idx` (`remark_id`),
  CONSTRAINT `app_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  CONSTRAINT `app_fk_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `app_fk_remark_id` FOREIGN KEY (`remark_id`) REFERENCES `remark` (`remark_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,'2022-04-11','10:30:00','walk-in',1,1,'cancelled','Patient',NULL),(15,'2022-04-16','10:00:00','walk-in',1,1,'cancelled','Patient',NULL),(16,'2022-04-19','11:30:00','walk-in',1,1,'cancelled','Doctor',NULL),(17,'2022-04-20','10:30:00','walk-in',1,1,'scheduled',NULL,NULL),(18,'2024-02-22','10:00:00','walk-in',1,1,'scheduled',NULL,NULL),(19,'2024-02-22','10:00:00','walk-in',1,1,'scheduled',NULL,NULL),(20,'2024-02-22','10:00:00','walk-in',1,1,'cancelled','Patient',NULL),(21,'2024-02-14','11:00:00','walk-in',1,3,'scheduled',NULL,NULL),(22,'2024-02-14','11:00:00','walk-in',1,3,'scheduled',NULL,NULL),(23,'2024-02-14','11:00:00','walk-in',1,3,'scheduled',NULL,NULL),(24,'2024-02-14','11:00:00','walk-in',1,3,'scheduled',NULL,NULL),(25,'2024-02-14','11:00:00','walk-in',1,3,'scheduled',NULL,NULL),(26,'2024-02-14','11:00:00','walk-in',1,3,'scheduled',NULL,NULL),(27,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(28,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(29,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(30,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(31,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(32,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(33,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(34,'2024-02-14','10:30:00','walk-in',1,3,'scheduled',NULL,NULL),(35,'2024-02-14','10:00:00','walk-in',1,3,'scheduled',NULL,NULL),(36,'2024-02-14','10:30:00','walk-in',1,3,'scheduled',NULL,NULL),(37,'2024-02-14','10:30:00','walk-in',1,3,'scheduled',NULL,NULL),(38,'2024-02-14','10:30:00','walk-in',1,3,'scheduled',NULL,NULL),(39,'2024-02-14','10:30:00','walk-in',1,3,'scheduled',NULL,NULL),(40,'2024-02-14','10:30:00','walk-in',1,3,'scheduled',NULL,NULL),(41,'2024-02-14','10:30:00','walk-in',1,3,'cancelled','Patient',NULL),(42,'2024-02-14','11:30:00','walk-in',1,3,'cancelled','Patient',NULL),(43,'2024-02-13','10:00:00','walk-in',5,1,'cancelled','Patient',NULL),(44,'2024-02-13','10:30:00','walk-in',5,1,'cancelled','Patient',NULL),(45,'2024-02-13','11:00:00','walk-in',5,1,'cancelled','Patient',NULL),(46,'2024-02-13','11:30:00','walk-in',5,1,'cancelled','Patient',NULL),(47,'2024-02-13','12:00:00','walk-in',5,1,'cancelled','Patient',NULL),(48,'2024-02-13','12:30:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(49,'2024-02-13','12:30:00','walk-in',5,1,'scheduled',NULL,NULL),(50,'2024-02-13','13:00:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(51,'2024-02-13','17:30:00','walk-in',5,1,'scheduled',NULL,NULL),(52,'2024-02-16','10:00:00','walk-in',7,7,'scheduled',NULL,NULL),(53,'2024-02-15','10:00:00','walk-in',7,7,'scheduled',NULL,NULL),(54,'2024-02-15','10:30:00','walk-in',7,7,'scheduled',NULL,NULL),(55,'2024-02-15','11:00:00','walk-in',7,7,'scheduled',NULL,NULL),(56,'2024-02-16','10:30:00','walk-in',7,7,'cancelled','Patient',NULL),(57,'2024-02-16','11:00:00','walk-in',7,7,'cancelled','Patient',NULL),(58,'2024-02-16','10:00:00','walk-in',5,7,'scheduled',NULL,NULL),(59,'2024-02-17','10:00:00','walk-in',7,7,'scheduled',NULL,NULL),(60,'2024-02-17','10:00:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(61,'2024-02-18','11:00:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(62,'2024-02-18','11:30:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(63,'2024-02-18','12:00:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(64,'2024-02-18','12:30:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(65,'2024-02-17','10:30:00','walk-in',NULL,NULL,'cancelled','Doctor',NULL),(66,'2024-02-17','10:30:00','walk-in',7,7,'scheduled',NULL,NULL),(67,'2024-02-17','11:00:00','walk-in',5,7,'cancelled','Doctor',NULL),(68,'2024-02-18','13:00:00','walk-in',5,3,'cancelled','Doctor',NULL),(69,'2024-02-17','11:30:00','walk-in',5,7,'cancelled','Patient',NULL),(70,'2024-02-19','10:00:00','walk-in',5,7,'cancelled','Doctor',NULL),(71,'2024-02-19','10:35:00','walk-in',5,8,'scheduled',NULL,NULL),(72,'2024-02-19','11:00:00','walk-in',8,8,'scheduled',NULL,NULL);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-17 18:20:06
