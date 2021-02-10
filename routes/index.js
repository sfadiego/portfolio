const path = require('path');
let controller = require('../controllers/sendemail');
module.exports = (app)=>{

  app.get('/', function(req, res, next) {
    res.render('index');
  });

  app.get('/contact', function(req, res, next) {
    res.render('contact');
  });

  app.get('/sendemail',controller.sendemail);

  app.get('/downloadcv', function(req, res, next) {
    let file = path.resolve(__dirname,'../public/filescv/cvdiego.pdf');
    res.sendFile(file);
  })

};
