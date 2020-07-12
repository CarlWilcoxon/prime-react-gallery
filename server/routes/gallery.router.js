const pg = require('pg');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);

    // use the id that was passed to determine which pic to like
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