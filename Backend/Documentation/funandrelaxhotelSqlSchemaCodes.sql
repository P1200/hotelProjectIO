DROP DATABASE IF EXISTS `hotel2`;
CREATE DATABASE  IF NOT EXISTS `hotel2`;
USE `hotel2`;


DROP TABLE IF EXISTS `klienci`;
CREATE TABLE `client` (
  `PESEL` varchar(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_number` varchar(9) NOT NULL,
  PRIMARY KEY (`PESEL`)
);
INSERT INTO `client` VALUES (1,'Ola','Kot',NULL,'772222555'),
(2,'Ola','Mol',NULL,'772222555'),(3,'Nina','Kamińska',NULL,'145557894'),
(4,'Matylda','Witkowska',NULL,'998714998'),(5,'Sylwia','Jaworska',NULL,'842333658'),
(6,'Małgorzata','Wasilewska',NULL,'122221121'),(12,'Kryspin','Szymczak','Szymczak@gmail.com','22222223'),
(13,'Andrzej','Gajewska','A_Gajewska@gmail.com','333333555'),(14,'Ksawery','Walczak','Walczak1@gmail.com','859958777'),
(15,'Radosław','Laskowska','Radek4412@gmail.com','128321549'),(16,'Ksawery','Michalak','Michalak9@gmail.com','175168658');


DROP TABLE IF EXISTS `rodzaj_pokoju`;
CREATE TABLE `room_kind` (
  `kind` varchar(40) NOT NULL,
  `path` varchar(200) NOT NULL,
  PRIMARY KEY (`kind`)
);
INSERT INTO `room_kind` VALUES ('Pokój 1os.','zdjecie'),('Pokój 2os.','zdjecie'),('Pokój 4os.','zdjecie'),('Pokój VIP.','zdjecie');


DROP TABLE IF EXISTS `pokoje`;
CREATE TABLE `room` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `prise` int NOT NULL,
  `kind` varchar(40) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`room_id`),
	CONSTRAINT `fk_room_room_kind` FOREIGN KEY (`kind`) REFERENCES `room_kind` (`kind`) 
    ON UPDATE CASCADE
);
INSERT INTO `room` VALUES (1,150,'Pokój 1os.','1 łóżko jednoosobowe'),
(2,150,'Pokój 1os.','1 łóżko jednoosobowe'),(3,150,'Pokój 1os.','1 łóżko jednoosobowe'),
(4,150,'Pokój 1os.','1 łóżko jednoosobowe'),(5,150,'Pokój 1os.','1 łóżko jednoosobowe'),
(6,150,'Pokój 1os.','1 łóżko jednoosobowe'),(7,300,'Pokój 2os.','1 łóżko dwuosobowe'),
(8,300,'Pokój 2os.','1 łóżko dwuosobowe'),(9,300,'Pokój 2os.','1 łóżko dwuosobowe'),
(10,300,'Pokój 2os.','1 łóżko dwuosobowe'),(11,300,'Pokój 2os.','1 łóżko dwuosobowe'),
(12,600,'Pokój 4os.','2 łóżka dwuosobowe'),(13,600,'Pokój 4os.','2 łóżka dwuosobowe'),
(14,600,'Pokój 4os.','2 łóżka dwuosobowe'),(15,600,'Pokój 4os.','2 łóżka dwuosobowe'),
(16,600,'Pokój 4os.','2 łóżka dwuosobowe'),(17,600,'Pokój 4os.','2 łóżka dwuosobowe'),
(18,1000,'Pokój VIP.','1 łóżko dwuosobowe'),(19,1000,'Pokój VIP.','1 łóżko dwuosobowe'),
(20,1000,'Pokój VIP.','1 łóżko dwuosobowe');


DROP TABLE IF EXISTS `rezerwacja`;
CREATE TABLE `reservation` (
  `reservation_id` int NOT NULL AUTO_INCREMENT,
  `arrival_date` date NOT NULL,
  `departure_date` date NOT NULL,
  `room_id` int NOT NULL,
  `paid` boolean NOT NULL,
  `PESEL` varchar(11) NOT NULL,
  PRIMARY KEY (`reservation_id`),
  CONSTRAINT `PESEL` FOREIGN KEY (`PESEL`) REFERENCES `client` (`PESEL`)
  ON UPDATE CASCADE,
  CONSTRAINT `room_id` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`)
  ON UPDATE CASCADE
);
INSERT INTO `reservation` VALUES (1,'2022-03-28','2022-03-30',1,1,1),
(85,'2022-03-28','2022-03-30',2,1,1),(86,'2022-03-28','2022-03-30',5,1,1),
(87,'2022-03-28','2022-03-30',19,1,1),(88,'2022-03-28','2022-03-30',18,1,1),
(89,'2022-03-28','2022-03-30',20,5,0),(102,'2022-03-28','2023-03-30',17,14,1),
(103,'2022-03-31','2022-04-05',20,2,0),(104,'2022-03-30','2022-04-05',20,5,0),
(131,'2022-04-05','2022-04-10',2,1,1),(132,'2022-04-05','2022-04-10',4,2,1),
(133,'2022-04-11','2022-04-15',4,4,1),(134,'2022-04-11','2022-04-15',5,5,0),
(160,'2022-04-05','2022-04-10',3,12,0),(161,'2022-04-05','2022-04-08',11,16,0),
(162,'2022-05-02','2022-05-15',1,15,1),(163,'2022-05-02','2022-05-15',1,15,1),
(164,'2022-05-02','2022-05-15',2,15,1),(165,'2022-05-02','2022-05-15',3,15,1),
(166,'2022-05-02','2022-05-15',4,15,1),(167,'2022-05-02','2022-05-15',5,15,1),
(168,'2022-05-02','2022-05-15',6,15,1),(169,'2022-05-02','2022-05-15',7,15,1),
(170,'2022-05-02','2022-05-15',8,15,1),(171,'2022-05-02','2022-05-15',9,15,1),
(172,'2022-05-02','2022-05-15',10,15,1),(173,'2022-05-02','2022-05-15',11,15,1),
(174,'2022-05-02','2022-05-15',12,15,1),(175,'2022-05-02','2022-05-15',13,15,1),
(176,'2022-05-02','2022-05-15',14,15,1),(177,'2022-05-02','2022-05-15',15,15,1),
(178,'2022-05-02','2022-05-15',16,15,1),(179,'2022-05-02','2022-05-15',17,15,1),
(180,'2022-05-02','2022-05-15',18,15,1),(181,'2022-05-02','2022-05-15',19,15,1),
(184,'2022-05-02','2022-05-15',19,6,1),(185,'2022-11-09','2022-11-15',18,13,0),
(194,'2022-08-02','2022-08-15',19,1,1);


DROP TABLE IF EXISTS `dane_formularza_kontaktowego`;
CREATE TABLE `contact_form_data` (
  `email` varchar(40) NOT NULL,
  `name_and_surname` varchar(40) NOT NULL,
  `phone_number` varchar(20),
  `message` text
);
