const express = require('express');
const router = express.Router();
const ctrlothers = require('../controllers/others');
const ctrllocations = require('../controllers/locations');

/* GET about page. */
router.get('/', ctrlothers.about);

/* GET Sengni page. */
router.get('/sengni', ctrllocations.sengni);

/* GET Seng a lam page. */
router.get('/sengalam', ctrllocations.sengalam);

/* GET Ning mu page. */
router.get('/ningmu', ctrllocations.ningmu);

module.exports = router;
