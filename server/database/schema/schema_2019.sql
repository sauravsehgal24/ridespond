-- **********************************************************
-- Healthy Communities Web Platform SQL schema
-- Created: 03/17/2018

-- This schema is a re-iteration of the original healthy communities
-- schema. The tables have been updated to accommodate a better relation
-- between tables and objects.
-- **********************************************************

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users;
SET FOREIGN_KEY_CHECKS = 1;


-- Table users
-- **********************************************************


CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  -- indicates the role of this user
  `role` enum('Administrator', 'Customer') DEFAULT NULL,
 
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_active` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_verified` BOOLEAN DEFAULT false,
  `membership` BOOLEAN DEFAULT false,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- **********************************************************
-- The following are some useful events to call regularly.
-- **********************************************************

-- SET GLOBAL event_scheduler = `ON`;
-- DROP EVENT IF EXISTS `delete_unverified_users`;
-- DROP EVENT IF EXISTS `check_task_1`;
-- DROP EVENT IF EXISTS `check_task_2`;

-- Event: delete_unverified_users
-- Description: Scheduled to delete all users who are not verified within 72 hours from creation.
-- **********************************************************

-- CREATE EVENT `delete_unverified_users`
--   ON SCHEDULE EVERY 1 DAY
--   DO
--     -- remove from users
--     DELETE FROM users WHERE date_created <= DATE_SUB(NOW(), INTERVAL 72 HOUR)
--      AND is_verified = 0;


 -- Event: check_task_1
 -- Description: Scheduled to check each partner if he has met the requirements for task_1, and update that field accordingly
 -- task_1 tracks how many appointments have been made by the partner
 -- **********************************************************

-- CREATE EVENT `check_task_1`
--   ON SCHEDULE EVERY 2 HOUR
--   DO
--     UPDATE partners_in_health p
--     SET task_1 = (SELECT COUNT(a.id) FROM appointments a WHERE a.partner_id = p.partner_id );

-- -- Event: check_task_2
-- -- Description: Scheduled to check each partner 1 if he has met the requirements for task_2, and update that field accordingly
-- -- task_2 tracks how many opening eyes forms have been submitted by the partner
-- -- **********************************************************

-- CREATE EVENT `check_task_2`
--  ON SCHEDULE EVERY 2 HOUR
--  DO
--    UPDATE partners_in_health p
--    SET task_2 = (SELECT COUNT(v.id) FROM visits v RIGHT JOIN opening_eyes_form o ON o.visit_id = v.id WHERE v.partner_id = p.partner_id );
