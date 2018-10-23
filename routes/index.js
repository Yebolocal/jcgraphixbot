var express = require('express');
var router = express.Router();

const sgMail = require('@sendgrid/mail');

/* GET home page. */
router.get('/test', function(req, res, next) {
  console.log(req.body);
  let msgs = "";
  msgs = req.body.email

  res.send(msgs)

  // res.render('index', { title: 'Express' });
});

/* Test Contact Form Receive */
router.post('/contact', function(req, res, next) {
  console.log(req.body);
  let msgs = "";
  msgs = req.body.site

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'bernard@shipityo.com',
    from: process.env.EMAIL_ADDRESS,
    subject: 'New Message',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  
  res.send(msgs)

});

module.exports = router;
