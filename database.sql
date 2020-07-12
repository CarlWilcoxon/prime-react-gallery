CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(125) NOT NULL,
	description VARCHAR(250),
	likes INTEGER
);

INSERT INTO gallery (path, description, likes) 
VALUES
  ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
  ('images/malaysia_beaches.jpg', 'My best friend and I on the beaches of Malaysia.', 5),
  ('images/snowfall.jpeg', 'Me in Tokyo the night after we arrived, it snowed. One of my bags did not make it, so I was stuck in flip flops for a day.', 3),
  ('images/wrastling.jpeg',	'We also saw a pro wrestling match while we were in Japan', 37);