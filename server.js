

'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
const helmet = require('helmet');

var express_enforces_ssl = require('express-enforces-ssl');
const fs = require("fs");
var dateFormat = require('dateformat');
// comment below 3 lines to run local
// app.enable('trust proxy');
// app.use(express_enforces_ssl());
// app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

//app.use(express.limit(MAX_FILE_SIZE));
app.use(function (req, res, next) {

   
    res.setHeader('Access-Control-Allow-Origin', '*');

    //res.setHeader('Access-Control-Allow-Origin', 'https://dbs-bancaedge.firebaseapp.com');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});


console.log("start_server_serverJS")
const api = require('./app/routes/note.routes.js');

app.use('/api', api);

app.post('/fileUpload', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
     if (err) {
       // An error occurred when uploading
       console.log("error",err);
     }
     const fileDir = "Nearby/"+  req.body.insurerId + "/" +  req.body.spCode + "/" +  req.body.policyNo;
     var docName = "";
     var now = new Date();
     var currdate = dateFormat(now, "ddmmyyyy");
     switch (req.body.insurerId) {
     case "110":
         docName = req.body.policyNo +"_"+ req.body.spCode +"_" + req.body.appId + "_" + req.body.docId + "_Form";
         break;
     case "109" :
         docName = req.body.appId + "_000000000_" + req.body.docId + "_" + currdate;
         break;
     case "102" :
         docName = req.body.docId + "_" + currdate;
         break;
     }
      var fileExtension = null;
     var conType = null;
     console.log("fileee",req.files[0]);
     if(req.files[0].originalname == 'blob'){
      fileExtension = req.files[0].mimetype.split('/')[1];
      conType = req.files[0].mimetype;
     }
     else {
       fileExtension = req.files[0].originalname.split('.')[1];
       conType = req.files[0].type;
     }
      const gcsname = fileDir + "/" + docName + "." + fileExtension;
    // const gcsname = Date.now() + req.files[0].originalname;
     const file = bucket.file(gcsname);
     fs.createReadStream(req.files[0].path)
        .pipe(file.createWriteStream({
      metadata: {
        contentType: conType
      }
    }))
    .on("error", (err) => {
      res.json({
        success: false,
       errorText: err
      })
    })
    .on('finish', () => {
      res.json({
        success: true,
        docId: req.body.docId,
        fileUrl: `https://storage.googleapis.com/${CLOUD_BUCKET}/${gcsname}`
      })
    });
   })

})

app.use('/home', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');

});

