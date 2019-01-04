var express = require('express');
var router = express.Router();

const models = require('../models');
const bcrypt = require('bcrypt');

//middlewares for check express-session
const { checkAuthSession } = require('../middlewares/auth');

/* GET users listing. */
router.get('/', checkAuthSession, function(req, res, next) {
   models.User.findAll().then(users => {
      // console.log(users);
      res.render('auth/index', {user: users});
   }).catch(err => {
      console.log(err);
      res.render('auth/index');
   })
});

router.get('/login', (req, res, next) => {
   res.render('auth/login');
});

router.post('/login', (req, res, next) => {
   const {username, password} = req.body;
   models.User.findOne({
      where: {
         username: username
      }
   }).then(user => {
      console.log(user)
      if (user != null) {
         const checkPassword = bcrypt.compareSync(password, user.password);
         if (checkPassword === true) {
         req.session.user = {
            username: user.username
         }
         res.redirect('/konstituens');
         } else {
         res.redirect('/users/login');
         }
      } else {
         res.redirect('/users/login');
      }
   })
});

router.get('/add', (req, res, next) => {
   models.User.findAll().then(users => {
      res.render('auth/registrasi', {user: users})
   }).catch(err => {
      console.log(err);
      res.render('auth/registrasi');
   })
});

router.post('/add', (req, res, next) => {
   let {username, password} = req.body;
   password = bcrypt.hashSync(password, 7);
   models.User.create({username, password}).then(user => {
      console.log(user);
      res.redirect('/users');
   }).catch(err => {
      console.log(err);
      res.redirect('/users');
   })
})

router.get('/logout', (req, res, next) => {
   req.session.destroy(function(err) {
      if (err) {
         console.log(err);
      } else {      
         res.redirect('/users/login');
      }
   })
});

router.get('/edit/:id', (req, res, next) => {
   const userId = req.params.id;
   models.User.findOne({where: {id: userId}}).then(user => {
      res.render('auth/edit', {user: user});
   }).catch(err => {
      console.log(err);
      res.redirect('/users');
   })
});

router.post('/edit/:id', (req, res, next) => {
   const userId = req.params.id;
   let {username, password} = req.body;
   password = bcrypt.hashSync(password, 7);
   models.User.findOne({where: {id: userId}}).then(user => {
     return User.update({
        username,
        password
      })
   }).then(updatedUser => {
      res.redirect('/users');
   }).catch(err => {
      console.log(err);
      res.redirect('/users');
   })
});

router.get('/delete/:id', (req, res, next) => {
   const userId = req.params.id;
   models.User.findOne({where: {id: userId}}).then(user => {
      return user.destroy();
   }).then(user => {
      res.redirect('/users');
   }).catch(err => {
      console.log(err);
      res.redirect('/users');
   })
});

module.exports = router;
  