const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://Manan:Xifo4DchOfTiGfOv@cluster0.fwvnk.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');