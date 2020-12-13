const User = require('../models/user');

const user_index = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Users', users: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

const user_create_post = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

const user_create_get = (req, res) => {
    res.render('create', { title: 'Create a new user' });
};

const user_details = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then(result => {
            res.render('details', { user: result, title: 'User Details' });
        })
        .catch(err => {
            console.log(err);
        });
};

const user_detete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' });
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {
    user_index,
    user_create_post,
    user_create_get,
    user_details,
    user_detete
};