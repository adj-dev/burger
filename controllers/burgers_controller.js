// This file will handle all the routing calls in regards to returning data for DOM rendering
// Dependencies
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');



// TEMPORARY ROUTER
router.get('/', (req, res) => {
  burger.getAll(burgers => {
    res.render('index', { burgers });
  });
});

router.post('/', (req, res) => {
  let { burger_name } = req.body;
  burger.addOne(burger_name, err => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect('/');
  });
});


router.put('/', (req, res) => {
  let { id } = req.body;

  burger.devour(id, () => {
    res.send();
  })
});



module.exports = router;