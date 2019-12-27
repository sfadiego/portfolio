const path = require('path');

module.exports = (app)=>{
  
  app.get('/', function(req, res, next) {
    res.render('index');
  });

  app.get('/downloadcv', function(req, res, next) {
    let file = path.resolve(__dirname,'../public/filescv/cvdiego.pdf');
    res.sendFile(file);
  })

};
