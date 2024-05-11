INSERT INTO userman_item (type, name, price, path) VALUES
('B', 'Ball 1', 10.00, 'ball_1.jpg'),
('B', 'Ball 2', 10.00, 'ball_2.jpg'),
('B', 'Ball 3', 10.00, 'ball_3.jpg'),
('B', 'Ball 4', 10.00, 'ball_4.jpg'),
('B', 'Ball 5', 10.00, 'ball_5.jpg'),

('P', 'Paddle 1', 15.00, 'paddle_1.jpg'),
('P', 'Paddle 2', 15.00, 'paddle_2.jpg'),
('P', 'Paddle 3', 15.00, 'paddle_3.jpg'),
('P', 'Paddle 4', 15.00, 'paddle_4.jpg'),
('P', 'Paddle 5', 15.00, 'paddle_5.jpg'),

('G', 'Background 1', 5.00, 'bg_1.jpg'),
('G', 'Background 2', 5.00, 'bg_2.jpg'),
('G', 'Background 3', 5.00, 'bg_3.jpg'),
('G', 'Background 4', 5.00, 'bg_4.jpg'),
('G', 'Background 5', 5.00, 'bg_5.jpg'),

('A', 'Avatar 1', 20.00, 'avatar_1.jpg'),
('A', 'Avatar 2', 20.00, 'avatar_2.jpg'),
('A', 'Avatar 3', 20.00, 'avatar_3.jpg'),
('A', 'Avatar 4', 20.00, 'avatar_4.jpg'),
('A', 'Avatar 5', 20.00, 'avatar_5.jpg');

INSERT INTO userman_player ('password','last_login','coins','status','level','email','username','first_name','last_name','is_active','is_staff','is_superuser','date_joined','image')
 VALUES
( 'pbkdf2_sha256$600000$nMH2GPWBUasKNTznJuKNNM$MZUsrvN/H2/EPL/eHWDn1BzUH6DUTDi9Qxkorz6H+GU=', '2024-05-11 10:30:00', 500, 'F', 700, 'user1@mail.com', 'user1', '', '', 1, 0, 0, '2024-05-11 08:56:30.288940', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$9yFpZTt5U1UKGrz6hpHhoJ$byR92a4bj/8oxMMBwhzzy6jv4r8nLEd0DgTLDFd9CZw=', '2024-05-11 10:30:00', 1000, 'F', 5680, 'user2@mail.com', 'user2', '', '', 1, 0, 0, '2024-05-11 08:56:49.319780', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$nMH2GPWBUasKNTznJuKNNM$MZUsrvN/H2/EPL/eHWDn1BzUH6DUTDi9Qxkorz6H+GU=', '2024-05-11 10:30:00', 4586, 'F', 1468, 'user3@mail.com', 'user3', '', '', 1, 0, 0, '2024-05-11 08:56:30.288940', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$PZaeWOUtaJ2ji0yxNXwhGs$jbNAXiFSJTcNXHkoEuWqThgawG+JFltKmyLX6rKibLA=', '2024-05-11 10:47:01.961642', 0, 'F', 10236, 'zmakhkha@mail.com', 'zmakhkha', '', '', 1, 1, 1, '2024-05-11 10:46:48.971074', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$pMopVrCnm9xo8MzDZULA7h$dSUXMp8KKEzTmyVqb/KdnCFUATCyTpTgaByGa9X9THk=', '2024-05-11 10:30:00', 4756, 'F', 9999, 'user4@mail.com', 'user4', '', '', 1, 0, 0, '2024-05-11 12:43:09.696539', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$OZTy2G9yrLDfPse8z59Ec6$c05jOk5Yb6vN48igf6Qy2YOXvhVX6dXHavvRNyFhy74=', '2024-05-11 10:30:00', 1423, 'F', 1458, 'user5@mail.com', 'user5', '', '', 1, 0, 0, '2024-05-11 12:43:18.854501', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$IwoDiiyy24RAsrYOCrQ2Dp$M8uud+YXRbM8HKgUpMyxwJznNdd1WfpKAm1CgnDETtc=', '2024-05-11 10:30:00', 486, 'F', 1023, 'user6@mail.com', 'user6', '', '', 1, 0, 0, '2024-05-11 12:43:29.150999', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$K2xUssQTjEk6gTEpXXidYb$/uZLJSs2OXkPCLtlnv0BugndZ4FIVSLD0sY5bd+2e1w=', '2024-05-11 10:30:00', 45, 'F', 4125, 'user7@mail.com', 'user7', '', '', 1, 0, 0, '2024-05-11 12:43:38.293461', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$Ac0xlVtuUg4fe0KLK7x3kO$uXsSNF9kHA7pHm5NGQJHTE5G2Z06fhPlW+gBw1z5DLU=', '2024-05-11 10:30:00', 10, 'F', 140, 'user8@mail.com', 'user8', '', '', 1, 0, 0, '2024-05-11 12:43:46.452320', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$5JEHSSB6H3ncsDEjZCQj1i$3zobDaC7T6ALYnfxoREaxDewrS2q7zcsjUVnVVSsWfw=', '2024-05-11 10:30:00', 7896, 'F', 486, 'user9@mail.com', 'user9', '', '', 1, 0, 0, '2024-05-11 12:43:56.194296', 'store/images/default.png'),
( 'pbkdf2_sha256$600000$Pl82NVokTVT57OqEQZKVFB$BShF8SfCjxD9Ghbc6xSRFeND7JR0CmhYNetfny9lFJk=', '2024-05-11 10:30:00', 98562, 'F', 1023, 'user10@mail.com', 'user10', '', '', 1, 0, 0, '2024-05-11 12:44:06.887556', 'store/images/default.png')
;

INSERT INTO userman_friendshiprequest
('status','created_at','from_user_id','to_user_id') VALUES
('P', '2024-05-11 13:37:35.154298', 2, 1),
('P', '2024-05-11 13:37:35.154298', 3, 1),
('P', '2024-05-11 13:37:35.154298', 4, 1),
('P', '2024-05-11 13:37:35.154298', 5, 1),
('P', '2024-05-11 13:37:35.154298', 6, 1),
('P', '2024-05-11 13:37:35.154298', 7, 1),
('P', '2024-05-11 13:37:35.154298', 8, 1),
('P', '2024-05-11 13:37:35.154298', 2, 3),
('P', '2024-05-11 13:37:35.154298', 2, 4),
('P', '2024-05-11 13:37:35.154298', 2, 5),
('P', '2024-05-11 13:37:35.154298', 2, 6),
('P', '2024-05-11 13:37:35.154298', 2, 7),
('P', '2024-05-11 13:37:35.154298', 2, 8);