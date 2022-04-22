DROP DATABASE IF EXISTS `hotel2`;
CREATE DATABASE  IF NOT EXISTS `hotel2`;
USE `hotel2`;


DROP TABLE IF EXISTS `klienci`;
CREATE TABLE `klienci` (
  `id_klienta` int NOT NULL AUTO_INCREMENT,
  `imie` varchar(20) NOT NULL,
  `nazwisko` varchar(20) NOT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `telefon` varchar(9) NOT NULL,
  PRIMARY KEY (`id_klienta`)
);
INSERT INTO `klienci` VALUES (1,'Ola','Kot',NULL,'772222555'),
(2,'Ola','Mol',NULL,'772222555'),(3,'Nina','Kamińska',NULL,'145557894'),
(4,'Matylda','Witkowska',NULL,'998714998'),(5,'Sylwia','Jaworska',NULL,'842333658'),
(6,'Małgorzata','Wasilewska',NULL,'122221121'),(12,'Kryspin','Szymczak','Szymczak@gmail.com','22222223'),
(13,'Andrzej','Gajewska','A_Gajewska@gmail.com','333333555'),(14,'Ksawery','Walczak','Walczak1@gmail.com','859958777'),
(15,'Radosław','Laskowska','Radek4412@gmail.com','128321549'),(16,'Ksawery','Michalak','Michalak9@gmail.com','175168658');


DROP TABLE IF EXISTS `rodzaj_pokoju`;
CREATE TABLE `rodzaj_pokoju` (
  `rodzaj` varchar(40) NOT NULL,
  `zdjecie` blob NOT NULL,
  PRIMARY KEY (`rodzaj`)
);
INSERT INTO `rodzaj_pokoju` VALUES ('Pokój 1os.','zdjecie'),('Pokój 2os.','zdjecie'),('Pokój 4os.','zdjecie'),('Pokój VIP.','zdjecie');


DROP TABLE IF EXISTS `pokoje`;
CREATE TABLE `pokoje` (
  `id_pokoju` int NOT NULL AUTO_INCREMENT,
  `cena` int NOT NULL,
  `rodzaj` varchar(40) NOT NULL,
  `opis` varchar(100) NOT NULL,
  PRIMARY KEY (`id_pokoju`),
	CONSTRAINT `fk_pokoje_rodzaj_pokoju` FOREIGN KEY (`rodzaj`) REFERENCES `rodzaj_pokoju` (`rodzaj`) 
    ON UPDATE CASCADE
);
INSERT INTO `pokoje` VALUES (1,150,'Pokój 1os.','1 łóżko jednoosobowe'),
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
CREATE TABLE `rezerwacja` (
  `id_rezerwacji` int NOT NULL AUTO_INCREMENT,
  `data_przyjazdu` date NOT NULL,
  `data_wyjazdu` date NOT NULL,
  `id_pokoju` int NOT NULL,
  `id_klienta` int NOT NULL,
  `czy_zaplacone` boolean NOT NULL,
  PRIMARY KEY (`id_rezerwacji`),
  CONSTRAINT `id_klienta` FOREIGN KEY (`id_klienta`) REFERENCES `klienci` (`id_klienta`)
  ON UPDATE CASCADE,
  CONSTRAINT `id_pokoju` FOREIGN KEY (`id_pokoju`) REFERENCES `pokoje` (`id_pokoju`)
  ON UPDATE CASCADE
);
INSERT INTO `rezerwacja` VALUES (1,'2022-03-28','2022-03-30',1,1,1),
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
CREATE TABLE `dane_formularza_kontaktowego` (
  `email` varchar(40) NOT NULL,
  `imie_nazwisko` varchar(40) NOT NULL,
  `numer_telefonu` varchar(20),
  `wiadomosc` text
);
