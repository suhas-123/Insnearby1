(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{MDId:function(e,t){e.exports=".inpute_text03{\n    width: 55%;\n}\nul {\n    left: 824px !important;\n    \n  }\n@media only screen and (max-width: 1024px) and (min-width: 768px) and (orientation: portrait)\n{\n    .zerogrid {\n    width: 100% !important;\n}\n.contentmain{\n    width: 100%\n}\n.btn-primary{\n    margin-left: 387px !important;\n    background-color: #cc0000;\n}\nul {\n    left: 341px !important;\n    \n  }\n\n}\n@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape ) {\n    \n    ul {\n        left: 438px !important;\n        \n      }\n    \n}\n"},bMHT:function(e,t){e.exports='<div>\n  <div class="rootCus">\n    <div class="brand" *ngIf="router.url !=\'/\'"><p><img src="../../../../assets/images/SelectAssure2.png" class="logo" alt=""></p></div>\n    <label for="show-menu" class="show-menu"><img src="../../../../assets/images/menu-btn.png" alt=""></label>\n    <ul id="menu">\n      <li><a routerLink="/" style=" line-height:18px;" ><img src="../../../../assets/images/HomeICON.png" alt=""></a></li>         \n      <li><a routerLink="../../home/mycustomer" style="line-height:18px;"><img src="../../../../assets/images/MyCustomerICON.png" alt=""></a></li>           \n       <li><a routerLink="../../home/myActivities"style="line-height:18px;"><img src="../../../../assets/images/My_activities.png" alt=""></a></li>           \n      <li><a routerLink="/" style=" line-height:18px;"><img src="../../../../assets/images/renewal.png" alt=""></a></li>           \n      <li><a (click) ="userSignout()" style=" line-height:18px;"><img src="../../../../assets/images/SignInICON.png" alt=""></a></li>    \n    </ul>  \n\n  </div>\n  <div id="dbs">\n<div class="zerogrid">\n<div class="contentmain">\n<div class="profilemain1">\n  <span class="ibspan"><img src="../../../assets/images/Car_Insurance_ICON_og.svg"></span><span><strong style="font-size: 20px;"> Policy For Me > Motor > Car Insurance</strong></span>\n<div class="oneplan2">\n<div class="onetext2"><strong>Help us identify the plans relevant for your need: <i>(All Fields are Mandatory)</i></strong>\n</div>\n</div>\n</div>\n\n<form id="health-buy-form" class="form-horizontal" #carInsu = "ngForm" autocomplete="off" novalidate >\n    <div class="col-md-12 col-sm-12 col-xs-12">\n        <div class="insurancebox">\n          <div id="radio5" class="formmin4">\n          <input type="radio" name="policyType" class="css-radio1"  [(ngModel)]="carInput.policyType" (click)="carInput.policyType=\'Rollover\'; getYoms()" value="Rollover" id="policyType1"  required/><label for="policyType1" class="css-labelTick"></label>Renew my policy\n          <input type="radio" name="policyType" class="css-radio1"  [(ngModel)]="carInput.policyType" (click)="carInput.policyType=\'New Business\';getYoms()" value="New Business"  id="policyType2"  required/><label for="policyType2" class="css-labelTick"></label>New policy\n           \n        </div>\n      </div>\n     \n    </div>  \n\n<div class="profilemain1">\n<div class="oneplan2" [ngClass]="{\'has-error\':pincodecarInsu.invalid && !pincodecarInsu.pristine}">\n<div class="onetext2">Enter the pincode\n<div class="policybox"><span class="formmin4">\n    <input type="tel" name="Pincode" id="pincodecarInsu" #pincodecarInsu (keypress)="keyPress($event)" (blur)="getValidPinCode($event)" class="inpute_text03" placeholder="6 digits only" pattern="^[0-9]{6}$" inputmode="numeric" minlength="6" maxlength="6"  required>\n</span><span id="errorCall" class="has-error">{{errMessage}}</span>\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2">Choose the make/model/variant of your vehicle\n<div class="policybox">\n  <span>Car Make<br>\n<select class="inpute_text03" name="insureAmount" (change)="getModel()" id="carMakes" required>\n        <option value="">Select here</option>\n        <option *ngFor="let make of makes" value="{{make.id}}">{{make.name}}</option>\n    </select>\n  </span><br>\n  <span>Car Model <br>\n<select class="inpute_text03" name="insureAmount" (change)="getVariant()" id="carModel" required>\n        <option value="">Select here</option>\n        <option *ngFor="let model of model" value="{{model.id}}">{{model.name}}</option>\n    </select>\n  </span><br>\n <span>Car Variant <br> \n<select class="inpute_text03" name="insureAmount" [(ngModel)]="carInput.variant" (change)="storeVariant(carInput.variant)" id="carVariant" required>\n        <option value="">Select here</option>\n        <option *ngFor="let variant1 of variants" [ngValue]="variant1">{{variant1.variantName}}--{{variant1.vehicleAttr}}</option>\n    </select>        \n </span>\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2">Select year of manufacture of the car\n<div class="policybox">\n<select class="inpute_text03" name="insureAmount" [(ngModel)]="carInput.yrOfManu" (change)="yomChange(carInput.yrOfManu)" id="dateofRegYr" required>\n        <option value="" disabled>--Select here--</option>\n        <option *ngFor="let DateOfRegYear of yoms" value="{{DateOfRegYear}}">{{DateOfRegYear}}</option>\n    </select>\n</div>\n</div>\n</div>\n</div>\n\n\n<div class="profilemain1">\n<div class="oneplan2" [ngClass]="{\'has-error\':adultchild.invalid && !adultchild.pristine ||adultchild.touched}">\n<div class="onetext2">Enter date of car registration\n<div class="policybox">\n  <span class="">\n  <input type="date" (change)="carRegDate(carInput.vehicledoReg)" [(ngModel)]="carInput.vehicledoReg" class="inpute_text03" name="adultchild" id="carRegDate" #adultchild="ngModel" required/>\n</span>\n<span id="errorCall2" class="has-error">{{errorforMinRegdate}}</span>\n</div>\n</div>\n</div>\n</div>\n\n<div *ngIf="carInput.policyType ==\'Rollover\'">\n<div class="profilemain1">\n<div class="oneplan2"  [ngClass]="{\'has-error\':policyExpiry.invalid && !policyExpiry.pristine ||policyExpiry.touched}">\n<div class="onetext2">Current Policy Expiry Date\n<div class="policybox">\n  <span class="">\n  <input type="date"  class="inpute_text03" (input)="policyStartDate(carInput.prevPolicy)" [(ngModel)]="carInput.prevPolicy" name="policyExpiry" #policyExpiry="ngModel" id="policyDate" required/>\n</span>\n<span id="errorCall3" class="has-error">{{errorforMaxRegdate}}</span>\n\n</div>\n</div>\n</div>\n</div>\n\n\x3c!--<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2">Ex showroom price of model:\n<div class="policybox"><span class="formmin4">\n    <input type="text" name="Pincode" id="exShowRoomcarInsu" class="ins_text" placeholder="" required>\n</span>\n</div>\n</div>\n</div>\n</div>--\x3e\n\n<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2">Existing Policy NCB\n<div class="policybox"><span class="formmin4">\n<select class="inpute_text03" name="ncbcarInsu" [(ngModel)]="carInput.currNcb" id="ncbcarInsu" required>\n        <option value="" disabled>Select here</option>\n        <option *ngFor="let ncbs of currNcbs" [ngValue]="ncbs.value">{{ncbs.percn}}</option>\n    </select>\n</span>\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2" >Did you make any claims on existing policy in the current year?\n<div class="policybox"><span class="formmin4">\n<input type="radio" value="Yes" name="claims" id="ClaimsYes" class="css-radio1"/> <label for="ClaimsYes" class="css-labelTick"> </label> Yes  \n<input type="radio" value="No" name="claims" id="ClaimsNo"  class="css-radio1" checked/> <label for="ClaimsNo" class="css-labelTick" style="margin:0 0% 2% 15%"> </label> No</span>\n</div>\n</div>\n</div>\n</div>\n\n</div>\n\x3c!--<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2">Select RTO the car is registered at\n<div class="policybox">\n<select class="inpute_text03" name="rtoNmae" (input)="getRto()" [(ngModel)]="carInput.RTO" id="rtoNmae1" required>\n        <option value="" disabled>Select here</option>\n        <option *ngFor="let rtos of rto" [ngValue]="rtos.rto">{{rtos.name}} -- {{rtos.rto}}</option>\n    </select>\n</div>\n</div>\n</div>\n</div>--\x3e\n\n<div class="profilemain1">\n  <div class="oneplan2">\n  <div class="onetext2">Select RTO the car is registered\n  <div class="policybox"><span class="formmin4">\n  <select class="inpute_text03" name="rtoNmae1w" [(ngModel)]="carInput.RTO.rto" id="rtoNmae1" required>\n          <option value="">Select here</option>\n          <option *ngFor="let rtos1 of rto" [ngValue]="rtos1.rto">{{rtos1.name}} -- {{rtos1.rto}}</option>\n      </select>\n  </span>\n  </div>\n  </div>\n  </div>\n  </div>\n<div class="col-md-12 col-sm-12 col-xs-12 padd0">\n\t\t\t<span class="has-error" id="insuredError" style="color:red">{{carErrorText}}</span>\n\t\t</div>\n <div class="col-md-3 col-sm-3 col-xs-12" style="padding-top:2%;">\n            <button id="seePoly" (click)="submitForm(carInsu)"class="btn btn-primary call-back btn-default" [disabled]="errorCall || carInsu.invalid || errorCall2 || errorCall3" style="background-color: #ce0707;margin-left: 417px;">COMPARE POLICIES</button>\n  </div>\n\n</form>\n\n\n\n\n</div>\n</div>\n</div> \n<div id="footermain">\n  <div class="footer_Pas1">{{firstName}} &nbsp; {{lastName}} &nbsp;\n    \n </div>\n  <div class="footer_R">All Rights Reserved &copy; NEARBY TECHNOLOGIES PVT. LTD</div>\n  \n  <div class="footer_Pas2"><a data-toggle="modal" data-target="#exampleModal"><b>Change Password</b></a>&nbsp; &nbsp; <span><a data-toggle="modal" data-target="#reportIssueModel"><b>Report Issue</b></a></span></div>\n</div>\n \x3c!-- Modal --\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLabel">CHANGE PASSWORD</h5>\n      <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n    <div class="modal-body">\n      <form  #changePwdForm = "ngForm">\n        <div class="form-group">\n          <label for="Old-Password" class="col-form-label" >Old Password:</label>\n          <input type="password" class="form-control" name="oldPwd" id="Old-Password" required>\n        </div>\n         <div ngModelGroup="password" #userPassword="ngModelGroup" required >\n        <div class="form-group">\n          <label for="New-Password" class="col-form-label" >New Password:</label>\n          <input type="password" class="form-control" name="newPwd" id="New-Password" ngModel required>\n        </div>\n        <div class="form-group">\n          <label for="cngm-Password" class="col-form-label">Confirm Password:</label>\n          <input type="password" class="form-control" name="confirmPwd" id="cngm-Password" ngModel required>\n        </div>\n         <div *ngIf="(userPassword.invalid|| userPassword.value?.newPwd != userPassword.value?.confirmPwd) && (userPassword.touched)" class="alert alert-danger dontmatch">\n               <div *ngIf = "userPassword.invalid; else nomatch">\n                New Password and Confirm Password should match\n                              </div>\n                  <ng-template #nomatch >\n                    New Password and Confirm Password should match\n                  </ng-template>\n              </div>\n       </div> \n      \n   \n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      <button type="button" (click) ="changePass()" [disabled]="!changePwdForm.form.valid" class="btn btn-primary">Change Password</button>\n    </div>\n    </form>\n     </div>\n  </div>\n</div>\n</div>\n\n\n\x3c!-- Success or failure modal --\x3e\n<div id="resultModal" class="modal" tabindex="-1" role="dialog">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-body">\n      <p id="messageTouser"></p>\n    </div>\n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n    </div>\n  </div>\n</div>\n</div>\n\x3c!-- ends here--\x3e\n      \x3c!--Report Issue modal starts here--\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="reportIssueModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel11" aria-hidden="true">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLabel11">Report An Issue</h5>\n      <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n    <div class="modal-body">\n      <form  #reportAnIssue = "ngForm" >\n        <div class="form-group">\n          <label for="cngm-Password" class="col-form-label" style="margin-left: 63px;">Description of the issue:</label>\n          <textarea rows="3" cols="60" type="text" value="" name="issue" id="issueReport" ngModel required style="margin: 0 0 0 -61px;"></textarea>\n        </div>\n      \n   \n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      <button type="button" (click) ="reportIssue(reportAnIssue)" data-dismiss="modal" [disabled]="!reportAnIssue.form.valid" class="btn btn-primary">Report</button>\n    </div>\n    </form>\n     </div>\n  </div>\n</div>\n</div>\n\x3c!--Report Issue modal ends here--\x3e\n</div>  '},lgmA:function(e,t,a){"use strict";a.r(t);var n=a("3xsP"),r=a("mhOz"),s=a("n2nD"),i=a("1FVJ"),o=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i},l=function(){function e(){}return e.prototype.transform=function(e,t){return e.filter(function(e){for(var a in e)if((""+e[a]).toLowerCase().includes(t.toLowerCase()))return!0;return!1})},e=o([Object(n.V)({name:"searchFilter"})],e)}(),c=a("Yare"),d=a("rpPo"),p=a("QvY4"),u=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e,t,a,n){this.shared=e,this.router=t,this.alertservice=a,this.datepipe=n,this.accessKey=p.d,this.secretKey=p.e,this.userName=null,this.firstName=null,this.lastName=null,this.makes=[],this.model=[],this.variants=[],this.currNcbs=[{percn:"0%",value:0},{percn:"20%",value:20},{percn:"25%",value:25},{percn:"50%",value:50}],this.carInput={idv:0,claimsCurrYr:"N",policyType:"",productType:"PC",RTO:{rto:"",name:""},prevPolicy:null,currNcb:null,vehicledoReg:"",variant:{variantName:"",price:0,makeId:0,modelId:0,variantId:0,makeName:"",modelName:"",vehicleAttr:""},yrOfManu:"",make:{id:"",name:""}},this.yoms=[],this.rto="",this.carErrorText="",this.age=null,this.DepreciationRate=0,this.idvLow=0,this.idvHigh=0,this.dateToday=new Date,this.currYear=this.dateToday.getFullYear(),this.currMonth=this.dateToday.getMonth(),this.currDay=this.dateToday.getDate(),this.idvValid=!1,this.regdateOptions={},this.startPolicyOptions={},this.yearofManf=!1,this.errorCall=!1,this.errorforMinRegdate=null,this.errorCall2=!1,this.errorforMaxRegdate=null,this.errorCall3=!1,this.carFormObj={authentication:{accesskey:this.accessKey,secretkey:this.secretKey},rmId:"",customerId:"",vehicleId:"",vehicleRegistrationDate:"",idv:0,vehicleAge:0,price:0,vehicleName:"",pincode:null,policyStartDate:null,claim:"",prevncb:"",rto:"",yom:"",typeOfBusiness:""},this.errMessage=null}return e.prototype.ngOnInit=function(){this.userName=atob(sessionStorage.getItem("user")),this.firstName=sessionStorage.getItem("fisrtName"),this.lastName=sessionStorage.getItem("lastName"),$(document).ready(function(){$("#exampleModal").modal("hide")}),$("#pincodecarInsu").tooltip({trigger:"focus",title:""}),this.startPolicyOptions={maxDate:new Date(this.currYear,this.currMonth,this.currDay+45),minDate:new Date(this.currYear,this.currMonth,this.currDay)},this.getMake(),this.getYoms(),this.getRto()},e.prototype.keyPress=function(e){var t=String.fromCharCode(e.charCode);console.log("lenghtt",e.target.value),/[0-9]/.test(t)||e.preventDefault()},e.prototype.getValidPinCode=function(e){var t=this;this.errMessage="",this.errorCall=!1,""==e.target.value?this.errMessage="Pin Code field cannot be blank":this.shared.getPincode(e.target.value).subscribe(function(a){0==Object.keys(a).length?(t.errMessage="Pincode is not valid",t.errorCall=!0):(t.errMessage="",t.errorCall=!1,t.carFormObj.pincode=e.target.value)})},e.prototype.getMake=function(){var e=this;this.shared.getCarMake().subscribe(function(t){e.makes=t.result})},e.prototype.getModel=function(){var e=this,t=$("#carMakes").val();this.shared.getCarModel(t).subscribe(function(t){e.model=t.result})},e.prototype.getVariant=function(){var e=this,t=$("#carMakes").val(),a=$("#carModel").val();this.shared.getCarVariant(t,a).subscribe(function(t){e.variants=t.result,console.log("variants",e.variants)})},e.prototype.storeVariant=function(e){console.log("VARIANTS goes here",e)},e.prototype.submitForm=function(e){if(this.carInput.variant.variantName&&this.carInput.vehicledoReg){var t=0;"Rollover"==this.carInput.policyType&&(t=this.currYear-Number(this.carInput.yrOfManu)+1),this.DepreciationRate=this.shared.getDepreciationRate(t);var a=this.DepreciationRate*this.carInput.variant.price;this.idvLow=.9*a,this.idvHigh=1.1*a,this.carInput.idv=this.DepreciationRate*this.carInput.variant.price,this.validateIDV()}if(null==this.carInput.currNcb&&(this.carInput.currNcb=0),this.carFormObj.vehicleId=this.carInput.variant.makeId+"^"+this.carInput.variant.modelId+"^"+this.carInput.variant.variantId,this.carFormObj.vehicleRegistrationDate=this.carInput.vehicledoReg,this.carFormObj.idv=Math.round(this.carInput.idv),this.carFormObj.vehicleAge=this.shared.calculateAge(this.carInput.yrOfManu),this.removePriceDecimal=this.carInput.variant.price,this.removePriceDecimal=Number(this.removePriceDecimal).toFixed(0),this.carFormObj.price=this.removePriceDecimal,console.log("price::",this.carFormObj.price),"Rollover"==this.carInput.policyType){this.carFormObj.policyCurrentExpDate=this.carInput.prevPolicy;var n=new Date(this.carInput.prevPolicy),r=n.setDate(n.getDate()+1);this.carFormObj.policyStartDate=this.datepipe.transform(r,"yyyy-MM-dd")}else this.carFormObj.policyStartDate=this.carFormObj.vehicleRegistrationDate;var s=window.location.href.split("=")[1];this.carFormObj.customerId=s,this.carFormObj.rmId=sessionStorage.getItem("rmId"),this.carFormObj.claim=this.carInput.claimsCurrYr,this.carFormObj.prevncb=this.carInput.currNcb,this.carFormObj.rto=this.carInput.RTO.rto,console.log("rtoooo::",this.carFormObj.rto),this.carFormObj.yom=this.carInput.yrOfManu,this.carFormObj.typeOfBusiness=this.carInput.policyType,this.carFormObj.vehicleName=this.carInput.variant.makeName+"  "+this.carInput.variant.modelName+"  "+this.carInput.variant.vehicleAttr,console.log("CAR FINAL object",this.carFormObj);var i="Motor/PC/"+btoa(JSON.stringify(this.carFormObj));this.router.navigate(["home/policypage"],{queryParams:{quotes:i}})},e.prototype.validateIDV=function(){this.carInput.idv<this.idvLow||this.carInput.idv>this.idvHigh?(this.carErrorText="IDV out of Allowed Range",this.idvValid=!1):(this.carErrorText="",this.idvValid=!0)},e.prototype.getYoms=function(){var e=this.currYear-1,t=this.currYear-10;if(this.yoms=[],"New Business"==this.carInput.policyType)e=this.currYear,t=this.currYear-1;for(var a=e;a>=t;a--)this.yoms.push(a)},e.prototype.getRto=function(){var e=this;this.shared.getCarRto().subscribe(function(t){e.rto=t.result,console.log("rtooo",e.rto)})},e.prototype.yomChange=function(e){if(this.carInput.vehicledoReg=null,"Rollover"==this.carInput.policyType){var t=Number(e),a=t+1,n=11,r=31;if(t==this.currYear||a==this.currYear){a=this.currYear;n=Number(this.currMonth)-10,r=this.currDay}this.regdateOptions.minDate=new Date(t,0,1),this.regdateOptions.maxDate=new Date(a,n,r)}else this.regdateOptions.maxDate=new Date(this.currYear,this.currMonth,this.currDay+15),this.regdateOptions.minDate=new Date(this.currYear,this.currMonth,this.currDay)},e.prototype.carRegDate=function(e){this.minRegDate=this.datepipe.transform(this.regdateOptions.minDate,"yyyy-MM-dd"),this.maxRegDate=this.datepipe.transform(this.regdateOptions.maxDate,"yyyy-MM-dd"),console.log("regdate::",e+" "+this.minRegDate+" "+this.maxRegDate),e<this.minRegDate||e>this.maxRegDate?(this.errorforMinRegdate="Invalid date",this.errorCall2=!0,console.log(this.errorforMinRegdate)):(this.errorforMinRegdate="",this.errorCall2=!1,console.log(this.errorforMinRegdate))},e.prototype.policyStartDate=function(e){this.minstratDate=this.datepipe.transform(this.startPolicyOptions.minDate,"yyyy-MM-dd"),this.maxstratDate=this.datepipe.transform(this.startPolicyOptions.maxDate,"yyyy-MM-dd"),console.log("policysart::",e+" "+this.minstratDate+" "+this.maxstratDate),e<this.minstratDate||e>this.maxstratDate?(this.errorforMaxRegdate="Invalid date",this.errorCall3=!0,console.log(this.errorforMaxRegdate)):(this.errorforMaxRegdate="",this.errorCall3=!1,console.log(this.errorforMaxRegdate))},e.prototype.userSignout=function(){this.router.navigate(["home/login"]),sessionStorage.clear()},e.prototype.changePass=function(){var e=document.getElementById("Old-Password").value,t=document.getElementById("New-Password").value;e!=atob(sessionStorage.getItem("paswrd"))&&(document.getElementById("messageTouser").innerHTML="The old password entered is incorrect.",$("#resultModal").modal("show"));e==t&&(console.log("password not correct"),document.getElementById("messageTouser").innerHTML="The new password should not be same as the old password",$("#resultModal").modal("show"));this.shared.getchangePwd(this.userName,e,t).subscribe(function(e){"success"==e.result&&(document.getElementById("messageTouser").innerHTML="Password has been changed successfully",$("#resultModal").modal("show"),$("#exampleModal").modal("hide"))})},e.prototype.reportIssue=function(e){var t=sessionStorage.getItem("rmId"),a=window.location.href,n=document.getElementById("issueReport").value;console.log("report value::",t+" "+n+" "+a),this.shared.reportIssueService(t,a,n).subscribe(function(t){t.error?console.log("error occured",t.error):(alert("Report Issue successfully sent to the authorized person."),console.log("Success service",t),e.form.reset(),console.log("clear::",e.form.reset()))})},e=u([Object(n.n)({selector:"app-car-insu",template:a("bMHT"),styles:[a("MDId")],providers:[c.a]}),m("design:paramtypes",[c.a,r.c,d.a,i.e])],e)}();a.d(t,"ROUTES",function(){return g}),a.d(t,"CarInsuModule",function(){return y});var v=function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i},g=[{path:"",component:h}],y=function(){function e(){}return e=v([Object(n.K)({imports:[s.e,i.b,r.d.forChild(g)],declarations:[h,l],providers:[i.e]})],e)}()}}]);