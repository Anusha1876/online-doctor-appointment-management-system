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
-- Table structure for table `doctor_timetable`
--

DROP TABLE IF EXISTS `doctor_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_timetable` (
  `doctor_timetable_id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `weekday` varchar(45) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `slot_duration` int DEFAULT '30',
  `break_time` time DEFAULT '14:00:00',
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`doctor_timetable_id`),
  KEY `timetable_fk_doctor_id_idx` (`doctor_id`),
  CONSTRAINT `timetable_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='doctor_timetable						\ndtt_id	dictor_id(fk)	weekday	start_time	 end_time	slot_dur	break_time\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_timetable`
--

LOCK TABLES `doctor_timetable` WRITE;
/*!40000 ALTER TABLE `doctor_timetable` DISABLE KEYS */;
INSERT INTO `doctor_timetable` VALUES (1,1,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(2,1,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(3,1,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(4,1,'Thursday','10:00:00','14:00:00',30,'14:00:00','available'),(5,1,'Friday','10:00:00','18:00:00',30,'14:00:00','not available'),(6,1,'Saturday','10:00:00','18:00:00',30,'14:00:00','not available'),(7,1,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(22,4,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(23,4,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(24,4,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(25,4,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(26,4,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(27,4,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(28,4,'Sunday','10:00:00','18:00:00',30,'14:00:00','available'),(29,5,'Monday','10:00:00','18:00:00',35,'15:00:00','available'),(30,5,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(31,7,'Monday','11:00:00','18:00:00',30,'14:00:00','available'),(32,7,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(33,7,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(34,7,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(35,7,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(48,5,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(49,5,'Thrusday','10:00:00','18:00:00',30,'14:00:00','available'),(50,5,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(51,5,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(53,7,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(54,7,'Sunday','10:00:00','18:00:00',30,'14:00:00','available'),(58,5,'Sunday','11:00:00','17:00:00',30,'14:00:00','available'),(60,8,'Monday','11:00:00','17:00:00',35,'14:00:00','available'),(61,8,'Tuesday','11:00:00','17:00:00',35,'14:00:00','available'),(63,8,'Thursday','11:00:00','17:00:00',35,'14:00:00','available'),(64,8,'Friday','11:00:00','17:00:00',35,'14:00:00','available'),(65,8,'Saturday','11:00:00','17:00:00',35,'14:00:00','available'),(66,8,'Sunday','11:00:00','17:00:00',35,'14:00:00','not available'),(67,8,'Wednesday','11:00:00','17:00:00',35,'14:00:00','available');
/*!40000 ALTER TABLE `doctor_timetable` ENABLE KEYS */;
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
