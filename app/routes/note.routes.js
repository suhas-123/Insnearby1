const express = require('express');
const router = express.Router();

    const dataReq = require('../controllers/note.controller.js');
    console.log("datareq_routes",dataReq);

    router.post('/DataRequest/login', dataReq.loginAPI);

    router.post('/DataRequest/getAllCustomersforRM', dataReq.externalAPI);

    router.post('/DataRequest/changePassword', dataReq.externalAPI);
    
    router.post('/DataRequest/addCustomer', dataReq.externalAPI);

    router.post('/DataRequest/updateCustomer', dataReq.externalAPI);

    router.post('/DataRequest/createCustomerGoals', dataReq.externalAPI);

    // router.post('/DataRequest/getCustomerforRM', dataReq.externalAPI);

    router.post('/DataRequest', dataReq.productAPI);

    router.get('/PostPayment/*', dataReq.getPaymentAPI);

    router.post('/PostPayment/*', dataReq.postPaymentAPI);
    
    router.post('/DataRequest/CreateProposal', dataReq.productAPI);

    router.post('/DataRequest/getProposalPdf', dataReq.getPdfAPI);

    router.post('/DataRequest/getResult', dataReq.getPdfAPI);

    router.post('/DataRequest/Bank', dataReq.getPdfAPI);

    router.post('/DataRequest/pincode', dataReq.getPdfAPI);

    router.post('/DataRequest/checkOtp', dataReq.getPdfAPI);

    router.post('/DataRequest/getReview', dataReq.getPdfAPI);

    router.post('/DataRequest/generateOTP', dataReq.getPdfAPI);
    module.exports = router;