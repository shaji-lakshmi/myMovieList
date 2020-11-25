/* creates movie table
CREATE TABLE movies (
movieID INT AUTO_INCREMENT PRIMARY KEY, 
mtitle VARCHAR(75),
mdirector VARCHAR(75),
mproducer VARCHAR(75),
mreleaseDate DATE,
movieIMG LONGBLOB,
mdescription TEXT );
*/

/* creates show table
CREATE TABLE movies (
movieID INT AUTO_INCREMENT PRIMARY KEY, 
mtitle VARCHAR(75),
mdirector VARCHAR(75),
mproducer VARCHAR(75),
mreleaseDate DATE,
movieIMG LONGBLOB,
mdescription TEXT );
*/

/*inserts values into table*/
/*
INSERT INTO shows
(title, director, producer,releaseDate,description)
VALUES('My Hero Academia', 'Kenji Nagasaki', 'Wakana Okamura','2016-04-03',
'Izuku Midoriya dreams of becoming a Hero despite lacking a Quirk. He idolize the worlds greatest hero All Might, who Izuku meets. Being one of few to know of a critical injury All Might has been concealing from the public eye to maintain morale. All Might also reveals the nature of his Quirk One For All and passes it down to Izuku to succeed him. As Izuku begins his path to becoming a hero in attending U.A. High School alongside Bakugo and Class 1-A.');
*/

/*drops columns
ALTER TABLE movies
ADD Genres CHAR(75);
*/

/*deletes table
DROP TABLE movies ;
*/
