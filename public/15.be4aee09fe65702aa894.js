(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5aFe":function(e,s,t){"use strict";t.r(s),t.d(s,"ROUTES",function(){return d}),t.d(s,"CustmerThreePlanModule",function(){return c});var a=t("3xsP"),r=t("mhOz"),n=t("n2nD"),o=t("1FVJ"),i=t("tCZE"),l=function(e,s,t,a){var r,n=arguments.length,o=n<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,t,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(n<3?r(o):n>3?r(s,t,o):r(s,t))||o);return n>3&&o&&Object.defineProperty(s,t,o),o},d=[{path:"",component:i.a}],c=function(){function e(){}return e=l([Object(a.K)({imports:[n.e,o.b,r.d.forChild(d)],declarations:[i.a]})],e)}()},"6vQ1":function(e,s){e.exports='<div>\r\n    \r\n  <div class="rootCus">\r\n    <div class="brand" *ngIf="router.url !=\'/\'"><p><img src="../../../../assets/images/SelectAssure2.png" class="logo" alt=""></p></div>\r\n    <label for="show-menu" class="show-menu"><img src="../../../../assets/images/menu-btn.png" alt=""></label>\r\n    <input type="checkbox" id="show-menu" role="button">\r\n    <ul id="menu">\r\n      <li><a routerLink="/" style=" line-height:18px;" ><img src="../../../../assets/images/HomeICON.png" alt=""></a></li>         \r\n      <li><a routerLink="../../home/mycustomer" style="line-height:18px;"><img src="../../../../assets/images/MyCustomerICON.png" alt=""></a></li>           \r\n       <li><a routerLink="../../home/myActivities"style="line-height:18px;"><img src="../../../../assets/images/My_activities.png" alt=""></a></li>           \r\n      <li><a routerLink="/" style=" line-height:18px;"><img src="../../../../assets/images/renewal.png" alt=""></a></li>           \r\n      <li><a (click) ="userSignout()" style=" line-height:18px;"><img src="../../../../assets/images/SignInICON.png" alt=""></a></li>    \r\n    </ul>  \r\n  \r\n  </div>\r\n<div id="dbs">\r\n        <div class="contentmain2"><div class="zerogrid">\r\n        <div class="quest">What is your living situation?</div>\r\n        <div class="check2">\r\n        <div class="chek_box5">\r\n        <input type="radio" name="qns05" id="checkboxG19" value="Q5A1" (change)="inputFieldChg05($event)" class="css-checkbox19"/>\r\n          <label for="checkboxG19" class="css-label19"></label></div>\r\n        \r\n        <div class="chek_box5">\r\n        <input type="radio" name="qns05" id="checkboxG20" value="Q5A2" (change)="inputFieldChg05($event)" class="css-checkbox20"/>\r\n        <label for="checkboxG20" class="css-label20"> </label></div>\r\n        \r\n        <div class="chek_box5">\r\n        <input type="radio" name="qns05" id="checkboxG21" value="Q5A3" (change)="inputFieldChg05($event)" class="css-checkbox21"/>\r\n        <label for="checkboxG21" class="css-label21"> </label></div>\r\n        \r\n        \r\n        </div>\r\n        \r\n        <div class="quest1">What are your possesions?</div>\r\n        \r\n        <div class="checkCurrentStage">\r\n        <div class="chek_box6">\r\n        <input type="checkbox" name="qns06" id="checkboxG22" value="Q6A1" (change)="inputFieldChg06($event)" class="css-checkbox22"/>\r\n          <label for="checkboxG22" class="css-label22"></label></div>\r\n        \r\n        <div class="chek_box6">\r\n        <input type="checkbox" name="qns06" id="checkboxG23" value="Q6A2" (change)="inputFieldChg06($event)" class="css-checkbox23"/>\r\n        <label for="checkboxG23" class="css-label23"> </label></div>\r\n        \r\n        <div class="chek_box6">\r\n        <input type="checkbox" name="qns06" id="checkboxG24" value="Q6A3" (change)="inputFieldChg06($event)" class="css-checkbox24"/>\r\n        <label for="checkboxG24" class="css-label24"> </label></div>\r\n        \r\n        <div class="chek_box6">\r\n        <input type="checkbox" name="qns06" id="checkboxG28" value="Q6A4" (change)="inputFieldChg06($event)" class="css-checkbox28"/>\r\n        <label for="checkboxG28" class="css-label28"> </label></div>\r\n        </div>\r\n        \r\n        </div>\r\n        \r\n        </div>\r\n        <br>\r\n        \r\n\r\n        \x3c!--<div class="zerogrid">\r\n        <div class="onebutton1"><a (click)="goBack()"><img src="../../../assets/images/previous.png" alt=""></a></div>\r\n        <div class="onebuttonThree" *ngIf="showNext"><a (click)="gotoNext()"> <img src="../../../assets/images/next.png" alt=""></a></div>\r\n        </div>--\x3e\r\n        </div>\r\n        <div class="container-fluid">\r\n          <div class="row">\r\n              <div class="col-md-6 col-sm-6">\r\n                <div class=""><a (click)="goBack()"><img src="../../../assets/images/previous.png" alt=""></a></div>\r\n              </div>\r\n\r\n              \x3c!-- <div class="col-md-4 col-sm-4 text-right">\r\n                <div class="" *ngIf="!showNext"><a (click)="skipOmp()"><img style="float:right;" src="../../../assets/images/skip.png" alt=""></a></div>\r\n              </div> --\x3e\r\n              \r\n                <div class="col-md-6 col-sm-6 text-right">\r\n                  <div class="" *ngIf="showNext"><a (click)="gotoNext()"> <img  src="../../../assets/images/next.png" alt=""></a></div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div id="footermain">\r\n          <div class="footer_Pas1">{{firstName}} &nbsp; {{lastName}} &nbsp;\r\n            \r\n         </div>\r\n          <div class="footer_R">All Rights Reserved &copy; NEARBY TECHNOLOGIES PVT. LTD</div>\r\n          \r\n          <div class="footer_Pas2"><a data-toggle="modal" data-target="#exampleModal"><b>Change Password</b></a>&nbsp; &nbsp; <span><a data-toggle="modal" data-target="#reportIssueModel"><b>Report Issue</b></a></span></div>\r\n        </div>\r\n         \x3c!-- Modal --\x3e\r\n        <div data-backdrop="static" data-keyboard="false" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\r\n        <div class="modal-dialog" role="document">\r\n          <div class="modal-content">\r\n            <div class="modal-header">\r\n              <h5 class="modal-title" id="exampleModalLabel">CHANGE PASSWORD</h5>\r\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\r\n                <span aria-hidden="true">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class="modal-body">\r\n              <form  #changePwdForm = "ngForm">\r\n                <div class="form-group">\r\n                  <label for="Old-Password" class="col-form-label" >Old Password:</label>\r\n                  <input type="password" class="form-control" name="oldPwd" id="Old-Password" required>\r\n                </div>\r\n                 <div ngModelGroup="password" #userPassword="ngModelGroup" required >\r\n                <div class="form-group">\r\n                  <label for="New-Password" class="col-form-label" >New Password:</label>\r\n                  <input type="password" class="form-control" name="newPwd" id="New-Password" ngModel required>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label for="cngm-Password" class="col-form-label">Confirm Password:</label>\r\n                  <input type="password" class="form-control" name="confirmPwd" id="cngm-Password" ngModel required>\r\n                </div>\r\n                 <div *ngIf="(userPassword.invalid|| userPassword.value?.newPwd != userPassword.value?.confirmPwd) && (userPassword.touched)" class="alert alert-danger dontmatch">\r\n                       <div *ngIf = "userPassword.invalid; else nomatch">\r\n                        New Password and Confirm Password should match\r\n                                      </div>\r\n                          <ng-template #nomatch >\r\n                            New Password and Confirm Password should match\r\n                          </ng-template>\r\n                      </div>\r\n               </div> \r\n              \r\n           \r\n            <div class="modal-footer">\r\n              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\r\n              <button type="button" (click) ="changePass()" [disabled]="!changePwdForm.form.valid" class="btn btn-primary">Change Password</button>\r\n            </div>\r\n            </form>\r\n             </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        \r\n        \r\n        \x3c!-- Success or failure modal --\x3e\r\n        <div id="resultModal" class="modal" tabindex="-1" role="dialog">\r\n        <div class="modal-dialog" role="document">\r\n          <div class="modal-content">\r\n            <div class="modal-body">\r\n              <p id="messageTouser"></p>\r\n            </div>\r\n            <div class="modal-footer">\r\n              <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        \x3c!-- ends here--\x3e\r\n              \x3c!--Report Issue modal starts here--\x3e\r\n        <div data-backdrop="static" data-keyboard="false" class="modal fade" id="reportIssueModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel11" aria-hidden="true">\r\n        <div class="modal-dialog" role="document">\r\n          <div class="modal-content">\r\n            <div class="modal-header">\r\n              <h5 class="modal-title" id="exampleModalLabel11">Report An Issue</h5>\r\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\r\n                <span aria-hidden="true">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class="modal-body">\r\n              <form  #reportAnIssue = "ngForm" >\r\n                <div class="form-group">\r\n                  <label for="cngm-Password" class="col-form-label" style="margin-left: 63px;">Description of the issue:</label>\r\n                  <textarea rows="3" cols="60" type="text" value="" name="issue" id="issueReport" ngModel required style="margin: 0 0 0 -61px;"></textarea>\r\n                </div>\r\n              \r\n           \r\n            <div class="modal-footer">\r\n              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\r\n              <button type="button" (click) ="reportIssue(reportAnIssue)" data-dismiss="modal" [disabled]="!reportAnIssue.form.valid" class="btn btn-primary">Report</button>\r\n            </div>\r\n            </form>\r\n             </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        \x3c!--Report Issue modal ends here--\x3e       \r\n       \r\n\r\n</div>'},tCZE:function(e,s,t){"use strict";t.d(s,"a",function(){return c});var a=t("3xsP"),r=t("mhOz"),n=t("Yare"),o=t("rpPo"),i=t("6g8o"),l=function(e,s,t,a){var r,n=arguments.length,o=n<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,t,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(n<3?r(o):n>3?r(s,t,o):r(s,t))||o);return n>3&&o&&Object.defineProperty(s,t,o),o},d=function(e,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,s)},c=function(){function s(e,s,t,a){this.shared=e,this.router=s,this.alertservice=t,this.authService=a,this.userName=null,this.firstName=null,this.lastName=null,this.getAnsData01=[],this.getAnsData02=[],this.getData=null,this.finalData=[],this.cusKey=null,this.showNext=!1}return s.prototype.ngOnInit=function(){this.cusKey=location.href.split("=")[1].split("&")[0],this.getData=decodeURIComponent(location.href.split("=")[2]),"c$Kj"==this.getData?(this.userName=atob(sessionStorage.getItem("user")),this.firstName=sessionStorage.getItem("fisrtName"),this.lastName=sessionStorage.getItem("lastName"),$(document).ready(function(){$("#exampleModal").modal("hide")})):(this.getData=atob(this.getData),this.userName=atob(sessionStorage.getItem("user")),this.firstName=sessionStorage.getItem("fisrtName"),this.lastName=sessionStorage.getItem("lastName"),$(document).ready(function(){$("#exampleModal").modal("hide")}))},s.prototype.ngDoCheck=function(){this.getAnsData02.length>0&&this.getAnsData01.length>0?this.showNext=!0:this.showNext=!1},s.prototype.gotoNext=function(){this.finalData.push(this.getData,this.getAnsData01,this.getAnsData02);var e=this.finalData.toString();e=btoa(e),console.log("answe1::",atob(e)),this.router.navigate(["home/customerqusFour"],{queryParams:{customerId:this.cusKey,answerKey:e}})},s.prototype.inputFieldChg05=function(e){$("input[name=qns05]:checked")&&(this.getAnsData01=$("input[name=qns05]:checked").val()),console.log("getAnsData01:::",this.getAnsData01)},s.prototype.inputFieldChg06=function(e){if($(e.target).prop("checked")&&!this.itemExists(this.getAnsData02,e.target.value))this.getAnsData02.push(e.target.value);else{var s=this.getAnsData02.indexOf(e.target.value);this.getAnsData02.splice(s,1)}console.log("getAnsData02:::",this.getAnsData02)},s.prototype.itemExists=function(e,s){for(var t=!1,a=0;a<e.length;a++)if(e[a]==s){t=!0;break}return t},s.prototype.goBack=function(){window.history.back()},s.prototype.skipOmp=function(){this.router.navigate(["home/customerqusFour"],{queryParams:{customerId:this.cusKey,answerKey:"c$Kj"}})},s.prototype.userSignout=function(){this.router.navigate(["home/login"]),this.authService.reset(),sessionStorage.clear()},s.prototype.changePass=function(){var e=document.getElementById("Old-Password").value,s=document.getElementById("New-Password").value;e!=atob(sessionStorage.getItem("paswrd"))&&(document.getElementById("messageTouser").innerHTML="The old password entered is incorrect.",$("#resultModal").modal("show"));e==s&&(console.log("password not correct"),document.getElementById("messageTouser").innerHTML="The new password should not be same as the old password",$("#resultModal").modal("show"));this.shared.getchangePwd(this.userName,e,s).subscribe(function(e){"success"==e.result&&(document.getElementById("messageTouser").innerHTML="Password has been changed successfully",$("#resultModal").modal("show"),$("#exampleModal").modal("hide"))})},s.prototype.reportIssue=function(e){var s=sessionStorage.getItem("rmId"),t=window.location.href,a=document.getElementById("issueReport").value;console.log("report value::",s+" "+a+" "+t),this.shared.reportIssueService(s,t,a).subscribe(function(s){s.error?console.log("error occured",s.error):(alert("Report Issue successfully sent to the authorized person."),console.log("Success service",s),e.form.reset(),console.log("clear::",e.form.reset()))})},s=l([Object(a.n)({moduleId:e.i,selector:"app-custmer-qns",template:t("6vQ1"),styles:[t("l2qO")]}),d("design:paramtypes",[n.a,r.c,o.a,i.a])],s)}()}}]);