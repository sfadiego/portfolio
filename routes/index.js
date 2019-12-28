const path = require('path');
module.exports = (app)=>{

  app.get('/', function(req, res, next) {
    res.render('index');
  });

  app.get('/contact', function(req, res, next) {
    res.render('contact');
  });

  app.get('/downloadcv', function(req, res, next) {
    let file = path.resolve(__dirname,'../public/filescv/cvdiego.pdf');
    res.sendFile(file);
  })

};
