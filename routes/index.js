const express = require('express');
const router = express.Router();

// Each route renders its own view (the view includes the layout)
router.get('/', (req, res) => {
  res.render('index',   { title: 'Home',       bodyClass: 'minimain' });
});
router.get('/about', (req, res) => {
  res.render('about',   { title: 'About Me',   bodyClass: 'aboutmemini' });
});
router.get('/projects', (req, res) => {
  res.render('projects',{ title: 'Projects',   bodyClass: 'projectsmini' });
});
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me', bodyClass: 'contactmini' });
});

module.exports = router;
