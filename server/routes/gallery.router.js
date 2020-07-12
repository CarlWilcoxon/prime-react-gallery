const pg = require('pg');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const fs = require('fs');

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);

    // Add a like to the passed table row
    const galleryId = req.params.id;

    // add a like to the likes total on the table
    const sqlText = `UPDATE gallery
                    SET likes = likes + 1
                    WHERE id = $1`
    pool.query( sqlText, [galleryId] )
      .then( (result) => {
        console.log('Picture liked #', galleryId);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
    })
}); // END PUT Route

// POST Route
router.post('/', (req, res) => {
  console.log(req.body);

  // Check if the path is relative or absolute
  // If absolute, move the file into the /public/images folder and update the path
  testPath = req.body.path;
  if (testPath.indexOf('/') == 0) {
    fs.copyFile( testPath,
      `/images${testPath.substring( testPath.lastIndexOf('/') )}`,
      (err) => console.log(err));
    req.body.path = `/images${testPath.substring( testPath.lastIndexOf('/') )}`;
    }

  // Create a new table entry with the passed object
  const sqlText = `INSERT INTO gallery (path, description, likes)
  VALUES ( $1, $2, $3 )`
  pool.query(sqlText, [req.body.path, req.body.description, req.body.likes])
    .then(( result ) => {
      console.log('Added photo');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
  })
}); // END POST Route

// DELETE Route
router.delete('/delete/:id', (req, res) => {
  console.log(req.params);

  // DELETE the table entry with passed id
  const galleryId = req.params.id;
  const sqlText = `DELETE FROM gallery
                  WHERE id = $1`
  pool.query( sqlText, [galleryId] )
    .then( (result) => {
      console.log('Deleted picture #', galleryId);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
  })
}); // END DELETE Route

// GET Route
router.get('/', (req, res) => {
  // get all the pics and order them by their id number
  const sqlText = `SELECT * FROM gallery ORDER BY id`;
  pool.query(sqlText)
    .then(( result ) => {
      console.log('Getting photos');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
  })
}); // END GET Route

module.exports = router;