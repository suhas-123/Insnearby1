(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/qwe":function(e,t){e.exports='<div>\n \n  <div class="rootCus">\n    <div class="brand" *ngIf="router.url !=\'/\'"><p><img src="../../../../assets/images/SelectAssure2.png" class="logo" alt=""></p></div>\n    <label for="show-menu" class="show-menu"><img src="../../../../assets/images/menu-btn.png" alt=""></label>\n    <input type="checkbox" id="show-menu" role="button">\n    <ul id="menu">\n      <li><a routerLink="/" style=" line-height:18px;" ><img src="../../../../assets/images/HomeICON.png" alt=""></a></li>         \n      <li><a routerLink="../../home/mycustomer" style="line-height:18px;"><img src="../../../../assets/images/MyCustomerICON.png" alt=""></a></li>           \n       <li><a routerLink="../../home/myActivities"style="line-height:18px;"><img src="../../../../assets/images/My_activities.png" alt=""></a></li>           \n      <li><a routerLink="/" style=" line-height:18px;"><img src="../../../../assets/images/renewal.png" alt=""></a></li>           \n      <li><a (click) ="userSignout()" style=" line-height:18px;"><img src="../../../../assets/images/SignInICON.png" alt=""></a></li>    \n    </ul>  \n  </div>\n  \n  <div id="dbs">\n    <div class="zerogrid">\n      \n    <div class="contentpro">\n    <div class="icon_status">\n    <div class="icon_name"><img src="../../../assets/images/musthave.svg" alt=""></div>\n    <div class="icon_name"><img src="../../../assets/images/important.svg" alt=""></div>\n    <div class="icon_name"><img src="../../../assets/images/consider.svg" alt=""></div>\n    <div class="icon_name"><img src="../../../assets/images/notneeded.svg" alt=""></div>\n    </div>\n    </div>\n    \n    <div class="contentmain1">\n    \n    <div class="icon_box" *ngFor= "let data of proData; let i=index"><a (click)= "getDetails($event, i)" class="various fancybox.iframe"><img src={{data.img_url}} alt=""></a>\n    <div class="icon_text"><img [src]="data.imageRateTag" alt=""><span>{{data.name}}</span></div></div>\n    \n    </div>\n    \n    </div>\n      \n    \n    \n    \x3c!-- ends here--\x3e\n    <div id="loader"></div>\n    <div id="footermain">\n      <div class="footer_Pas1">{{firstName}} &nbsp; {{lastName}} &nbsp;\n        \n     </div>\n      <div class="footer_R">All Rights Reserved &copy; NEARBY TECHNOLOGIES PVT. LTD</div>\n      \n      <div class="footer_Pas2"><a data-toggle="modal" data-target="#exampleModal"><b>Change Password</b></a>&nbsp; &nbsp; <span><a data-toggle="modal" data-target="#reportIssueModel"><b>Report Issue</b></a></span></div>\n    </div>\n     \x3c!-- Modal --\x3e\n    <div data-backdrop="static" data-keyboard="false" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title" id="exampleModalLabel">CHANGE PASSWORD</h5>\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n        </div>\n        <div class="modal-body">\n          <form  #changePwdForm = "ngForm">\n            <div class="form-group">\n              <label for="Old-Password" class="col-form-label" >Old Password:</label>\n              <input type="password" class="form-control" name="oldPwd" id="Old-Password" required>\n            </div>\n             <div ngModelGroup="password" #userPassword="ngModelGroup" required >\n            <div class="form-group">\n              <label for="New-Password" class="col-form-label" >New Password:</label>\n              <input type="password" class="form-control" name="newPwd" id="New-Password" ngModel required>\n            </div>\n            <div class="form-group">\n              <label for="cngm-Password" class="col-form-label">Confirm Password:</label>\n              <input type="password" class="form-control" name="confirmPwd" id="cngm-Password" ngModel required>\n            </div>\n             <div *ngIf="(userPassword.invalid|| userPassword.value?.newPwd != userPassword.value?.confirmPwd) && (userPassword.touched)" class="alert alert-danger dontmatch">\n                   <div *ngIf = "userPassword.invalid; else nomatch">\n                    New Password and Confirm Password should match\n                                  </div>\n                      <ng-template #nomatch >\n                        New Password and Confirm Password should match\n                      </ng-template>\n                  </div>\n           </div> \n          \n       \n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n          <button type="button" (click) ="changePass()" [disabled]="!changePwdForm.form.valid" class="btn btn-primary">Change Password</button>\n        </div>\n        </form>\n         </div>\n      </div>\n    </div>\n    </div>\n    \n    \n    \x3c!-- Success or failure modal --\x3e\n    <div id="resultModal" class="modal" tabindex="-1" role="dialog">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-body">\n          <p id="messageTouser"></p>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n        </div>\n      </div>\n    </div>\n    </div>\n    \x3c!-- ends here--\x3e\n          \x3c!--Report Issue modal starts here--\x3e\n    <div data-backdrop="static" data-keyboard="false" class="modal fade" id="reportIssueModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel11" aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title" id="exampleModalLabel11">Report An Issue</h5>\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n        </div>\n        <div class="modal-body">\n          <form  #reportAnIssue = "ngForm" >\n            <div class="form-group">\n              <label for="cngm-Password" class="col-form-label" style="margin-left: 63px;">Description of the issue:</label>\n              <textarea rows="3" cols="60" type="text" value="" name="issue" id="issueReport" ngModel required style="margin: 0 0 0 -61px;"></textarea>\n            </div>\n          \n       \n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n          <button type="button" (click) ="reportIssue(reportAnIssue)" data-dismiss="modal" [disabled]="!reportAnIssue.form.valid" class="btn btn-primary">Report</button>\n        </div>\n        </form>\n         </div>\n      </div>\n    </div>\n    </div>\n    \x3c!--Report Issue modal ends here--\x3e\n    \n    \x3c!-- Detail modal --\x3e\n    <div data-backdrop="static" data-keyboard="false" class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModalTitle" aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title" id="exampleModalLongTitle">{{prodDetails.prodName}}</h5>\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n        </div>\n        <div class="modal-body">\n        <div class="iconone_box"><img [src]="prodDetails.prodImg" alt=""></div>\n        <div class="iconone_text">\n        <p [innerHTML]="prodDetails.text"></p>\n        </div>\n        <br>\n        <div *ngIf="ReasonForContinue">\n        <span class="">\n            <span class="ui-icon ui-icon-alert yellowcontrol" style="float: left; margin-right: .3em;">\n              <span style="font-family: Lato; font-size: 16px;color: #333;font-weight: 400; line-height: 24px;margin: -5% 0% 2px 3%;float: right"> This product is not recommended for you. Your consent/reason is required to continue.\n              <span>\n                  <input type="checkbox" id="consentcb" class="css-checkbox" name="consentcb" (change)="isChecked($event)">\n                  <label for="consentcb" class="css-label"></label>\n              </span>\n            </span>\n              <br>\n             <span style="margin: 0 0 0 20px;">Reason:\n              <textarea style="margin: 0 0 0 27px;" rows="g" cols="70" type="text" id="reasonText" [(ngModel)]="termInput.addlData" value="" name="addlData" (input)="myFunction($event)"></textarea>\n            </span>\n            \x3c!--  <input type="text" id="name" onkeyup="myFunction()">--\x3e\n            </span>\n        </span>\n      </div>\n        </div>\n      <div class="modal-footer">\n          <button type="button" class="btn btn-secondary closeBtn" data-dismiss="modal">Close</button>\n          <button  (click)="gotoProdDetails()" type="button" class="btn btn-primary"id="send" [disabled]=" ReasonForContinue && (!consent || !reasontext)">Policy Search</button>\n     </div>\n      </div>\n    </div>\n    </div>\n    \x3c!-- ends here--\x3e\n    </div>'},LuV0:function(e,t,a){"use strict";a.r(t);var s=a("3xsP"),o=a("mhOz"),n=a("n2nD"),r=a("1FVJ"),i=a("Yare"),l=function(e,t,a,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(n<3?o(r):n>3?o(t,a,r):o(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.shared=e,this.router=t,this.userName=null,this.displayReason=!1,this.termInput={},this.firstName=null,this.lastName=null,this.data=[],this.proData=[],this.imgUrl=[],this.prodDetails={},this.results=[],this.ReasonForContinue=!1,this.consent=!1,this.reasontext=!1}return e.prototype.ngOnInit=function(){this.userName=atob(sessionStorage.getItem("user")),this.firstName=sessionStorage.getItem("fisrtName"),this.lastName=sessionStorage.getItem("lastName"),$(document).ready(function(){$("#exampleModal").modal("hide")});var e=sessionStorage.getItem("rmId"),t=window.location.href.split("=")[1];console.log("urrrrll",t);var a=sessionStorage.getItem("statusOfcustomer");console.log("getstatussStatusOfcustomer::",a),console.log("rmid",e),console.log("customerIddddd",sessionStorage.getItem("customerId")),this.loadProduct(),$(".contentmain1").hide()},e.prototype.isChecked=function(e){$(e.target).prop("checked")?(this.consent=!0,console.log("truee")):(this.consent=!1,console.log("false"))},e.prototype.myFunction=function(e){console.log("ress",e.target.value),e.target.value.length>4?(this.reasontext=!0,console.log("true")):(this.reasontext=!1,console.log("false"))},e.prototype.loadProduct=function(){var e=this;if(sessionStorage.getItem("rmId")){var t=window.location.href.split("=")[1];console.log("PNB strUrl",t);var a=decodeURIComponent(t);console.log("PNB decodeUriData",a);var s=sessionStorage.getItem("customerId"),o=sessionStorage.getItem("rmId"),n=sessionStorage.getItem("monthlyExpense"),r=sessionStorage.getItem("disposableIncome");this.shared.getProduct().subscribe(function(i){if(e.proData=i.products,console.log("finalData product for both new and old",e.proData),console.log("finalData product for old user",e.proData),t==a)console.log("finalData product for New user",e.proData),$("#loader").hide(),$(".contentmain1").show(),$(".contentpro").hide();else{var l=atob(a);console.log("PNB finalData",l);var d=l;console.log("old user"),e.shared.getProductRatings(d,s,o,n,r).subscribe(function(t){e.getTextandRAting(t),$("#loader").hide(),$(".contentmain1").show()},function(t){if($("#loader").hide(),401==t.status){var a=window.location.href.split("=")[1];e.router.navigate(["home/login"],{queryParams:{returnUrl:"/home/product?answerKey="+a}})}})}})}},e.prototype.getTextandRAting=function(e){console.log("dataaa::",e);var t;t=e.result.result.goals,console.log("data1",t);var a=t.goalsOutput;console.log("RATINGS",a);var s=Object.keys(a).length;console.log("obj_dataLength",s);for(var o=0;o<s;o++)switch(Object.keys(a)[o]){case"Health-Hospitalization":this.proData[0].ratings=a[Object.keys(a)[o]];break;case"Health-Hospitalization_Text":this.proData[0].text=a[Object.keys(a)[o]];break;case"Health-CI":this.proData[1].ratings=a[Object.keys(a)[o]];break;case"Health-CI_Text":this.proData[1].text=a[Object.keys(a)[o]]}this.putTheRatings(this.proData)},e.prototype.putTheRatings=function(e){console.log("putTheRatingsPB0101",e),console.log("length",e.length);for(var t="../../../assets/images/",a=0;a<e.length;a++){switch(e[a].ratings){case"0":this.proData[a].imageRateTag=t+"ICONGrey.png";break;case"1":this.proData[a].imageRateTag=t+"ICONYellow.svg";break;case"2":this.proData[a].imageRateTag=t+"important_new.png";break;case"3":this.proData[a].imageRateTag=t+"ICONGreen.png"}"0"===e[a].ratings?this.proData[a].img_url=e[a].img_url_cross:null==e[a].ratings?this.proData[a].img_url=e[a].img_url_cross:this.proData[a].img_url}e.sort(function(e,t){return e.ratings>t.ratings?-1:e.ratings<t.ratings?1:0})},e.prototype.getDetails=function(e,t){this.prodDetails.prodName=this.proData[t].name,this.prodDetails.prodImg=this.proData[t].img_url,this.prodDetails.text=this.proData[t].text,console.log("prodDetails",this.prodDetails.name);var a=sessionStorage.getItem("customerId");switch(this.prodDetails.prodName){case"Health Hospitalisation":this.router.navigate(["home/health-details"],{queryParams:{customerKey:a}});break;case"Car Insurance":this.router.navigate(["home/carinsu-details"],{queryParams:{customerKey:a}});break;case"Bike Insurance":this.router.navigate(["home/twowheeler-details"],{queryParams:{customerKey:a}})}var s;s=this.termInput.addlData,console.log("addlDataaddlData::",s)},e.prototype.gotoProdDetails=function(){$("#detailModal").modal("hide"),console.log("xyz");var e=sessionStorage.getItem("customerId");switch(this.prodDetails.prodName){case"Health Hospitalisation":this.router.navigate(["home/health-details"],{queryParams:{customerKey:e}});break;case"Critical Illness":this.router.navigate(["home/criticalill-details"],{queryParams:{customerKey:e}});break;case"Regular Income":this.router.navigate(["home/regularIncome-details"],{queryParams:{customerKey:e}});break;case"Protection":this.router.navigate(["home/protection-details"],{queryParams:{customerKey:e}});break;case"Child Education":this.router.navigate(["home/childEdu-details"],{queryParams:{customerKey:e}});break;case"Saving Unit Linked":this.router.navigate(["home/savingsULink-details"],{queryParams:{customerKey:e}});break;case"Home Insurance":this.router.navigate(["home/homeinsu-details"],{queryParams:{customerKey:e}});break;case"Saving Traditional":this.router.navigate(["home/savingTrad-details"],{queryParams:{customerKey:e}});break;case"Car Insurance":this.router.navigate(["home/carinsu-details"],{queryParams:{customerKey:e}});break;case"Annuity Plan":this.router.navigate(["home/annuity-plan"],{queryParams:{customerKey:e}});break;case"Two Wheeler":this.router.navigate(["home/twowheeler-details"],{queryParams:{customerKey:e}})}var t;t=this.termInput.addlData,console.log("addlDataaddlData::",t)},e.prototype.userSignout=function(){this.router.navigate(["home/login"]),sessionStorage.clear()},e.prototype.changePass=function(){var e=this,t=document.getElementById("Old-Password").value,a=document.getElementById("New-Password").value;t!=atob(sessionStorage.getItem("paswrd"))&&(document.getElementById("messageTouser").innerHTML="The old password entered is incorrect.",$("#resultModal").modal("show"));t==a&&(console.log("password not correct"),document.getElementById("messageTouser").innerHTML="The new password should not be same as the old password",$("#resultModal").modal("show"));this.shared.getchangePwd(this.userName,t,a).subscribe(function(e){"success"==e.result&&(document.getElementById("messageTouser").innerHTML="Password has been changed successfully",$("#resultModal").modal("show"),$("#exampleModal").modal("hide"))},function(t){if($("#loader").hide(),401==t.status){var a=window.location.href.split("=")[1];e.router.navigate(["home/login"],{queryParams:{returnUrl:"/home/product?answerKey="+a}})}})},e.prototype.reportIssue=function(e){var t=sessionStorage.getItem("rmId"),a=window.location.href,s=document.getElementById("issueReport").value;console.log("report value::",t+" "+s+" "+a),this.shared.reportIssueService(t,a,s).subscribe(function(t){t.error?console.log("error occured",t.error):(alert("Report Issue successfully sent to the authorized person."),console.log("Success service",t),e.form.reset(),console.log("clear::",e.form.reset()))})},e=l([Object(s.n)({selector:"app-product",template:a("/qwe"),styles:[a("x2+b")]}),d("design:paramtypes",[i.a,o.c])],e)}();a.d(t,"ROUTES",function(){return u}),a.d(t,"ProductModule",function(){return g});var m=function(e,t,a,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(n<3?o(r):n>3?o(t,a,r):o(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r},u=[{path:"",component:c}],g=function(){function e(){}return e=m([Object(s.K)({imports:[n.e,r.b,o.d.forChild(u)],declarations:[c]})],e)}()},"x2+b":function(e,t){e.exports="ul {\n    left: 824px !important;\n    \n  }\n\n@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait ) { \n    ul {\n        left: 341px !important;\n        \n      }\n    .contentpro{\n        width: 68% !important;\n    }\n\n    .contentmain1{\n        width: 69% !important;\n    }\n    #dbs{\n        width: 94% !important;\n    }\n    \n}\n\n@media (max-width : 1024px) and (min-width : 768px) and (orientation: landscape) {\n    ul {\n        left: 438px !important;\n        \n      }\n    }"}}]);