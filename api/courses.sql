CREATE DATABASE work;
USE work;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `time` time DEFAULT NULL,
  `session_taken` int(11) DEFAULT NULL,
  `done` tinyint(1) DEFAULT 1,
  `day1` varchar(255),
  `day2` varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
