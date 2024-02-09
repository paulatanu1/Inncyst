"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[339],{6339:(I,_,a)=>{a.r(_),a.d(_,{ContactUsModule:()=>L});var p=a(6895),M=a(1483),i=a(4006),n=a(4650),d=a(2440);let f=(()=>{class t{constructor(o){this.api=o}submitContactForm(o){const r={firstName:"",lastName:"",email:"",phone:"",message:""};return r.firstName=o.firstName,r.lastName=o.lastName,r.email=o.email,r.message=o.message,r.phone=o.phone,this.api.ApiCallWithLocalization(r,"/contact/contact-us","post")}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(d.s))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=a(3538),P=a(2071),h=a(8070);function U(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," First Name is required. "),n.qZA())}function Z(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," First Name is required. "),n.qZA())}function v(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," First Name is required. "),n.qZA())}function x(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," Please enter a valid numeric phone number. "),n.qZA())}function b(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," Phone Number is required. "),n.qZA())}function w(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," Phone Number must not exceed 10 digits. "),n.qZA())}function F(t,c){1&t&&(n.TgZ(0,"div",36),n._uU(1," Message is required. "),n.qZA())}function T(t){const c=t.value;return c&&c.length>10?{phoneNumberLength:!0}:null}const q=[{path:"",component:(()=>{class t{constructor(o,e,r){this.fb=o,this.submitData=e,this._toast=r,this.contactUsForm=this.fb.group({firstName:["",i.kI.required],lastName:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],phone:["",[i.kI.required,T,i.kI.pattern("^[0-9]*$")]],message:[""]})}ngOnInit(){}onSubmitContactForm(){this.contactUsForm.valid?this.submitData.submitContactForm(this.contactUsForm.value).subscribe({next:o=>{this._toast.showToaster.next({severity:"success",summary:"success",detail:o.message}),this.contactUsForm.reset()},error:o=>{this._toast.showToaster.next({severity:"error",summary:"error",detail:o.error.message})}}):this._toast.showToaster.next({severity:"warn",summary:"Warn",detail:"Please Fillup Details"})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(i.qu),n.Y36(f),n.Y36(O.L))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-contact-us"]],decls:79,vars:8,consts:[[1,"container"],[1,"heading-section"],[1,"content-section"],[1,"contact-info-section"],[1,"info-inner-section"],[1,"info-header-section"],[1,"info-mid-section"],["href",""],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"bxs-phone-call"],["d","M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z","fill","white"],["d","M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18\n                  7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422\n                  13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582\n                  13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062\n                  15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898\n                  11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061\n                  8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554\n                  7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113\n                  3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798\n                  5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298\n                  6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21\n                  17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085\n                  20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414\n                  18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785\n                  17.3141 20.486 17.139L16.422 13.443Z","fill","white"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"ic-sharp-email"],["d","M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z","fill","white"],["_ngcontent-xfp-c121","","width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"carbon-location-filled"],["_ngcontent-xfp-c121","","d","M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z","fill","white"],[1,"footer-section"],["_ngcontent-jwr-c121","","width","30","height","30","viewBox","0 0 30 30","fill","none","xmlns","http://www.w3.org/2000/svg",1,"group-1000001749"],["_ngcontent-jwr-c121","","cx","15","cy","15","r","15","fill","#ffffff"],["_ngcontent-jwr-c121","","d","M23 10.4255C22.4484 10.6598 21.8481 10.8284 21.2298 10.8941C21.8717 10.5185 22.3525 9.92521 22.5818 9.22545C21.9794 9.57833 21.3195 9.82578 20.6313 9.95681C20.3437 9.65402 19.9958 9.4128 19.6094 9.24819C19.2229 9.08357 18.8062 8.99909 18.3852 9.00001C16.6816 9.00001 15.3116 10.3598 15.3116 12.0284C15.3116 12.2627 15.3405 12.497 15.3873 12.7225C12.8366 12.5911 10.5616 11.3911 9.04915 9.55385C8.77357 10.0174 8.62916 10.5451 8.63093 11.0823C8.63093 12.1331 9.17354 13.0598 10.001 13.6047C9.51335 13.5858 9.03715 13.4538 8.6111 13.2195V13.2568C8.6111 14.7284 9.66747 15.9479 11.0754 16.2284C10.811 16.296 10.5391 16.3306 10.266 16.3314C10.0659 16.3314 9.87658 16.3118 9.68549 16.2852C10.0749 17.4852 11.2087 18.3568 12.5589 18.3852C11.5026 19.2 10.1794 19.6793 8.7427 19.6793C8.48492 19.6793 8.24697 19.6704 8 19.642C9.36282 20.503 10.9798 21 12.7212 21C18.3744 21 21.4677 16.3882 21.4677 12.3852C21.4677 12.2539 21.4677 12.1225 21.4587 11.9911C22.0572 11.5598 22.5818 11.0254 23 10.4255Z","fill","#0aa3c6"],["_ngcontent-jwr-c121","","width","30","height","30","viewBox","0 0 30 30","fill","none","xmlns","http://www.w3.org/2000/svg",1,"group-1000001750"],["_ngcontent-jwr-c121","","cx","15","cy","15","r","15","fill","white"],["_ngcontent-jwr-c121","","fill-rule","evenodd","clip-rule","evenodd","d","M12.408 7.045C13.2077 7.00818 13.4627 7 15.5 7C17.5373 7 17.7923 7.00886 18.5914 7.045C19.3905 7.08114 19.9359 7.20864 20.4132 7.39341C20.913 7.58227 21.3664 7.8775 21.7414 8.25932C22.1232 8.63364 22.4177 9.08636 22.6059 9.58682C22.7914 10.0641 22.9182 10.6095 22.955 11.4073C22.9918 12.2084 23 12.4634 23 14.5C23 16.5373 22.9911 16.7923 22.955 17.592C22.9189 18.3898 22.7914 18.9352 22.6059 19.4125C22.4177 19.913 22.1227 20.3665 21.7414 20.7414C21.3664 21.1232 20.913 21.4177 20.4132 21.6059C19.9359 21.7914 19.3905 21.9182 18.5927 21.955C17.7923 21.9918 17.5373 22 15.5 22C13.4627 22 13.2077 21.9911 12.408 21.955C11.6102 21.9189 11.0648 21.7914 10.5875 21.6059C10.087 21.4177 9.63351 21.1227 9.25864 20.7414C8.87708 20.3668 8.58181 19.9136 8.39341 19.4132C8.20864 18.9359 8.08182 18.3905 8.045 17.5927C8.00818 16.7916 8 16.5366 8 14.5C8 12.4627 8.00886 12.2077 8.045 11.4086C8.08114 10.6095 8.20864 10.0641 8.39341 9.58682C8.58208 9.08642 8.87758 8.63317 9.25932 8.25864C9.63366 7.87716 10.0867 7.58189 10.5868 7.39341C11.0641 7.20864 11.6095 7.08182 12.4073 7.045H12.408ZM18.5307 8.395C17.7398 8.35886 17.5025 8.35136 15.5 8.35136C13.4975 8.35136 13.2602 8.35886 12.4693 8.395C11.7377 8.42841 11.3409 8.55045 11.0764 8.65341C10.7266 8.78977 10.4764 8.95136 10.2139 9.21386C9.96503 9.45594 9.77353 9.75065 9.65341 10.0764C9.55045 10.3409 9.42841 10.7377 9.395 11.4693C9.35886 12.2602 9.35136 12.4975 9.35136 14.5C9.35136 16.5025 9.35886 16.7398 9.395 17.5307C9.42841 18.2623 9.55045 18.6591 9.65341 18.9236C9.77341 19.2489 9.965 19.5441 10.2139 19.7861C10.4559 20.035 10.7511 20.2266 11.0764 20.3466C11.3409 20.4495 11.7377 20.5716 12.4693 20.605C13.2602 20.6411 13.4968 20.6486 15.5 20.6486C17.5032 20.6486 17.7398 20.6411 18.5307 20.605C19.2623 20.5716 19.6591 20.4495 19.9236 20.3466C20.2734 20.2102 20.5236 20.0486 20.7861 19.7861C21.035 19.5441 21.2266 19.2489 21.3466 18.9236C21.4495 18.6591 21.5716 18.2623 21.605 17.5307C21.6411 16.7398 21.6486 16.5025 21.6486 14.5C21.6486 12.4975 21.6411 12.2602 21.605 11.4693C21.5716 10.7377 21.4495 10.3409 21.3466 10.0764C21.2102 9.72659 21.0486 9.47636 20.7861 9.21386C20.544 8.96505 20.2493 8.77355 19.9236 8.65341C19.6591 8.55045 19.2623 8.42841 18.5307 8.395ZM14.542 16.812C15.077 17.0347 15.6728 17.0648 16.2275 16.8971C16.7821 16.7294 17.2614 16.3743 17.5834 15.8924C17.9053 15.4106 18.05 14.832 17.9928 14.2553C17.9355 13.6786 17.6798 13.1398 17.2693 12.7307C17.0077 12.4692 16.6913 12.269 16.343 12.1444C15.9946 12.0199 15.623 11.9741 15.2549 12.0104C14.8867 12.0467 14.5312 12.1642 14.214 12.3544C13.8967 12.5446 13.6255 12.8028 13.42 13.1104C13.2145 13.4179 13.0797 13.7672 13.0254 14.1332C12.971 14.4991 12.9985 14.8725 13.1058 15.2265C13.2131 15.5805 13.3976 15.9063 13.6459 16.1805C13.8943 16.4547 14.2003 16.6704 14.542 16.812ZM12.7741 11.7741C13.1321 11.4161 13.557 11.1322 14.0247 10.9384C14.4925 10.7447 14.9938 10.645 15.5 10.645C16.0062 10.645 16.5075 10.7447 16.9753 10.9384C17.443 11.1322 17.8679 11.4161 18.2259 11.7741C18.5839 12.1321 18.8678 12.557 19.0616 13.0247C19.2553 13.4925 19.355 13.9938 19.355 14.5C19.355 15.0062 19.2553 15.5075 19.0616 15.9753C18.8678 16.443 18.5839 16.8679 18.2259 17.2259C17.503 17.9489 16.5224 18.355 15.5 18.355C14.4776 18.355 13.497 17.9489 12.7741 17.2259C12.0511 16.503 11.645 15.5224 11.645 14.5C11.645 13.4776 12.0511 12.497 12.7741 11.7741ZM20.21 11.2191C20.2987 11.1354 20.3697 11.0348 20.4188 10.9232C20.468 10.8115 20.4942 10.6912 20.496 10.5693C20.4977 10.4473 20.475 10.3263 20.4292 10.2133C20.3833 10.1003 20.3153 9.99762 20.2291 9.91139C20.1428 9.82516 20.0402 9.75711 19.9272 9.71126C19.8142 9.66542 19.6931 9.64271 19.5712 9.64449C19.4492 9.64627 19.3289 9.67249 19.2173 9.72161C19.1057 9.77073 19.005 9.84175 18.9214 9.93045C18.7586 10.103 18.6695 10.3321 18.673 10.5693C18.6764 10.8064 18.7722 11.0329 18.9399 11.2006C19.1076 11.3683 19.334 11.464 19.5712 11.4675C19.8083 11.4709 20.0375 11.3818 20.21 11.2191Z","fill","red"],[1,"form-section"],[3,"formGroup","ngSubmit"],[1,"input-area-sm"],["placeholder","Enter Your First Name","type","text","formControlName","firstName"],["class","error-message",4,"ngIf"],["placeholder","Enter Your Last Name","type","text","formControlName","lastName"],["placeholder","Enter Your Email","type","text","formControlName","email"],["placeholder","Enter Your Mobile No.","type","text","formControlName","phone"],[1,"input-area-lg"],["formControlName","message","placeholder","Enter Your Message"],[1,"submit-area"],["type","submit","placeholder","Submit"],[1,"bg-img"],["src","../../assets/letter_send 1.png","alt","Latter Send Bg"],[1,"error-message"]],template:function(o,e){if(1&o&&(n._UZ(0,"app-header"),n.TgZ(1,"div",0)(2,"div",1)(3,"h1"),n._uU(4,"Contact Us"),n.qZA(),n.TgZ(5,"article"),n._uU(6,"Any question or remarks? Just write us a message!"),n.qZA()(),n.TgZ(7,"div",2)(8,"div",3)(9,"div",4)(10,"div",5)(11,"h4"),n._uU(12,"Contact Information"),n.qZA(),n.TgZ(13,"p"),n._uU(14,"Say something to start a live chat!"),n.qZA()(),n.TgZ(15,"div",6)(16,"ul")(17,"li")(18,"a",7),n.O4$(),n.TgZ(19,"svg",8),n._UZ(20,"path",9)(21,"path",10),n.qZA(),n._uU(22," +1012 3456 789 "),n.qZA()(),n.kcU(),n.TgZ(23,"li")(24,"a",7),n.O4$(),n.TgZ(25,"svg",11),n._UZ(26,"path",12),n.qZA(),n._uU(27," demo@gmail.com "),n.qZA()(),n.kcU(),n.TgZ(28,"li")(29,"a",7),n.O4$(),n.TgZ(30,"svg",13),n._UZ(31,"path",14),n.qZA(),n._uU(32," 132 Dartmouth Street Boston, Massachusetts 02156 United States "),n.qZA()()()(),n.kcU(),n.TgZ(33,"div",15)(34,"ul")(35,"li")(36,"a",7),n.O4$(),n.TgZ(37,"svg",16),n._UZ(38,"circle",17)(39,"path",18),n.qZA()()(),n.kcU(),n.TgZ(40,"li")(41,"a",7),n.O4$(),n.TgZ(42,"svg",19),n._UZ(43,"circle",20)(44,"path",21),n.qZA()()()()()()(),n.kcU(),n.TgZ(45,"div",22)(46,"form",23),n.NdJ("ngSubmit",function(){return e.onSubmitContactForm()}),n.TgZ(47,"div",24)(48,"label"),n._uU(49,"First Name"),n.qZA(),n._UZ(50,"input",25),n.YNc(51,U,2,0,"div",26),n.qZA(),n.TgZ(52,"div",24)(53,"label"),n._uU(54,"Last Name"),n.qZA(),n._UZ(55,"input",27),n.YNc(56,Z,2,0,"div",26),n.qZA(),n.TgZ(57,"div",24)(58,"label"),n._uU(59,"Email"),n.qZA(),n._UZ(60,"input",28),n.YNc(61,v,2,0,"div",26),n.qZA(),n.TgZ(62,"div",24)(63,"label"),n._uU(64,"Phone Number"),n.qZA(),n._UZ(65,"input",29),n.YNc(66,x,2,0,"div",26),n.YNc(67,b,2,0,"div",26),n.YNc(68,w,2,0,"div",26),n.qZA(),n.TgZ(69,"div",30)(70,"label"),n._uU(71,"Message"),n.qZA(),n._UZ(72,"textarea",31),n.YNc(73,F,2,0,"div",26),n.qZA(),n.TgZ(74,"div",32),n._UZ(75,"input",33),n.qZA()(),n.TgZ(76,"div",34),n._UZ(77,"img",35),n.qZA()()()(),n._UZ(78,"app-footer")),2&o){let r,g,l,m,s,C,u;n.xp6(46),n.Q6J("formGroup",e.contactUsForm),n.xp6(5),n.Q6J("ngIf",(null==e.contactUsForm||null==(r=e.contactUsForm.get("firstName"))?null:r.hasError("required"))&&(null==e.contactUsForm||null==(r=e.contactUsForm.get("firstName"))?null:r.touched)),n.xp6(5),n.Q6J("ngIf",(null==e.contactUsForm||null==(g=e.contactUsForm.get("lastName"))?null:g.hasError("required"))&&(null==e.contactUsForm||null==(g=e.contactUsForm.get("lastName"))?null:g.touched)),n.xp6(5),n.Q6J("ngIf",(null==e.contactUsForm||null==(l=e.contactUsForm.get("email"))?null:l.hasError("required"))&&(null==e.contactUsForm||null==(l=e.contactUsForm.get("email"))?null:l.touched)),n.xp6(5),n.Q6J("ngIf",(null==(m=e.contactUsForm.get("phone"))?null:m.hasError("pattern"))&&(null==(m=e.contactUsForm.get("phone"))?null:m.touched)),n.xp6(1),n.Q6J("ngIf",(null==(s=e.contactUsForm.get("phone"))?null:s.hasError("required"))&&!(null!=(s=e.contactUsForm.get("phone"))&&s.hasError("pattern"))&&(null==(s=e.contactUsForm.get("phone"))?null:s.touched)),n.xp6(1),n.Q6J("ngIf",(null==(C=e.contactUsForm.get("phone"))?null:C.hasError("phoneLength"))&&!(null!=(C=e.contactUsForm.get("phone"))&&C.hasError("pattern"))&&(null==(C=e.contactUsForm.get("phone"))?null:C.touched)),n.xp6(5),n.Q6J("ngIf",(null==(u=e.contactUsForm.get("message"))?null:u.hasError("required"))&&(null==(u=e.contactUsForm.get("message"))?null:u.touched))}},dependencies:[p.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,P.G,h.c],styles:[".container[_ngcontent-%COMP%]{width:1196px;height:500px;margin-top:100px}.container[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#563186}.container[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{margin-bottom:25px;color:#4a4190}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]{background-color:#edeaea5c;box-shadow:6px 5px 9px 5px #edeaeafa;display:grid;border-radius:10px;padding:10px;grid-template-columns:.8fr 1fr;grid-column-gap:10px;border:2px solid rgba(241,241,241,.8196078431)}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]{background-color:#0aa3c6;border-top-left-radius:10px;border-bottom-left-radius:10px;padding:8px 15px}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .info-header-section[_ngcontent-%COMP%]{color:#fff}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .info-mid-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:90px}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .info-mid-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 0}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .info-mid-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:1.1rem}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .info-mid-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;width:80%;display:flex}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin-top:2rem;padding:0;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 1rem}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .info-inner-section[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{padding:20px 0;width:100%;position:relative}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:15px}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]{padding-bottom:20px}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-right:10px;color:#787878}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-sm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-sm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;border-bottom:1px solid gray;background-color:transparent;width:100%;resize:none}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-sm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-sm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-area-lg[_ngcontent-%COMP%]{grid-column:span 2}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-area[_ngcontent-%COMP%]{grid-column:span 2;text-align:right}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#0aa3c6;color:#fff;text-transform:uppercase;border:none;padding:10px 25px;margin-top:50px;border-radius:6px}.container[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{position:absolute;bottom:-50px;left:0}.error-message[_ngcontent-%COMP%]{color:red;font-size:12px;margin-top:5px}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[M.Bz.forChild(q),M.Bz]}),t})();var y=a(8180);let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.ez,A,i.u5,i.UX,y.SharedModule]}),t})()}}]);