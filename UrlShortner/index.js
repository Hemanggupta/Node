const express = require('express');
const { connectToMongoDB } = require('./connection');
const URL = require('./models/url');
const urlRoute = require('./routes/url');
const redirectRoute = require('./routes/redirect.route');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => console.log('Connected to MongoDB'));

app.use(express.json());

app.use('/url', urlRoute);
app.use('/', redirectRoute);

app.listen(PORT, () => console.log(`Server listening on Port : ${PORT}`));
