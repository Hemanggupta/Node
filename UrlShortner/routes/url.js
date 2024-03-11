const express = require('express');
const { handleGenerateNewShortURL, handleGet } = require('../controllers/url');
const router = express.Router();

router.route('/').post(handleGenerateNewShortURL).get(handleGet);

module.exports = router;
