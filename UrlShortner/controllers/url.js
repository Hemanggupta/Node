const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  const shortID = shortid();
  console.log(shortID);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: []
  });

  return res.json({ id: shortID });
}

async function handleGet(req, res) {
  return res.json({ msg: 'Success' });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGet
};
