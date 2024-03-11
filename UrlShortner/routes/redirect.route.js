const express = require('express');
const { handleRedirect } = require('../controllers/redirect.controller');

const router = express.Router();
router.route('/:shortId').get(handleRedirect);

module.exports = router;
