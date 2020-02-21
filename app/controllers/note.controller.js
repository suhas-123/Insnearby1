var request =  require('request');
const express = require('express');
const app = express();
var url = require('url');

var dataUrl = 'http://nbibwebnew.ap-south-1.elasticbeanstalk.com/rest';//Backend

 var homeUrl = 'http://bancaedge.ap-south-1.elasticbeanstalk.com';//FE 

// var homeUrl = 'http://localhost:8080';

var authKeys = {"accesskey":"NBIB","secretkey":"NBIB"};



            

exports.loginAPI = (req, res, next) => {
  console.log("LOGINNNNN");
  const routeReq = req.route.path.split("/")[2];
  request.post({
      "headers": { "content-type": "application/json" },
      "url": dataUrl+ '/customer/login',
      "body": req.body,
      json: true
      }).pipe(res);
};


  exports.externalAPI = (req, res, next) => {
    const routeReq = req.route.path.split("/")[2];
    var getDataPath;

    console.log("routeReqqq_noteCntrler",routeReq);
    
    switch(routeReq){
       
      case 'getAllCustomersforRM':  getDataPath = '/customer/getAllCustomersforRM';
                          break;                      
      case 'changePassword': getDataPath = '/customer/changePassword';
                          break; 
      case 'addCustomer':    getDataPath = '/customer/addCustomer';
                          break; 
      case 'updateCustomer':    getDataPath = '/customer/updateCustomer';
                          break;                           
      case 'createCustomerGoals':    getDataPath = '/customer/createCustomerGoals';
                          break;  
      
  }

  request.post({
      "headers": { "content-type": "application/json" },
      "url": dataUrl+ getDataPath,
      "body": req.body,
      json: true
      }).pipe(res);
      
  };  

  exports.productAPI = (req, res, next) => {

    const routeReq = req.route.path.split("/")[2]; 
    var requestBody = req.body.data;
    console.log("requestBodyy",requestBody);
    requestBody.authentication = authKeys;                
    request.post({
        "headers": { "content-type": "application/json" },
        "url": dataUrl + req.body.url,
        "body": requestBody,
        json: true
        }).pipe(res);    
  }; 

  exports.getPdfAPI = (req, res, next) => {
 
  const routeReq = req.route.path.split("/")[2];
  var getDataPath;
  var requestBody = req.body.data;
  requestBody.authentication = authKeys; 
    switch(routeReq){
        case 'getResult':       getDataPath = '/submitProposal/result';
                            break; 
        case 'getProposalPdf':  getDataPath = '/submitProposal/getProposalPdf';
                            break;
        case 'Bank':
        case 'pincode':     
        case 'checkOtp':
        case 'getReview':
        case 'generateOTP':    getDataPath = '';
                            break;                  
    }
  request.post({
    "headers": { "content-type": "application/json" },
    "url": dataUrl + getDataPath + req.body.url,
    "body": requestBody,
    json: true
    }).pipe(res);
  
  };


  exports.postPaymentAPI = (req, res, next) => {
    console.log("entered postPaymentAPI")
    var index = req.path.split("/").length;
    var insurerId = req.path.split("/")[index-1];

    var getDataPath = '/payment/confirmation/' + insurerId ;
    var requestBody = req.body;
    console.log("entered requestBody",requestBody)

    requestBody.authentication = authKeys; 

    var someth= dataUrl + getDataPath 
    console.log("someth",someth);
    request.post({
      "headers": { "content-type": "application/json" },
      // "headers": { "content-type": "application/x-www-form-urlencoded" },
      "url": dataUrl + getDataPath,
      "body": requestBody,
      json: true
      }, function(error, response, body){
        if(!error && response.statusCode == 200) {
          console.log("PostPayment response",response.body.referenceId);
          res.redirect(`${homeUrl}/home/PaymentConfirmation/${insurerId}/${response.body.referenceId}`);
        } else
        {
          res.json({
            success: false,
            errorText: `Failed to process your request due to following error: ${error}`
          })
        }

      });
  };

  exports.getPaymentAPI = (req, res, next) => {
    console.log("entered getPaymentAPI payment")
    
    var index = req.path.split("/").length;
    console.log("index",index)
    var insurerId = req.path.split("/")[index-1];
    console.log("insurerId",insurerId)

    var getDataPath = '/payment/confirmation/' + insurerId ;
    var requestBody = req.body;




    // var url_parts = url.parse(request.url, true);
    // var query = url_parts.query;
    // console.log("query",query);

    // var sampleTestBody={};
    // sampleTestBody.transactionNumber = transactionNumber;
    // console.log("sampleTestBody_sampleTestBody",sampleTestBody);


    requestBody.authentication = authKeys; 
    
    for (var propName in req.query) {
      if (req.query.hasOwnProperty(propName)) {
        // requestBody.transactionNumber=req.query.transactionNumber;
      //   requestBody.push({
      //     key:   propName,
      //     value: req.query[propName]
      // });
      console.log("REQ_QQuery",req);
      console.log("reqQuery",req.query);
      requestBody[propName] = req.query[propName];           
        }}

    console.log("reqBody",requestBody);
    const resource = {
      type: 'global',
    };
    var someth= dataUrl + getDataPath 
    console.log("someth",someth);
    request.post({
      "headers": { "content-type": "application/json" },
      // "headers": { "content-type": "application/x-www-form-urlencoded" },
      "url": dataUrl + getDataPath,
      "body": requestBody,
      json: true
      }, function(error, response, body){
        if(!error && response.statusCode == 200) {
          console.log("response",response)
          console.log("PostPayment response",response.body.referenceId);
          res.redirect(`${homeUrl}/home/PaymentConfirmation/${insurerId}/${response.body.referenceId}`);
         
        } else
        {
          res.json({
            success: false,
            errorText: `Failed to process your request due to following error: ${error}`
          })
        }

      });
  };

