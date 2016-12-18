BEGIN;

INSERT INTO users (username, email, password) VALUES

  ('synclair',  'synclair@synclair.com', 'password'),
  ('taka',  'takataka@ga.edu', 'ahrens'),
  ('natty','nattyd@ga.edu', 'davis'),
  ('mike', 'mikec@ga.edu', 'mikecohenpassword');

INSERT INTO boards (inmatename, statenumber, nickname , institution , image) VALUES
('syree hakins', '328754-d', 'gank', 'NJSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png'),
('alvin blankson', '328561-c', 'p.u', 'EJSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png'),
('gary ainsley', '458754-d', 'garry', 'NJSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png'),
('thomas mack', '4577654-d', 'petey', 'BSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png');

INSERT INTO posts(user_id ,title,body,board) VALUES
(1,'suckas is not the move','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',1),
(1,'mines','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',1),
(2,'the world sucks','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',1),
(2,'phat ass butt','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',2),
(2,'missing you homie','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',2),
(3,'cant wait to be together','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',1),
(4,'we are fam','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',3);

INSERT INTO comments(postId, body, userId) VALUES
(1, 'this shit is dope',1),
(1, 'son you should have been there', 1),
(2, 'meek said tell you hi',2),
(2, 'life aint fair my g',2),
(3, 'hold your head',2),
(4, 'your baby moms aint shit', 3);

INSERT INTO likes(postId, userId) VALUES
(1, 1),
(2, 2),
(2, 2),
(3,3),
(1,1);

COMMIT;



