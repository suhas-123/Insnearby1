(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{bXdj:function(e,n){e.exports='<div>\n  \n  <div class="rootCus">\n    <div class="brand" *ngIf="router.url !=\'/\'"><p><img src="../../../../assets/images/SelectAssure2.png" class="logo" alt=""></p></div>\n    <label for="show-menu" class="show-menu"><img src="../../../../assets/images/menu-btn.png" alt=""></label>\n    <input type="checkbox" id="show-menu" role="button">\n    <ul id="menu">\n      <li><a routerLink="/" style=" line-height:18px;" ><img src="../../../../assets/images/HomeICON.png" alt=""></a></li>         \n      <li><a routerLink="../../home/mycustomer" style="line-height:18px;"><img src="../../../../assets/images/MyCustomerICON.png" alt=""></a></li>           \n       <li><a routerLink="../../home/myActivities"style="line-height:18px;"><img src="../../../../assets/images/My_activities.png" alt=""></a></li>           \n      <li><a routerLink="/" style=" line-height:18px;"><img src="../../../../assets/images/renewal.png" alt=""></a></li>           \n      <li><a (click) ="userSignout()" style=" line-height:18px;"><img src="../../../../assets/images/SignInICON.png" alt=""></a></li>    \n    </ul>  \n  \n  </div>\n<div id="dbs">\n\n<div class="zerogrid">\n<div class="contentmain">\n<div class="profilemain1">\n  <span class="ibspan"><img src="../../../assets/images/Protection_ICON.svg"></span><span><strong style="font-size: 20px;"> Policy For Me > Life > Protection</strong></span>\n<div class="oneplan2">\n<div class="onetext2"><strong>Help us identify the plans relevant for your need: <i>(All Fields are Mandatory)</i></strong>\n</div>\n</div>\n</div>\n\n <form id="health-buy-form" class="form-horizontal" #protection = "ngForm" autocomplete="off" novalidate >\n<div class="profilemain1">\n<div class="oneplan2" [ngClass]="{\'has-error\':pincodecritical.invalid && !pincodecritical.pristine}">\n<div class="onetext2">Enter the pincode\n<div class="policybox"><span class="formmin4">\n\n    <input type="tel" name="Pincode" id="pincodecritical" #pincodecritical="ngModel"  (blur)="getValidPinCode($event)" [(ngModel)]="termInput.pincode" pattern="^[0-9]{6}$" inputmode="numeric" class="inpute_text" (keypress)="keyPress($event)"  placeholder="6 digits only"  maxlength="6"  required>\n</span> <span id="errorCall" class="has-error">{{errMessage}}</span>\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n<div class="oneplan2" [ngClass]="{\'has-error\':brithID.invalid && !brithID.pristine ||brithID.touched}">\n<div class="onetext2">Enter Insured Date of Birth\n<div class="policybox">\n  <span class="formmin4">\n  <input type="date" class="inpute_text" [(ngModel)]="termInput.dob" (input)="ageCount()" name="brith" id="brithID" #brithID="ngModel" required/>\n\n</span>\n<span id="errorCall5" class="has-error">{{errorMessageforage}}</span>\n<span id="errorCall" class="has-error">{{errorMessageformin }}</span>\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2" >Insured Gender\n<div class="policybox"><span class="formmin4">\n<input class="css-radio11" type="radio" value="M" name="gender" id="genderM" [(ngModel)]="termInput.gender"  required/> <label for="genderM" class="css-labelMale"> </label>  \n<input class="css-radio12" type="radio" value="F" name="gender" id="genderF" [(ngModel)]="termInput.gender" required /> <label for="genderF" class="css-labelGen" style="margin:0 0% 1% 15%"> </label></span>\n\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n  <div class="oneplan2">\n  <div class="onetext2" >Do you want to add your spouse?\n  <div class="policybox"><span class="formmin4">\n  \n  <input type="radio" value="Y" name="addSpouse" id="spouseY" [(ngModel)]="termInput.isJointLife" data-toggle="modal" data-target="#spouseModal" class="css-radio1" required/> <label for="spouseY" class="css-labelTick"> </label> Yes  \n  <input type="radio" value="N" name="addSpouse" id="spouseN" [(ngModel)]="termInput.isJointLife" class="css-radio1" required /> <label for="spouseN" class="css-labelTick" style="margin:0 0% 1% 14%"> </label> No</span>\n  \n\n</div>\n  </div>\n  </div>\n  </div>\n<div *ngIf="termInput.isJointLife==\'Y\'">\n  <div class="profilemain1">\n    <div class="oneplan2">\n    <div class="onetext2" >What is the Date of Birth of your Spouse?\n      <div class="policybox"><span class="formmin4">\n        <input type="date" class="inpute_text" [(ngModel)]="termInput.secdob" (input)="ageCountSec()" name="secbrith" id="secbrithID" min="{{dateOptions.minDate | date:\'yyyy-MM-dd\'}}" max="{{dateOptions.maxDate | date:\'yyyy-MM-dd\'}}" required/>\n      </span>\n      <span id="errorCall6" class="has-error">{{errorMessageforageSec}}</span>\n        <span id="errorCall7" class="has-error">{{errorMessageforSecMin}}</span>\n      </div>\n    </div>\n    </div>\n  </div> \n<div class="profilemain1">\n  <div class="oneplan2">\n  <div class="onetext2" >Does spouse smoke/chew tobacco?\n  <div class="policybox"><span class="formmin4">\n  <input type="radio" value="Yes" name="secSmoker" id="yesSecSmoker" [(ngModel)]="termInput.secSmoker" class="css-radio1" required/> <label for="yesSecSmoker" class="css-labelTick"> </label> Yes  \n  <input type="radio" value="No" name="secSmoker" id="noSecSomker" [(ngModel)]="termInput.secSmoker" class="css-radio1" required /> <label for="noSecSomker" class="css-labelTick" style="margin:0 0% 2% 15%"> </label> No</span>\n  </div>\n  </div>\n  </div>\n</div>\n\n\n\n</div>\n\n<div class="profilemain1">\n<div class="oneplan2" [ngClass]="{\'has-error\':sumInsured.invalid && !sumInsured.pristine ||sumInsured.touched}">\n<div class="onetext2">You need an insurance amount of Rupees\n<div class="onetext2">(Sum Assured)\n<div class="policybox">\n  <input type="tel" class="inpute_text" name="sumInsured" [(ngModel)]="termInput.sa" id="sumInsured" #sumInsured="ngModel" (input)="getValidSum()" value="" min="0" maxlength="10" required/>\n<span *ngIf="termInput.sa">{{termInput.sa | numberToWords}} rupees</span>\n</div>\n<div id="errorCall" class="has-error" style="margin-left: 452px;">{{errMessage1}}</div>\n<div id="errorCallJoint" class="has-error" style="margin-left: 452px;">{{errMessagejoint}}</div>\n\n</div>\n</div>\n</div>\n</div>\n\n<div class="profilemain1">\n  <div class="oneplan2">\n  <div class="onetext2" >Do you want life long covers?\n  <div class="policybox"><span class="formmin4">\n  <input type="radio" value="Y" name="lifeCover" id="yeslifeCover" (change)="getLifeLongCover()" [(ngModel)]="termInput.isLifeLongCover" class="css-radio1" required/> <label for="yeslifeCover" class="css-labelTick"> </label> Yes  \n  <input type="radio" value="N" name="lifeCover" id="nolifeCover" (change)="getLifeLongCover()" [(ngModel)]="termInput.isLifeLongCover" class="css-radio1" required /> <label for="nolifeCover" class="css-labelTick" style="margin:0 0% 2% 14%"> </label> No</span>\n  </div>\n  </div>\n  </div>\n</div>\n\n<div class="profilemain1" *ngIf="termInput.isLifeLongCover==\'N\'" >\n    <div class="oneplan2" [ngClass]="{\'has-error\':policyTerm.invalid && !policyTerm.pristine ||policyTerm.touched}">\n    <div class="onetext2">You need insurance for in years?\n        <div class="onetext2">(Policy Term)\n    <div class="policybox">\n      <input type="tel" class="inpute_text" [(ngModel)]="termInput.pt" #policyTerm="ngModel" (input)="policyTermvalid($event)" name="policyTerm" id="policyTerm" min="0" maxlength="2" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" required/>\n    </div>\n    <div id="errorCall" class="has-error" style="margin-left: 452px;">{{errMessage2}}</div>\n\n    </div>\n    </div>\n    </div>\n  </div>\n\n       \x3c!--new field is added--\x3e\n   <div class="profilemain1">\n      <div class="oneplan2">\n      <div class="onetext2" >How would you like to pay your premium?\n      <div class="policybox"><span class="formmin4" style="width: 130%;">\n      <input type="radio" value="annually" name="premium" id="annual"  (change)="annualIn = false;termInput.ppt=termInput.pt; onetime= false; termInput.payTo60=\'N\'"  class="css-radio1" required/> <label for="annual" class="css-labelTick"> </label> Regular  \n      <input type="radio" value="onetime" name="premium" id="onetime"  (change)="annualIn = true; onetime= true;termInput.ppt=\'\'; termInput.payTo60=\'N\'" class="css-radio1" required /> <label for="onetime" class="css-labelTick" style="margin:0 0% 1% 5%"> </label> Limited\n      <span *ngIf = "showAnnualupto && termInput.isJointLife==\'N\'"> <input type="radio" value="annualUpto" name="premium" id="annualUpto" (change)="annualIn = false; annualSixty= true;calculateTermPpt(); termInput.payTo60=\'Y\'" class="css-radio1" required /> <label for="annualUpto" class="css-labelTick" style="margin:0 0% 1% 4%"> </label> Annually up to 60 years </span></span>\n  \n    </div>\n      </div>\n      </div>\n    </div>\n    \n    <div class="profilemain1" *ngIf ="annualIn == true">\n      <div class="oneplan2">\n      <div class="onetext2">You will pay premiums for years?\n          <div class="onetext2">(Premium Payment Term)\n      <div class="policybox">\n        \x3c!--<input type="tel" class="inpute_text" [(ngModel)]="termInput.ppt" min="0" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" #paymentTerm="ngModel" (input)="paymentTermValid($event)" name="paymentTerm" id="paymentTerm" maxlength="2" required/>--\x3e\n        <select class="inpute_text"  [(ngModel)]="termInput.ppt" name="paymentTerm" required>\n            <option value="" disabled>Select PPT</option>\n            <option value="{{item.id}}" *ngFor="let item of limitedValue">{{item.value}}</option>\n          </select>\n      </div>\n     \x3c!-- <div id="errorCall" class="has-error" style="    margin-left: 452px;">{{errMessage3}}</div>--\x3e\n      </div>\n      </div>\n      </div>\n      </div>\n      <span *ngIf="ConcernMessage == true && errorCall==false">\n          <span id="ConcernMessage1"  style="margin-left: 481px;float: right;border: 1px solid #ccc; background: #DDD;color: #000">Premium Payment Term exceeds 60 years of age. Your Consent is required to continue.\n              <span>\n                  <input type="checkbox" id="consentcb" class="css-checkbox" name="consentcb" (change)="isChecked($event)" >\n                  <label for="consentcb" class="css-label"></label>\n                <br>\n              </span>\n          </span>\n      </span>\n\n            \n\n<div class="profilemain1">\n<div class="oneplan2">\n<div class="onetext2" >Does the Insured smoke/chew tobacco? \n<div class="policybox"><span class="formmin4">\n  \n<input type="radio" value="Yes" name="smoker" id="yesSmoker" [(ngModel)]="termInput.smoker" class="css-radio1" required/> <label for="yesSmoker" class="css-labelTick"></label>Yes\n<input type="radio" value="No" name="smoker" id="noSomker" [(ngModel)]="termInput.smoker" class="css-radio1" required /> <label for="noSomker" class="css-labelTick" style="margin:0 0% 1% 15.2%" ></label>No</span>\n\n\n</div>\n</div>\n</div>\n</div>\n\n <div class="col-md-3 col-sm-3 col-xs-12" style="padding-top:2%;">\n            <button id="seePoly" (click)="protection.valid && submitForm()"class="btn btn-primary call-back btn-default" [disabled]="protection.invalid || errorCall || errMessage1 || (!consent && ConcernMessage) || errorCall5 || errMessagejoint" style="background-color: #ce0707;margin-left: 417px;">COMPARE POLICIES</button>\n    </div>\n\n </form>\n\n\n</div>\n</div>\n</div>\n\n<div id="footermain">\n  <div class="footer_Pas1">{{firstName}} &nbsp; {{lastName}} &nbsp;\n    \n </div>\n  <div class="footer_R">All Rights Reserved &copy; NEARBY TECHNOLOGIES PVT. LTD</div>\n  \n  <div class="footer_Pas2"><a data-toggle="modal" data-target="#exampleModal"><b>Change Password</b></a>&nbsp; &nbsp; <span><a data-toggle="modal" data-target="#reportIssueModel"><b>Report Issue</b></a></span></div>\n</div>\n \x3c!-- Modal --\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLabel">CHANGE PASSWORD</h5>\n      <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n    <div class="modal-body">\n      <form  #changePwdForm = "ngForm">\n        <div class="form-group">\n          <label for="Old-Password" class="col-form-label" >Old Password:</label>\n          <input type="password" class="form-control" name="oldPwd" id="Old-Password" required>\n        </div>\n         <div ngModelGroup="password" #userPassword="ngModelGroup" required >\n        <div class="form-group">\n          <label for="New-Password" class="col-form-label" >New Password:</label>\n          <input type="password" class="form-control" name="newPwd" id="New-Password" ngModel required>\n        </div>\n        <div class="form-group">\n          <label for="cngm-Password" class="col-form-label">Confirm Password:</label>\n          <input type="password" class="form-control" name="confirmPwd" id="cngm-Password" ngModel required>\n        </div>\n         <div *ngIf="(userPassword.invalid|| userPassword.value?.newPwd != userPassword.value?.confirmPwd) && (userPassword.touched)" class="alert alert-danger dontmatch">\n               <div *ngIf = "userPassword.invalid; else nomatch">\n                New Password and Confirm Password should match\n                              </div>\n                  <ng-template #nomatch >\n                    New Password and Confirm Password should match\n                  </ng-template>\n              </div>\n       </div> \n      \n   \n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      <button type="button" (click) ="changePass()" [disabled]="!changePwdForm.form.valid" class="btn btn-primary">Change Password</button>\n    </div>\n    </form>\n     </div>\n  </div>\n</div>\n</div>\n\n\n\x3c!-- Success or failure modal --\x3e\n<div id="resultModal" class="modal" tabindex="-1" role="dialog">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-body">\n      <p id="messageTouser"></p>\n    </div>\n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n    </div>\n  </div>\n</div>\n</div>\n\x3c!-- ends here--\x3e\n     \n\n\n\n\x3c!-- Spouse modal --\x3e\n<div data-backdrop="static" data-keyboard="false" id="spouseModal" class="modal" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n          <div class="modal-header">\n              <h5 class="modal-title" id="spouseModalLabel">Note</h5>\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n              </button>\n            </div>\n        <div class="modal-body">\n           <p>Joint Life option is applicable only for you and your spouse.</p>\n           <p>Maximum Sum Assured when Secondary Life Insured is housewife is Rs. 1 Crore.</p>\n        </div>\n        <div class="modal-footer">\n          \x3c!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>--\x3e\n          <button type="button" class="btn btn-secondary" style="background-color: red; color: white;" (click)="getValidSum()" data-dismiss="modal">Ok</button>\n        </div>\n      </div>\n    </div>\n    </div>\n    \x3c!-- ends here--\x3e\n\x3c!--Report Issue modal starts here--\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="reportIssueModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel11" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel11">Report An Issue</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        <form  #reportAnIssue = "ngForm" >\n          <div class="form-group">\n            <label for="cngm-Password" class="col-form-label" style="margin-left: 63px;">Description of the issue:</label>\n            <textarea rows="3" cols="60" type="text" value="" name="issue" id="issueReport" ngModel required style="margin: 0 0 0 -61px;"></textarea>\n          </div>\n        \n     \n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n        <button type="button" (click) ="reportIssue(reportAnIssue)" data-dismiss="modal" [disabled]="!reportAnIssue.form.valid" class="btn btn-primary">Report</button>\n      </div>\n      </form>\n       </div>\n    </div>\n  </div>\n  </div>\n\x3c!--Report Issue modal ends here--\x3e\n\n</div>'},rqRB:function(e,n){e.exports="\nul {\n    left: 824px !important;\n    \n  }\n\n@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait ) {\n    ul {\n        left: 341px !important;\n        \n      }\n    \n    .btn-primary{\n        margin-left: 367px !important;\n        background-color: #cc0000;\n    }\n    #dbs {\n        width: 75% !important;\n        float: left;\n        height: auto;\n    }\n    .contentmain{\n        width: 86% !important;\n    }\n    #errorCall\n    {\n        margin-left: 0px !important;\n    }\n}\n\n@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape ) {\n    .btn-primary{\n        margin-left: 473px;\n        background-color: #cc0000;\n    }\n    ul {\n        left: 438px !important;\n        \n      }\n    \n    \n}"},ymnT:function(e,n,s){"use strict";s.r(n);var t=s("3xsP"),a=s("mhOz"),r=s("n2nD"),i=s("1FVJ"),o=s("rpPo"),l=s("Yare"),d=s("QvY4"),c=function(e,n,s,t){var a,r=arguments.length,i=r<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,s,t);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r<3?a(i):r>3?a(n,s,i):a(n,s))||i);return r>3&&i&&Object.defineProperty(n,s,i),i},u=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},m=function(){function e(e,n,s){this.shared=e,this.alertservice=n,this.router=s,this.accessKey=d.d,this.secretKey=d.e,this.userName=null,this.firstName=null,this.lastName=null,this.termInput={},this.showAnnualupto=!1,this.errMessage=null,this.errMessage1=null,this.errMessage2=null,this.errMessage3=null,this.errorCallJoint=!1,this.errMessagejoint=null,this.limitedValue=[{id:1,value:"1"},{id:5,value:"5"},{id:7,value:"7"},{id:10,value:"10"},{id:12,value:"12"},{id:15,value:"15"},{id:20,value:"20"},{id:25,value:"25"},{id:30,value:"30"},{id:50,value:"50"}],this.dateOptions={},this.errorCall=!1,this.errorCall1=!1,this.errorCall2=!1,this.errorCall3=!1,this.annualIn=!1,this.ConcernMessage=!1,this.shown=!1,this.annualSixty=!1,this.onetime=!1,this.consent=!1,this.errorCus=!1,this.errorMessageforagemonth=null,this.errorMessageforage=null,this.errorCall4=!1,this.errorMessageformin=null,this.errorCall5=!1,this.errorMessageforSecMin=null,this.errorMessageforageSec=null,this.imgSrc="../../../assets/images/Male_N.svg",this.imgSrc1="../../../assets/images/Female_N.svg"}return e.prototype.ngOnInit=function(){var e=window.location.href.split("=")[1];console.log("cuskey_protection",e),""!=e&&void 0!=e||(document.getElementById("errText").innerHTML="Unable to find the customer key, please choose the product/policy once more!",this.errorCus=!0),this.userName=atob(sessionStorage.getItem("user")),this.firstName=sessionStorage.getItem("fisrtName"),this.lastName=sessionStorage.getItem("lastName"),$(document).ready(function(){$("#exampleModal").modal("hide")}),$("#pincodecritical").tooltip({trigger:"focus",title:""});var n=new Date,s=n.getFullYear()-60,t=n.getFullYear()-18,a=n.getMonth(),r=n.getDate();this.dateOptions={maxDate:new Date(t,a,r),minDate:new Date(s,a,r)},document.getElementById("sumInsured").onkeydown=function(e){if(!(e.keyCode>95&&e.keyCode<106||e.keyCode>47&&e.keyCode<58||8==e.keyCode))return!1}},e.prototype.keyPress=function(e){var n=String.fromCharCode(e.charCode);console.log("lenghtt",e.target.value),/[0-9]/.test(n)||e.preventDefault()},e.prototype.isChecked=function(e){$(e.target).prop("checked")?this.consent=!0:this.consent=!1},e.prototype.getValidSum=function(){var e;e=this.termInput.sa%1e5,console.log("proTermInput1",e),this.errorCall=!1,this.errorCallJoint=!1,"N"==this.termInput.isJointLife&&this.termInput.sa<3e6?(this.errorCallJoint=!0,this.errMessagejoint="Minimum sum assured should be 30,00,000",this.errorCall=!1,console.log("sum addu",this.errMessagejoint)):"Y"==this.termInput.isJointLife&&this.termInput.sa<6e6?(this.errorCallJoint=!0,this.errMessagejoint="Minimum sum assured should be 60,00,000",this.errorCall=!1,console.log("sum addu joint",this.errMessagejoint)):(this.errorCallJoint=!1,this.errMessagejoint=""),this.termInput.sa>1e9?(this.errorCall=!0,this.errMessage1="Maximum sum assured should be 100,00,00,000"):"0"!=e?(this.errorCall=!0,this.errMessage1="Sum assured should be increment of 1,00,000"):(this.errMessage1="",this.errorCall=!1)},e.prototype.policyTermvalid=function(e){this.errorCall=!1,e.target.value<5?(this.errorCall=!0,this.errMessage2="Minimum is 5"):e.target.value<this.termInput.ppt?(this.errorCall=!0,this.errMessage2="Policy Term should be greater than or equal to Payment Term.",console.log("hghjghj",this.errMessage2)):e.target.value>82?(this.errorCall=!0,this.errMessage2="Maximum is 82"):(this.errMessage2="",this.errorCall=!1)},e.prototype.paymentTermValid=function(e){var n=this.termInput.pt;console.log("paymentTermPolicy::",n),this.errorCall=!1,e.target.value<5?(this.errorCall=!0,this.errMessage3="Minimum is 5"):e.target.value>=5&&e.target.value<10?(this.errorCall=!1,this.errMessage3=""):e.target.value>n?(this.errorCall=!0,this.errMessage3="Payment Term can't be greater than Policy Term"):e.target.value>50?(this.errorCall=!0,this.errMessage3="Maximum is 50"):(this.errMessage3="",this.errorCall=!1);var s=this.termInput.ppt;this.ageCount(),+s+ +this.age>60?this.ConcernMessage=!0:this.ConcernMessage=!1},e.prototype.getValidPinCode=function(e){var n=this;this.errMessage="",this.errorCall=!1,""==e.target.value?this.errMessage="Pin Code field cannot be blank":this.shared.getPincode(e.target.value).subscribe(function(e){0==Object.keys(e).length?(n.errMessage="Pincode is not valid",n.errorCall=!0):(n.errMessage="",n.errorCall=!1)})},e.prototype.ageCount=function(){var e=new Date,n=document.getElementById("brithID").value;console.log("databitrh::",n);var s=new Date(n),t=e.getFullYear(),a=e.getMonth(),r=e.getDate(),i=s.getFullYear(),o=s.getMonth(),l=s.getDate();this.age=t-i,console.log("age::",this.age),(a<o||a==o&&r<l)&&(this.age--,console.log("ageeee",this.age)),this.age>70?(this.errorMessageforage="Maximum age is 70 years.",this.errorCall5=!0,this.showAnnualupto=!1,console.log("max age")):(this.errorMessageforage="",this.errorCall5=!1,this.showAnnualupto=!0,this.annualSixty&&(this.termInput.ppt=60-Number(this.age))),this.age<18?(this.errorMessageformin="Minimum age should be 18 years.",this.errorCall=!0,this.showAnnualupto=!1,console.log("min age")):(this.errorMessageformin="",this.errorCall=!1,this.showAnnualupto=!0,this.annualSixty&&(this.termInput.ppt=60-Number(this.age)))},e.prototype.ageCountSec=function(){var e=new Date,n=document.getElementById("secbrithID").value;console.log("databitrh::",n);var s=new Date(n),t=e.getFullYear(),a=e.getMonth(),r=e.getDate(),i=s.getFullYear(),o=s.getMonth(),l=s.getDate();this.age=t-i,console.log("age::",this.age),(a<o||a==o&&r<l)&&(this.age--,console.log("ageeee",this.age)),this.age>70?(this.errorMessageforageSec="Maximum age is 70 years.",this.errorCall5=!0,console.log("max age")):(this.errorMessageforageSec="",this.errorCall5=!1),this.age<18?(this.errorMessageforSecMin="Minimum age should be 18 years.",this.errorCall=!0,console.log("min age")):(this.errorMessageforSecMin="",this.errorCall=!1)},e.prototype.calculateTermPpt=function(){void 0!=this.age&&(this.termInput.ppt=60-Number(this.age),console.log("pptttt::",this.termInput.ppt+" "+this.age))},e.prototype.submitForm=function(){var e=window.location.href.split("=")[1];console.log("Pbb_cuskey_protection",e),this.termInput.age=this.shared.calculateAge(this.termInput.dob),console.log("termInput age",this.termInput.dob),"No"==this.termInput.smoker?this.termInput.rating="NS":this.termInput.rating="S","No"==this.termInput.secSmoker?this.termInput.secRating="NS":this.termInput.secRating="S";var n={};n.authentication={accesskey:this.accessKey,secretkey:this.secretKey},n.rmId=sessionStorage.getItem("rmId"),n.customerId=e,n.dob=this.termInput.dob,n.pincode=this.termInput.pincode,n.pt=this.termInput.pt.toString(),n.ppt=this.termInput.ppt.toString(),n.rating=this.termInput.rating,n.gender=this.termInput.gender,n.mode=this.termInput.mode,n.sa=this.termInput.sa,n.payTo60=this.termInput.payTo60,n.secrating=this.termInput.secRating,n.secdob=this.termInput.secdob,n.isJointlife=this.termInput.isJointLife,n.isLifeLongCover=this.termInput.isLifeLongCover,"M"==this.termInput.gender?n.secgender="F":n.secgender="M";var s="Life/Term/"+btoa(JSON.stringify(n));this.router.navigate(["home/policypage"],{queryParams:{quotes:s}})},e.prototype.userSignout=function(){this.router.navigate(["home/login"]),sessionStorage.clear()},e.prototype.changePass=function(){var e=document.getElementById("Old-Password").value,n=document.getElementById("New-Password").value;e!=atob(sessionStorage.getItem("paswrd"))&&(document.getElementById("messageTouser").innerHTML="The old password entered is incorrect.",$("#resultModal").modal("show"));e==n&&(console.log("password not correct"),document.getElementById("messageTouser").innerHTML="The new password should not be same as the old password",$("#resultModal").modal("show"));this.shared.getchangePwd(this.userName,e,n).subscribe(function(e){"success"==e.result&&(document.getElementById("messageTouser").innerHTML="Password has been changed successfully",$("#resultModal").modal("show"),$("#exampleModal").modal("hide"))})},e.prototype.reportIssue=function(e){var n=sessionStorage.getItem("rmId"),s=window.location.href,t=document.getElementById("issueReport").value;console.log("report value::",n+" "+t+" "+s),this.shared.reportIssueService(n,s,t).subscribe(function(n){n.error?console.log("error occured",n.error):(alert("Report Issue successfully sent to the authorized person."),console.log("Success service",n),e.form.reset(),console.log("clear::",e.form.reset()))})},e.prototype.getLifeLongCover=function(){"Y"==this.termInput.isLifeLongCover?this.termInput.pt=100-this.age:this.termInput.pt=""},e=c([Object(t.n)({selector:"app-protection",template:s("bXdj"),styles:[s("rqRB")]}),u("design:paramtypes",[l.a,o.a,a.c])],e)}(),p=function(e,n,s,t){var a,r=arguments.length,i=r<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,s,t);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r<3?a(i):r>3?a(n,s,i):a(n,s))||i);return r>3&&i&&Object.defineProperty(n,s,i),i},g=function(){function e(){this.a=["","One ","Two ","Three ","Four ","Five ","Six ","Seven ","Eight ","Nine ","Ten ","Eleven ","Twelve ","Thirteen ","Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen "],this.b=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]}return e.prototype.transform=function(e,n){if(e){var s=Number(e);if(s){if((s=s.toString()).length>10)return"";var t=("00000000000"+s).substr(-11).match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(!t)return"";var a="";return a+=0!==Number(t[1])?(this.a[Number(t[1])]||this.b[t[1][0]]+" "+this.a[t[1][1]])+"Hundred crore ":"",a+=0!==Number(t[2])?(this.a[Number(t[2])]||this.b[t[2][0]]+" "+this.a[t[2][1]])+"crore ":"",a+=0!==Number(t[3])?(this.a[Number(t[3])]||this.b[t[3][0]]+" "+this.a[t[3][1]])+"lakh ":"",a+=0!==Number(t[4])?(this.a[Number(t[4])]||this.b[t[4][0]]+" "+this.a[t[4][1]])+"thousand ":"",a+=0!==Number(t[5])?(this.a[Number(t[5])]||this.b[t[5][0]]+" "+this.a[t[5][1]])+"hundred ":"",a+=0!==Number(t[6])?(""!==a?"and ":"")+(this.a[Number(t[6])]||this.b[t[6][0]]+" "+this.a[t[5][1]]):""}return""}return""},e=p([Object(t.V)({name:"numberToWords"})],e)}();s.d(n,"ROUTES",function(){return v}),s.d(n,"ProtectionModule",function(){return b});var h=function(e,n,s,t){var a,r=arguments.length,i=r<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,s,t);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r<3?a(i):r>3?a(n,s,i):a(n,s))||i);return r>3&&i&&Object.defineProperty(n,s,i),i},v=[{path:"",component:m}],b=function(){function e(){}return e=h([Object(t.K)({imports:[r.e,i.b,a.d.forChild(v)],declarations:[m,g]})],e)}()}}]);