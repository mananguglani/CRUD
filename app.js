const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURI = require('./private/dbURI');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');