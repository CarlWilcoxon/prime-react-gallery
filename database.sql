CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(125) NOT NULL,
	description VARCHAR(250),
	likes INTEGER
);

INSERT INTO gallery (path, description, likes) VALUES
  ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 ),
  ('images/malaysia_beaches.jpg', 'My best friend and I on the beaches of Malaysia.', 5 );
