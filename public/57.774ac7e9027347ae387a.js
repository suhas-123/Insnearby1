(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"E+SV":function(e,n,t){"use strict";t.r(n);var a=t("3xsP"),o=t("mhOz"),i=t("n2nD"),s=t("1FVJ"),r=t("xkgV"),l=t("Yare"),d=t("rpPo"),c=t("6g8o"),m=function(e,n,t,a){var o,i=arguments.length,s=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(i<3?o(s):i>3?o(n,t,s):o(n,t))||s);return i>3&&s&&Object.defineProperty(n,t,s),s},p=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},u=function(){function e(e,n,t,a){this.shared=e,this.router=n,this.alertservice=t,this.authService=a,this.firstName=null,this.dbsLocation={},this.licensetype={},this.designation=null,this.errorCall2=!1,this.errMessage3=null,this.newUserEmailId=null,this.data=[],this.rmIdList={},this.userName=null,this.rmError=null}return e.prototype.ngOnInit=function(){this.designation="TRM",this.getAllRMId(),this.firstName=sessionStorage.getItem("fisrtName"),this.lastName=sessionStorage.getItem("lastName"),this.userName=atob(sessionStorage.getItem("user")),$("#rmCreationId").hide(),$("#settingsIcon").click(function(){$("#rmCreationId").toggle()}),$("#loader4").show()},e.prototype.newUserEmailIdEvent=function(e){this.newUserEmailId=e.target.value},e.prototype.userSignout=function(){this.router.navigate(["home/login"]),this.authService.reset(),sessionStorage.clear()},e.prototype.register=function(){document.getElementById("MangeEmail").value=this.newUserEmailId},e.prototype.getToday=function(){var e=(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate();this.licenseExpdate=document.getElementById("licenseExpDate").value,this.licenseExpdate<=e?(this.errorCall2=!0,this.errMessage3="License Expiry date should be future dated."):(this.errorCall2=!1,this.errMessage3="")},e.prototype.rmCreation=function(e){var n=this,t=document.getElementById("rmName").value,a=document.getElementById("uhName").value,o=document.getElementById("MangeEmail").value,i=this.dbsLocation,s=document.getElementById("licenseType").value;document.getElementById("designation").value=this.designation;var r=document.getElementById("cityHead").value,l=document.getElementById("licenseCode").value,d=document.getElementById("licenseExpDate").value,c=document.getElementById("mobile").value,m={licenseNo:l,licenseExpiryDate:d,cityHead:r,designation:this.designation,location:i,licenseType:s,mobile:c};this.shared.rmCreationService(o,t,a,"NBIB","0",m,c).subscribe(function(t){t.error?(n.rmError=t.error,alert(n.rmError),setTimeout(function(){e.form.reset()},2e3),console.log("error occured",n.rmError)):(alert("RM Id has been generated."),setTimeout(function(){e.form.reset()},2e3),console.log("Success service",t))})},e.prototype.getAllRMId=function(){var e=this;$("#loader4").show(),this.shared.getAllRMIdService().subscribe(function(n){e.data=n.result,$("#loader4").hide(),e.data.forEach(function(n){e.rmIdList=n.rmId})})},e.prototype.deactivateRM=function(e){var n=this,t=e.rmId,a=e.firstName,o=e.lastName,i=e.isAdmin,s=e.isRm,r=e.lastLoginDate,l=e.lastSyncDate,d=e.organizationCode,c=e.rmId,m=e.addlData;this.shared.deactivateRMService(t,a,o,i,s,r,l,d,c,m).subscribe(function(e){e.error?$("#deleteUserModal").hide():($("#deleteUserModal").show(),setInterval(function(){n.getAllRMId()},1e3),console.log("success",e))})},e.prototype.activateRM=function(e){var n=this,t=e.rmId,a=e.firstName,o=e.lastName,i=e.isAdmin,s=e.isRm,r=e.lastLoginDate,l=e.lastSyncDate,d=e.organizationCode,c=e.rmId,m=e.addlData;this.shared.activateRMService(t,a,o,i,s,r,l,d,c,m).subscribe(function(e){e.error?$("#activateRMModal").hide():($("#activateRMModal").show(),setInterval(function(){n.getAllRMId()},1e3),console.log("success",e))})},e.prototype.resetPassword=function(e){var n=e.rmId;console.log("rmid::",n),this.shared.resetPasswordService(n).subscribe(function(e){console.log("success msg",e)})},e.prototype.changePass=function(){var e=this,n=document.getElementById("Old-Password").value,t=document.getElementById("New-Password").value;n!=atob(sessionStorage.getItem("paswrd"))&&(document.getElementById("messageTouser").innerHTML="The old password entered is incorrect.",$("#resultModal").modal("show"));n==t&&(console.log("password not correct"),document.getElementById("messageTouser").innerHTML="The new password should not be same as the old password",$("#resultModal").modal("show"));this.shared.getchangePwd(this.userName,n,t).subscribe(function(e){"success"==e.result&&(document.getElementById("messageTouser").innerHTML="Password has been changed successfully",$("#resultModal").modal("show"),$("#exampleModal").modal("hide"))},function(n){$("#loader").hide(),401==n.status?e.router.navigate(["home/login"],{queryParams:{returnUrl:"/home/mycustomer"}}):e.alertservice.error("Something broken, try again!")})},e.prototype.reportIssue=function(e){var n=sessionStorage.getItem("rmId"),t=window.location.href,a=document.getElementById("issueReport").value;console.log("report value::",n+" "+a+" "+t),this.shared.reportIssueService(n,t,a).subscribe(function(n){n.error?console.log("error occured",n.error):(alert("Report Issue successfully sent to the authorized person."),console.log("Success service",n),e.form.reset(),console.log("clear::",e.form.reset()))})},e=m([Object(a.n)({selector:"app-manage-user-creation",template:t("c82X"),styles:[t("q30D")]}),p("design:paramtypes",[l.a,o.c,d.a,c.a])],e)}(),g=function(e,n,t,a){var o,i=arguments.length,s=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(i<3?o(s):i>3?o(n,t,s):o(n,t))||s);return i>3&&s&&Object.defineProperty(n,t,s),s},f=function(){function e(){}return e.prototype.transform=function(e,n){return e.filter(function(e){for(var t in e)if((""+e[t]).toLowerCase().includes(n.toLowerCase()))return!0;return!1})},e=g([Object(a.K)({imports:[s.b],declarations:[]}),Object(a.V)({name:"searchFilter"})],e)}();t.d(n,"ROUTES",function(){return v}),t.d(n,"ManageUserCreationModule",function(){return h});var b=function(e,n,t,a){var o,i=arguments.length,s=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(i<3?o(s):i>3?o(n,t,s):o(n,t))||s);return i>3&&s&&Object.defineProperty(n,t,s),s},v=[{path:"",component:u}],h=function(){function e(){}return e=b([Object(a.K)({imports:[r.a,i.e,s.b,o.d.forChild(v)],declarations:[u,f]})],e)}()},c82X:function(e,n){e.exports='<div>\n\n  <div class="rootCus">\n    <div class="brand" *ngIf="router.url !=\'/\'"><p><img src="../../../../assets/images/SelectAssure2.png" class="logo" alt=""></p></div>\n    <label for="show-menu" class="show-menu"><img src="../../../../assets/images/menu-btn.png" alt=""></label>\n    <input type="checkbox" id="show-menu" role="button">\n    <ul id="menu">\n      <li><a routerLink="/" style=" line-height:18px;" ><img src="../../../../assets/images/HomeICON.png" alt=""></a></li>         \n      <li><a routerLink="../../home/mycustomer" style="line-height:18px;"><img src="../../../../assets/images/MyCustomerICON.png" alt=""></a></li>           \n       <li><a routerLink="../../home/myActivities"style="line-height:18px;"><img src="../../../../assets/images/My_activities.png" alt=""></a></li>           \n      <li><a routerLink="/" style=" line-height:18px;"><img src="../../../../assets/images/renewal.png" alt=""></a></li>           \n      <li><a (click) ="userSignout()" style=" line-height:18px;"><img src="../../../../assets/images/SignInICON.png" alt=""></a></li>    \n    </ul>  \n  \n  </div>\n<div id="dbs">\n    <div class="select_menu">\n<div class="container">\n    <br>\n  <div class="well" style="background-color: #ffffff; padding: 10px;">\n      <form class="form-horizontal">\n          <div class="form-group form-group-lg">&nbsp; &nbsp;<span style=" color: black;font-size: 18px;"><img src="../../../assets/images/ManageUser.png" alt=""> &nbsp;&nbsp;Add Relationship Manager\n          </span></div> \n        </form>\n        </div>\n</div>\n<div class="container">\n    <div class="well" style="background-color: #ffffff;padding: 10px;">\n        <form class="form-horizontal" id="saveCustomer" #createNewUsr="ngForm">           \n            <div class="form-group form-group-md">\n              <label class="col-sm-3 col-md-2 control-label" for="lg">Create new user:</label>\n              <div class="col-sm-5 col-md-5">\n                <input class="form-control" name="newUserEmailId" placeholder="Enter valid Email Id" (input)="newUserEmailIdEvent($event)" value="" type="email" id="newUserEmailId" size="5" maxlength="50" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$" required ngModel>\n              </div>\n              <button type="submit" (click)="register()" [disabled]="createNewUsr.invalid" data-toggle="modal" data-target="#manageSettingModal" id="rmCreationId" class="btn btn-primary btn-md"  id="registerButton"  style="background-color: red; border-color: white">Register</button>\n            </div>\n          </form>\n          </div>\n  </div>\n \n<div class="container">\n  <br>\n    <div class="well" style="background-color: #ffffff;padding: 10px;">\n        <form class="form-horizontal">\n            <div class="form-group form-group-md">\n              <label class="col-sm-3 col-md-2" style="color:#644f4f;" for="search">Search for User:</label>\n              <div class="col-sm-5 col-md-5">\n                <input class="form-control" [(ngModel)]="queryString" #search type="search" value="" size="5" maxlength="220" name="search" id="search">\n              </div>\n            </div>\n            \n          </form>\n          </div>\n  </div>\n</div>\n</div>\n<div class="folder" style=" margin: 24% 0 1% 0; background-color: #f5f5f5;">\n\n  <div class="contentmain1">\n      <div class="" style="background-color: #ffffff;">\n          <form class="form-horizontal">\n              <table class="table" style="color : black;">\n                  <tbody>\n                    <tr *ngFor="let data of data | searchFilter :search.value">\n                      <td>\n                          <div style="float:left;width:50%;color: brown;">{{data.rmId}}</div>\n                          <div  class="text-right">\n                              <button type="submit" (click)="resetPassword(data)" data-toggle="modal" data-target="#resetPasswordModal" class="btn btn-primary btn-md"  style="background-color: red; border-color: white">Reset Password</button>\n                              <button *ngIf="data.accountStatus==\'1\'" type="submit" (click)="deactivateRM(data)" data-toggle="modal" data-target="#deleteUserModal" class="btn btn-primary btn-md"   style="background-color: red; border-color: white; width: 12%;">Deactivate RM</button>\n                              <button *ngIf="data.accountStatus==\'0\'" type="submit" (click)="activateRM(data)" data-toggle="modal" data-target="#activateRMModal" class="btn btn-primary btn-md"   style="background-color: red; border-color: white;width: 12%;">Activate RM</button>\n                            </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              \n            </form>\n            </div>\n            <div id="loader4"></div>\n\n    </div>\n    </div>\n\n\x3c!--Manage Settings modal starts here--\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="manageSettingModal" tabindex="-1" role="dialog" aria-labelledby="mangeSetting" aria-hidden="true">\n    <div class="modal-dialog" role="document" style="width: 70%;" >\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title" id="mangeSetting">RM Id Creation</h5>\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n        </div>\n        <div class="modal-body">\n          <form #manageUser = "ngForm" >\n              <div class="row" style="margin-left: 93px;">\n                  <div class="col-xs-6">\n                      <label for="rmName" class="">Email Id</label>\n                      <input type="email" value="" name="MangeEmail" class="form-control" id="MangeEmail" placeholder="Your Email Id" readonly ngModel>\n                    </div>\n                    <div class="col-xs-6">\n                        <label for="rmName" class="">Designation</label>\n                        <input type="text" value="" name="{{designation}}" class="form-control" id="designation" placeholder="TRM" ngModel readonly>\n                      </div> \n                    </div>\n                    <div class="row" style="margin-left: 93px;">\n                        <div class="col-xs-6">\n                            <label for="rmName" class="">RM Name</label>\n                            <input type="text" name="rmName" class="form-control" #rmName="ngModel" id="rmName" value="" size="5" maxlength="50" required placeholder="Your RM Name"  ngModel>\n                          </div>\n                          <div class="col-xs-6">\n                              <label for="rmName" class="">UH Name</label>\n                              <input type="text" name="uhName" class="form-control" #uhName="ngModel" id="uhName" value="" size="5" maxlength="50" required placeholder="Your UH Name"  ngModel>\n\n                            </div> \n                          </div>\n                          <div class="row" style="margin-left: 93px;">\n                              <div class="col-xs-6">\n                                  <label for="rmName" class="">Nearby Location</label>\n                                  <br>\n                                  <select class="inpute_text03"  [(ngModel)]="dbsLocation" name="dbsLocation" style="width: 70%;background: #ffffff;">\n                                    <option value="" disabled>--Select--</option> \n                                      <option value="Bangalore">Bangalore</option>\n                                      <option value="Chennai">Chennai</option>\n                                      <option value="Kolkata">Kolkata</option>\n                                      <option value="Mumbai">Mumbai</option>\n                                      <option value="Nashik">Nashik</option>\n                                      <option value="New Delhi">Delhi</option>\n                                      <option value="Pune">Pune</option>\n                                      <option value="Salem">Salem</option>\n                                      <option value="Surat">Surat</option>\n                                      <option value="Moradabad">Moradabad</option>\n                                      <option value="Kolhapur">Kolhapur</option>\n                                      <option value="Cuddalore">Cuddalore</option>\n                                    </select>\n                                </div>\n                                <div class="col-xs-6">\n                                    <label for="rmName" class="">City Head</label>\n                                    <input type="text" name="cityHead" class="form-control" #cityHead="ngModel" id="cityHead" value="" size="5" maxlength="50" required placeholder="Your City Head"  ngModel>\n                                  </div>             \n                                </div>\n                                <div class="row" style="margin-left: 93px;">\n                                    <div class="col-xs-6">\n                                        <label for="rmName" class="">License code</label>\n                                        <input type="text"  name="licenseCode" class="form-control" #licenseCode="ngModel" id="licenseCode" value="" size="5"  required placeholder="Enter License Code"  ngModel>\n                                      </div>\n                                      <div class="col-xs-6">\n                                          <label for="rmName" class="">License Expiry Date</label>\n                                          <div [ngClass]="{\'has-error\':licenseExpDate.invalid && licenseExpDate.pristine ||licenseExpDate.touched}">\n                                              <input type="date" name="licenseExpDate" class="form-control" (input)="getToday()" #licenseExpDate="ngModel" id="licenseExpDate" value="" size="5"  required placeholder="Enter License Expiry Date"  ngModel>\n                                            </div>\n                                          <div id="errorCall2" style="color: red;font-size: 17px;">{{errMessage3}}</div>\n                                        </div>\n                                      </div>\n                                      <br>\n                                      <div class="row" style="margin-left: 93px;">\n\n                                        <div class="col-xs-6">\n                                          \x3c!-- <label for="rmName" class="">License code</label>\n                                          <input type="text"  name="licenseCode" class="form-control" #licenseCode="ngModel" id="licenseCode" value="" size="5"  required placeholder="Enter License Code"  ngModel> --\x3e\n                                          <label for="licenseType" class="">License Type</label>\n                                          <br>\n                                          <select class="inpute_text03" id="licenseType" [(ngModel)]="licenseType" name="licenseType" style="width: 70%;background: #ffffff;">\n                                            <option value="" disabled>Select</option>\n                                            <option value="Life">Life</option>\n                                              <option value="Composite">Composite</option>\n                                            </select>\n                                        </div>\n                                        <div class="col-xs-6">\n                                            <label for="rmName" class="">Mobile Number</label>\n                                            <input type="number" name="mobile" class="form-control" #mobile="ngModel" id="mobile" value="" size="5" maxlength="10" required placeholder="Your Mobile Number"  ngModel>\n                                            \x3c!-- <input type="text" name="cityHead" class="form-control" #cityHead="ngModel" id="cityHead" value="" size="5" maxlength="50" required placeholder="Your City Head"  ngModel> --\x3e\n                                          </div>\n\n                                          </div>\n                                      \n                                      <br>\n                                      <br> \n                                                                             \n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n          <button type="submit" (click)="rmCreation(manageUser)" [disabled]="!manageUser.form.valid || errMessage3" data-dismiss="modal" class="btn btn-primary">Submit</button>\n        </div>\n      </form>\n      </div>\n      </div>\n      </div>\n    </div>\n  \x3c!--Manage Settings modal ends here--\x3e\n  \x3c!-- Manage User error Message modal --\x3e\n<div *ngIf="rmError" data-backdrop="static" data-keyboard="false" class="modal fade" id="rmCreationError" tabindex="-1" role="dialog" aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-body">\n          <p>{{rmError}}</p>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n        </div>\n      </div>\n    </div>\n  </div>\n   \x3c!--  Manage User error ends here--\x3e\n  \n\n  \x3c!-- Reset password Message modal --\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="resetPasswordModal" tabindex="-1" role="dialog" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-body">\n        <p>Password has been successfully sent to the authorized Email ID.</p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n \x3c!-- Reset password Message ends here--\x3e\n\n   \x3c!-- Deactivate RM Message modal --\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-body">\n        <p style="text-align: center">RM has been Deactivated for the particular user.</p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n \x3c!-- Deactivate RM Message ends here--\x3e\n\n   \x3c!-- Activate RM Message modal --\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="activateRMModal" tabindex="-1" role="dialog" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-body">\n        <p style="text-align: center">RM has been Activated for the particular user.</p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n \x3c!-- Activate RM Message ends here--\x3e\n    \n\x3c!--footer starts--\x3e\n<div id="footermain">\n  <div class="footer_Pas1">{{firstName}} &nbsp; {{lastName}} &nbsp;\n    \n </div>\n  <div class="footer_R">All Rights Reserved &copy; NEARBY TECHNOLOGIES PVT. LTD</div>\n  \n  <div class="footer_Pas2"><a data-toggle="modal" data-target="#exampleModal"><b>Change Password</b></a>&nbsp; &nbsp; <span><a data-toggle="modal" data-target="#reportIssueModel"><b>Report Issue</b></a></span></div>\n</div>\n \x3c!-- Modal --\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLabel">CHANGE PASSWORD</h5>\n      <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n    <div class="modal-body">\n      <form  #changePwdForm = "ngForm">\n        <div class="form-group">\n          <label for="Old-Password" class="col-form-label" >Old Password:</label>\n          <input type="password" class="form-control" name="oldPwd" id="Old-Password" required>\n        </div>\n         <div ngModelGroup="password" #userPassword="ngModelGroup" required >\n        <div class="form-group">\n          <label for="New-Password" class="col-form-label" >New Password:</label>\n          <input type="password" class="form-control" name="newPwd" id="New-Password" ngModel required>\n        </div>\n        <div class="form-group">\n          <label for="cngm-Password" class="col-form-label">Confirm Password:</label>\n          <input type="password" class="form-control" name="confirmPwd" id="cngm-Password" ngModel required>\n        </div>\n         <div *ngIf="(userPassword.invalid|| userPassword.value?.newPwd != userPassword.value?.confirmPwd) && (userPassword.touched)" class="alert alert-danger dontmatch">\n               <div *ngIf = "userPassword.invalid; else nomatch">\n                New Password and Confirm Password should match\n                              </div>\n                  <ng-template #nomatch >\n                    New Password and Confirm Password should match\n                  </ng-template>\n              </div>\n       </div> \n      \n   \n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      <button type="button" (click) ="changePass()" [disabled]="!changePwdForm.form.valid" class="btn btn-primary">Change Password</button>\n    </div>\n    </form>\n     </div>\n  </div>\n</div>\n</div>\n\n\n\x3c!-- Success or failure modal --\x3e\n<div id="resultModal" class="modal" tabindex="-1" role="dialog">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-body">\n      <p id="messageTouser"></p>\n    </div>\n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>\n    </div>\n  </div>\n</div>\n</div>\n\x3c!-- ends here--\x3e\n      \x3c!--Report Issue modal starts here--\x3e\n<div data-backdrop="static" data-keyboard="false" class="modal fade" id="reportIssueModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel11" aria-hidden="true">\n<div class="modal-dialog" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title" id="exampleModalLabel11">Report An Issue</h5>\n      <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n    <div class="modal-body">\n      <form  #reportAnIssue = "ngForm" >\n        <div class="form-group">\n          <label for="cngm-Password" class="col-form-label" style="margin-left: 63px;">Description of the issue:</label>\n          <textarea rows="3" cols="60" type="text" value="" name="issue" id="issueReport" ngModel required style="margin: 0 0 0 -61px;"></textarea>\n        </div>\n      \n   \n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      <button type="button" (click) ="reportIssue(reportAnIssue)" data-dismiss="modal" [disabled]="!reportAnIssue.form.valid" class="btn btn-primary">Report</button>\n    </div>\n    </form>\n     </div>\n  </div>\n</div>\n</div>\n\x3c!--Report Issue modal ends here--\x3e\n</div>\n\x3c!--footer ends--\x3e\n\n\n\n\n  \n  \n  \n\n  '},q30D:function(e,n){e.exports='html {\n  background-color: #f5f5f5 !important;\n}\n.has-error .form-control{\n  border-color: #ccc !important;\n}\n#activityModl{\n    width: 208% ;\n    margin-left: -320px ;\n  }\n.col-centered{\n    width: 50% !important;\n    float: none;\n    margin: 0 auto;\n  }\n.select_menu\n  {\n    background-color: #f5f5f5;\n    margin: 0 0 0 0 !important;\n  }\ntr:nth-child(even) {\n    background-color: #f2f2f2\n  }\n.justify-content-center {\n    display: flex !important;\n    justify-content: center !important;\n  }\nul {\n    left: 824px !important;\n    \n  }\n.wrapper input\n  {\n    width: 15%;\n    background-color: transparent;\n    border: 1px solid;\n    font-size: 13px;\n    font-family: Arial;\n    float: left;\n  }\n.wrapper input:last-child{\n    float: right;\n  }\n.policybox{\n    width: 14%;\n    margin: 0 460px 0 0;\n  }\n.my-pagination /deep/  pagination-template .ngx-pagination{\n      position: inherit;\n      display: table;\n      margin-left: 135px;\n      margin-bottom: 1rem;\n      margin-top: 36px;\n    }\n.my-pagination /deep/  pagination-template .ngx-pagination .current{\n      padding: 1.5rem 4.625rem;\n          background: #cc0000;\n      color: #fefefe;\n      cursor: default;\n      pointer-events: none;\n      border-radius: 20px;\n    }\n.my-pagination /deep/ pagination-template .ngx-pagination a:hover, .ngx-pagination button:hover {\n      background: #e6e6e6;\n      border-radius: 20px;\n      \n  \n    /*padding: 13px 17px 14px 17px;*/\n    }\n.my-pagination /deep/ pagination-template .ngx-pagination a, .ngx-pagination button\n    {\n      position: inherit;\n      padding: 13px 0 0 0;\n    }\n.folder1{\n    width: 100% !important;\n  \n  }\n.contentmain1{\n    width: 85% !important;\n    margin: -80px 0 0 101px;\n    border-radius: 5px\n    }\ndiv.contentmain1.faded{\n    opacity: 0.4;\n    pointer-events: none;\n    cursor: default;\n  }\n@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait ) { \n     .folder1{\n      border: 10px solid #f5f5f5;\n    }\n    .text-right\n    {\n      margin: 0 0 0 -250px !important;\n\n    }\n    .contentmain1{\n      width: 100% !important;\n      margin: 0 0 0 10px !important;\n    }\n    .folder{\n      margin: 41% 0 1% 0 !important;\n    }\n      .row\n     {\n       margin-left: 50px !important;\n     }\n  \n      #activityModl{\n        width: 120% !important;\n        margin-left: -61px !important;\n      }\n      #loader1 {\n        top:50% !important;\n      }\n      \n      ul {\n        left: 341px !important;\n        \n      }\n      \n      .policybox{\n        margin: 0 800px 0 0 !important;\n      }\n      #sucessStatus1{\n        margin-left: 189px !important;\n      }\n      .name_box{\n        margin: -2px 0 0 0 !important;\n  \n      }\n  \n      .my-pagination /deep/  pagination-template .ngx-pagination{\n        position: inherit;\n        display: -webkit-inline-box;\n        margin-left: 60px;\n        margin-bottom: 1rem;\n        margin-top: 36px;\n      }\n    \n      .my-pagination /deep/  pagination-template .ngx-pagination .current{\n        padding: 1.1875rem 2.625rem;\n        background: #cc0000;\n        color: #fefefe;\n        cursor: default;\n        pointer-events: none;\n      }\n    \n      .my-pagination /deep/  pagination-template .ngx-pagination li a {\n        display:block;\n         min-width:60px;\n         height: 50px;\n         text-align: center;\n         line-height: 24px;\n        font-size:14px;\n         font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n         color: #333;\n        /*background: #2f3036;\n        */\n         text-decoration: none;\n    }\n    #menu1{\n      margin-left: 0px !important;\n    }\n    .scroll_box2{\n      width: 20% !important;\n      margin: 0 0 0 0% !important;\n    }\n    .scroll_save{\n      width: 70% !important;\n      margin: 0 0 0 -36px !important;\n    }\n    .scroll_box4{\n      width: 15%;\n      /* float: left; */\n      margin: 0 0 0 -2%;\n      text-align: center;\n    }\n    .scroll_box1{\n      width: 8%;\n      /* float: left; */\n      margin: 0 0 0 3%;\n      /* text-align: center; */\n    }\n    .scroll_box3{\n      width: 20%;\n      float: left;\n      margin: 0 0 0 1%;\n      text-align: center;\n    }\n    .scroll_title{\n      margin-left: -196px !important;\n    }\n    #sucessStatus{\n      margin-left: -340px !important;\n    }\n    #errorCall1{\n      margin: 0 0px 0 -193px !important;\n    }\n    div.zerogrid button.close {\n      color: white;\n      padding-right: 6%;\n      margin: 0 0 0 690px;\n      float: left\n  }\n  div.contentmain1.faded{\n    opacity: 0.4;\n    pointer-events: none;\n    cursor: default;}\n    }\n@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape ) {\n      #activityModl{\n        width: 163% !important;\n        margin: 0px 0 0 -190px !important;\n      }\n      .contentmain1{\n        width: 92% !important;\n        margin: 0 0 0 42px !important;\n      }\n      #loader1 {\n        top:50% !important;\n      } \n      \n      ul {\n        left: 438px !important;\n        \n      }\n      \n      .folder1{\n        padding: 11% 0 0% 0 !important;\n      } \n      .name_box{\n        margin: -3px 0 0 0 !important;\n  \n      }\n      div.contentmain1.faded{\n        opacity: 0.4;\n        pointer-events: none;\n        cursor: default;\n      }\n    }\n@media only screen and (max-width: 768px){\n      .folder {\n    border: 10px solid #f5f5f5 !important;\n    \n}\n}\n'}}]);