const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const User = require('./models/user');
const userRoutes = require('./routes/userRoutes');

const app = express();

const dbURI = 'mongodb+srv://Manan:Xifo4DchOfTiGfOv@cluster0.fwvnk.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(process.env.PORT || 3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', userRoutes);

