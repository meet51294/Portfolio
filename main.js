(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n\tbackground: #192f54 ;\r\n  \tbackground-size:cover; \r\n  \tpadding: 0 !important;\r\n \r\n}\r\n.modal-dialog {\r\n    width: 60%; \r\n  \tmargin:4em auto;\r\n}\r\n.modal-content {\r\n    background: url('model-bg.png') #000 repeat;\r\n}\r\n.modal-body.modal-spa {\r\n    padding: 0  1em 3em;\r\n}\r\n.modal-header {\r\n    border: none;\r\n    margin-bottom: 1em;\r\n  \tpadding: 2em;\r\n}\r\nbutton.close {\r\n    color: #fff;\r\n    opacity: 1;\r\n    font-size: 3em;\r\n    padding: 0;\r\n    margin: 0 0;\r\n    outline: none;\r\n    font-weight: 100;\r\n    float: none;\r\n    position: absolute;\r\n    right: 7%;\r\n}\r\n.close:hover, .close:focus {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    filter: alpha(opacity=50);\r\n    opacity: 1;\r\n}\r\nh4.modal-title {\r\n    font-size: 2.5em;\r\n    color: #fff;\r\n  text-align:center;\r\n  letter-spacing: 5px;\r\n}\r\n/*-- //modal-basic --*/\r\n/*-- about --*/\r\n.about h3 {\r\n    font-size: 2.5em;\r\n    color: #fff;\r\n    letter-spacing: 5px;\r\n}\r\n.about h3 span {\r\n    color: #f3286c;\r\n    letter-spacing: 5px;\r\n}\r\n.about h4 {\r\n    font-size: 1.2em;\r\n    color: #a5a5a5;\r\n    margin-top: 1em;\r\n    letter-spacing: 5px;\r\n}\r\n.about-left img {\r\n    border: 5px solid #1dadd3;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n}\r\nul.address {\r\n    margin-top: 1.5em;\r\n    border-top: 1px dashed #1d7288;\r\n    padding-top: 0.5em;\r\n}\r\nul.address li {\r\n    display: block;\r\n}\r\nul.address li ul.agileits-address-text li {\r\n    display: inline-block;\r\n    font-size: 1.2em;\r\n    color: #fff;\r\n    margin-top: 1em;\r\n  font-weight: 100;\r\n  letter-spacing: 1px;\r\n}\r\nul.address li ul.agileits-address-text li:nth-child(1){\r\n  width: 20%;\r\n}\r\nul.address li ul.agileits-address-text li a {\r\n    color: #fff;\r\n  text-decoration:none;\r\n}\r\nul.address li ul.agileits-address-text li a:hover{\r\n    color: #0FF;\r\n}\r\n.about-text {\r\n    padding: 3em 3em  0;\r\n}\r\np.agile-br {\r\n    margin-top: 1em;\r\n}\r\np {\r\n    font-size: 1em;\r\n    color: #fff;\r\n    line-height: 2em;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n}\r\n.my-btn{\r\n    background: transparent;\r\n    color: white;\r\n    margin: 5px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    border: 2px solid;\r\n    letter-spacing: 3px;\r\n}\r\n.my-btn:hover {\r\n    color: #fff;\r\n    background: #f1c11a;\r\n    border-color: transparent;\r\n    cursor: pointer;\r\n    transition: all 0.4s ease-in-out;\r\n    background-color: #000;\r\n}\r\na{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Model About-->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [routerLink]=\"['/home']\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">ABOUT ME</h4>\n            </div>\n\n            <div class=\"modal-body modal-spa\">\n                <div class=\"about\">\n                    <div class=\"col-md-4 about-left \">\n                        <img src=\"./../../assets/images/my-img.jpg\" class=\"img-responsive\" alt=\"\" />\n                    </div>\n                    <div class=\"col-md-8 about-right wthree\">\n                        <h3>Hi, i'm <span>Mohit M. Nagpure </span></h3>\n                        <h4>Web Designer & Developer </h4>\n                        <ul class=\"address\">\n                            <li>\n                                <ul class=\"agileits-address-text\">\n                                    <li><b>PHONE </b></li>\n                                    <li>+91 8275398156</li>\n                                </ul>\n                            </li>\n\n                            <li>\n                                <ul class=\"agileits-address-text\">\n                                    <li><b>E-MAIL </b></li>\n                                    <li><a href=\"mailto:example@mail.com\">mohitnagpure4@gmail.com</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"clearfix\"> </div>\n                    <div class=\"about-text agileits-w3layouts\">\n                        <p>I am a Web designer and MEAN stack Developer. I am passionate about Frontend development\n                            as well as backend development.<br><br>\n                            I am a hard working individual with a great attention to detail. I enjoy new and\n                            challenging projects that push me to learn more in the great field of web development.\n                            <br><br>\n                            I enjoy constantly seeking new ways to create websites and web application with my\n                            ingredients like HTML, CSS, Javascript, AngularJS, Nodejs, ExpressJS, MongoDB.\n                        </p>\n\n                        <button type=\"button\" class=\"btn btn-default my-btn\">\n                            <a href=\"./../../assets/Mohit cv.pdf\" target=\"_blank\"> RESUME</a>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <!--End model content-->\n    </div>\n</div>\n<!--end-model-about-->"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-work/my-work.component */ "./src/app/my-work/my-work.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_9__["MyWorkComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
                    { path: 'education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"] },
                    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"] },
                    { path: 'my-work', component: _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_9__["MyWorkComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] }
                ]),
                angular_particle__WEBPACK_IMPORTED_MODULE_3__["ParticlesModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n    background: #192f54 ;\r\n    background-size:cover; \r\n    padding: 0 !important;\r\n   \r\n  }\r\n  .modal-dialog {\r\n    width: 60%; \r\n    margin:4em auto;\r\n  }\r\n  .modal-content {\r\n      background: url('model-bg.png') #000 repeat;\r\n  }\r\n  .modal-body.modal-spa {\r\n      padding: 0  1em 3em;\r\n  }\r\n  .modal-header {\r\n     border: none;\r\n     margin-bottom: 1em;\r\n     padding: 2em;\r\n  }\r\n  button.close {\r\n      color: #fff;\r\n      opacity: 1;\r\n      font-size: 3em;\r\n      padding: 0;\r\n      margin: 0 0;\r\n      outline: none;\r\n      font-weight: 100;\r\n      float: none;\r\n      position: absolute;\r\n      right: 7%;\r\n  }\r\n  .close:hover, .close:focus {\r\n      color: #fff;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      filter: alpha(opacity=50);\r\n      opacity: 1;\r\n  }\r\n  h4.modal-title {\r\n      font-size: 2.5em;\r\n      color: #fff;\r\n      text-align:center;\r\n  }\r\n  /*-- //modal-basic --*/\r\n  /*-- contact --*/\r\n  .contact-left {\r\n    text-align:center;\r\n}\r\n  .styled-input.agile-styled-input-top {\r\n      margin-top: 0;\r\n  }\r\n  .contact input[type=\"text\"],.contact textarea{\r\n      font-size: 1em;\r\n      color: #fff;\r\n      padding: 0.5em 1em;\r\n      border: 0;\r\n      width: 100%;\r\n      border-bottom: 1px solid #fff;\r\n      background: none;\r\n      outline: none;\r\n  }\r\n  .contact textarea { \r\n      min-height: 10em; \r\n  }\r\n  /*-- input-effect --*/\r\n  .styled-input {\r\n    width:100%;\r\n    margin: 2em 0 1em;\r\n    position: relative;\r\n  }\r\n  .styled-input label {\r\n      color: #1dadd3;\r\n      padding: 0.5em .9em;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      transition: all 0.3s;\r\n      pointer-events: none;\r\n      font-weight: 400;\r\n      font-size: 1em;\r\n      display: block;\r\n      line-height: 1em;\r\n  }\r\n  .styled-input input ~ span,.styled-input textarea ~ span {\r\n    display: block;\r\n    width: 0;\r\n    height:2px;\r\n    background:#ec407a;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    transition: all 0.125s; \r\n  }\r\n  .styled-input textarea ~ span { \r\n      bottom: 5px; \r\n  }\r\n  .styled-input input:focus ~ label, .styled-input input:valid ~ label,.styled-input textarea:focus ~ label ,.styled-input textarea:valid ~ label{\r\n      font-size: 1.1em;\r\n      color: #ec407a;\r\n      top: -1.3em;\r\n      transition: all 0.125s;\r\n  }\r\n  .styled-input input:focus.styled-input textarea:focus { \r\n    outline: 0; \r\n  }\r\n  .styled-input input:focus ~ span,.styled-input textarea:focus ~ span {\r\n    width: 100%;\r\n    transition: all 0.075s; \r\n  }\r\n  /*-- //input-effect --*/\r\n  .contact input[type=\"submit\"] { \r\n      outline: none;\r\n      color: #fff;\r\n      padding: .8em 4em;\r\n      font-size: 1em;\r\n      margin: 1em 0 0 0;\r\n      background: #ec407a;\r\n      border: solid 1px #ec407a; \r\n    border-radius: 3px; \r\n    transition: 0.5s all;\r\n  }\r\n  .contact input[type=\"submit\"]:hover { \r\n    background-color:#1dadd3;\r\n    border-color:#1dadd3;\r\n  }\r\n  h3 {\r\n      font-size: 2.5em;\r\n      color: #fff;\r\n      letter-spacing: 2px;\r\n      margin-bottom: 20px;\r\n  }\r\n  p{\r\n    margin-bottom: 20px;\r\n    color:white;\r\n    font-size: 1em;\r\n    letter-spacing: 2px \r\n  }\r\n  /*-- //contact --*/ "

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal-contact -->\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [routerLink]=\"['/home']\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Get In Touch</h4>\n      </div>\n      <div class=\"modal-body modal-spa\">\n        <div class=\"contact\">\n          <div class=\"contact-w3lsrow\">\n            <div class=\" contact-left\">\n              <h3>Mohit M. Nagpure</h3>\n              <p>Phone: +91 8275398156</p>\n              <p>Email me: mohitnagpure4@gmail.com</p>\n              <p>Address:  Pune</p>\n            </div>\n            \n            <div class=\"clearfix\"> </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<!-- end-modal-contact -->"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n    background: #192f54 ;\r\n    background-size:cover; \r\n    padding: 0 !important;\r\n   \r\n  }\r\n  .modal-dialog {\r\n    width: 60%; \r\n    margin:4em auto;\r\n  }\r\n  .modal-content {\r\n      background: url('model-bg.png') #000 repeat;\r\n  }\r\n  .modal-body.modal-spa {\r\n      padding: 0  1em 3em;\r\n  }\r\n  .modal-header {\r\n     border: none;\r\n     margin-bottom: 1em;\r\n     padding: 2em;\r\n  }\r\n  button.close {\r\n      color: #fff;\r\n      opacity: 1;\r\n      font-size: 3em;\r\n      padding: 0;\r\n      margin: 0 0;\r\n      outline: none;\r\n      font-weight: 100;\r\n      float: none;\r\n      position: absolute;\r\n      right: 7%;\r\n  }\r\n  .close:hover, .close:focus {\r\n      color: #fff;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      filter: alpha(opacity=50);\r\n      opacity: 1;\r\n  }\r\n  h4.modal-title {\r\n      font-size: 2.5em;\r\n      color: #fff;\r\n      text-align:center;\r\n      letter-spacing: 5px;\r\n  }\r\n  /*-- //modal-basic --*/\r\n  /*-- experience --*/\r\n  .work-grids {\r\n      width: 85%;\r\n      margin: 0 auto;\r\n  }\r\n  .work-left {\r\n      float: left;\r\n      width: 30%;\r\n      background: #ec407a;\r\n      text-align: center;\r\n      padding: 2em 0;\r\n      border: 2px solid #ec407a;\r\n      transition: .5s all;\r\n  }\r\n  .work-right {\r\n      float: right;\r\n      width: 70%;\r\n      border: 1px solid #ec407a;\r\n      padding: 1.5em;\r\n  }\r\n  .work-left h3 {\r\n      font-size: 1.8em;\r\n      color: #fff;\r\n      font-family: 'Roboto Condensed', sans-serif;\r\n      font-weight: 800;\r\n      letter-spacing: 5px;\r\n  }\r\n  .work-left h5 {\r\n      font-size: 1em;\r\n      color: #fff;\r\n      margin-top: 1em;\r\n      letter-spacing: 5px;\r\n  }\r\n  .work-right h4 {\r\n      font-size: 1.6em;\r\n      color: #1dadd3;\r\n      margin-bottom: 0.5em;\r\n      font-weight: 900;\r\n      letter-spacing: 5px;\r\n  }\r\n  p{\r\n      font-size: 1em;\r\n      color: #fff;\r\n      line-height: 2em;\r\n      font-weight: 300;\r\n      letter-spacing: 1px;\r\n      \r\n  }\r\n  a{\r\n      font-size: 1em;\r\n      color: #fff;\r\n      line-height: 2em;\r\n      font-weight: 300;\r\n      letter-spacing: 1px;\r\n      \r\n     \r\n  }\r\n  .work-grids.work-grids-btm {\r\n      margin: 2em auto;\r\n  }\r\n  .work-grids:hover .work-left {\r\n      background: none;\r\n  }\r\n  .work-left h3 span {\r\n      font-size: .5em;\r\n      font-weight: 300;\r\n      vertical-align: middle;\r\n      margin-left: 5px;\r\n  }\r\n  /*-- //experience --*/"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal-education -->\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header w3layouts\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [routerLink]=\"['/home']\"><span aria-hidden=\"true\" >&times;</span></button>\n        <h4 class=\"modal-title\">My Qualification</h4>\n      </div>\n      <div class=\"modal-body modal-spa\">\n        <div class=\"work\">\n          <div class=\"work-grids\">\n            <div class=\"work-left\">\n              <h3>2017<span></span> </h3>\n              \n            </div>\n            <div class=\"work-right\">\n              <h4>Bachelor's Of Engineering</h4>\n              <p>Information Technology</p>\n              <p>Manohar Bhai Patel Institute Of Engineering and Technology</p>\n              <p>Shahapur, Bhandara.<br></p>\n            </div>\n            <div class=\"clearfix\"> </div>\n          </div>\n          <div class=\"work-grids work-grids-btm\">\n            <div class=\"work-left\">\n              <h3>2017<span></span></h3>\n              \n            </div>\n            <div class=\"work-right\">\n              <h4>Diploma in Design</h4>\n              <p>Diploma in Graphics and Semantic Web Designing</p>\n              <p>Erandwane, Pune.</p>\n            </div>\n            <div class=\"clearfix\"> </div>\n          </div>\n          <div class=\"work-grids work-grids-btm\">\n            <div class=\"work-left\">\n              <h3>2018<span></span></h3>\n              \n            </div>\n            <div class=\"work-right\">\n              <h4>MEAN Stack developer</h4>\n              <p>Certification</p>\n              <p><a href=\"https://edwisor.com/\" target=\"_blank\">Edwisor.com</a></p>\n\n            </div>\n            <div class=\"clearfix\"> </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<!-- //modal-education -->"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%; \r\n    min-height: 100%;\r\n}\r\n.header{\r\n    position: relative;\r\n    color: white;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin-top: 150px;\r\n}\r\n.header p{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: capitalize;\r\n    padding-top: 16px;\r\n    letter-spacing: 5px;\r\n}\r\n.header h1{\r\n    font-size: 45px;\r\n    color: rgb(255, 255, 255);\r\n    padding: 20px;\r\n    letter-spacing: 11px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n.p2{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: capitalize;\r\n    padding-top: 16px;\r\n    letter-spacing: 5px;\r\n    border-top: 4px double #fff;\r\n    margin-bottom: 35px;\r\n}\r\n.my-img{\r\n        width: 100%;\r\n    background-color: #000;\r\n    opacity: 0.9;\r\n    border: 5px solid #fff;\r\n}\r\n.my-btn{\r\n    background: transparent;\r\n    color: white;\r\n    margin: 5px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    border: 2px solid;\r\n    letter-spacing: 3px;\r\n}\r\n.my-btn:hover {\r\n    color: #fff;\r\n    background: #f1c11a;\r\n    border-color: transparent;\r\n    cursor: pointer;\r\n    transition: all 0.4s ease-in-out;\r\n    background-color: #000;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video autoplay muted loop id=\"myVideo\">\n  <source src=\"./../../assets/videos/Lines.mp4\" type=\"video/mp4\">\n  Your browser does not support HTML5 video.\n</video>\n\n<div class=\"header\">\n  <div class=\"container\">\n    <div class=\"col-md-4 myicon\">\n      <img src=\"./../../assets/images/my-img.jpg\" class=\"my-img\">\n    </div>\n    <div class=\"col-md-8\">\n      <p>Hello</p>\n      <h1>I am Mohit Nagpure</h1>\n      <p class=\"p2\">MEAN Stack Developer</p>\n    </div>\n    <button type=\"button\" class=\"btn btn-default my-btn\" data-toggle=\"modal\" data-target=\"#myModal\" [routerLink]=\"['/about']\">About Me</button>\n    <button type=\"button\" class=\"btn btn-default my-btn\" data-toggle=\"modal\" data-target=\"#myModal\" [routerLink]=\"['/education']\">Education</button>\n    <button type=\"button\" class=\"btn btn-default my-btn\" data-toggle=\"modal\" data-target=\"#myModal\" [routerLink]=\"['/skills']\">Skills</button>\n    <button type=\"button\" class=\"btn btn-default my-btn\" data-toggle=\"modal\" data-target=\"#myModal\" [routerLink]=\"['/my-work']\">My Work</button>\n    <button type=\"button\" class=\"btn btn-default my-btn\" data-toggle=\"modal\" data-target=\"#myModal\" [routerLink]=\"['/contact']\">Contact</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/my-work/my-work.component.css":
/*!***********************************************!*\
  !*** ./src/app/my-work/my-work.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n    background: #192f54 ;\r\n    background-size:cover; \r\n    padding: 0 !important;\r\n   \r\n  }\r\n  .modal-dialog {\r\n    width: 60%; \r\n    margin:4em auto;\r\n  }\r\n  .modal-content {\r\n      background: url('model-bg.png') #000 repeat;\r\n  }\r\n  .modal-body.modal-spa {\r\n      padding: 0  1em 3em;\r\n  }\r\n  .modal-header {\r\n     border: none;\r\n     margin-bottom: 1em;\r\n     padding: 2em;\r\n  }\r\n  button.close {\r\n      color: #fff;\r\n      opacity: 1;\r\n      font-size: 3em;\r\n      padding: 0;\r\n      margin: 0 0;\r\n      outline: none;\r\n      font-weight: 100;\r\n      float: none;\r\n      position: absolute;\r\n      right: 7%;\r\n  }\r\n  .close:hover, .close:focus {\r\n      color: #fff;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      filter: alpha(opacity=50);\r\n      opacity: 1;\r\n  }\r\n  h4.modal-title {\r\n      font-size: 2.5em;\r\n      color: #fff;\r\n      text-align:center;\r\n      letter-spacing: 5px;\r\n  }\r\n  /*-- //modal-basic --*/\r\n  /*-- //experience --*/\r\n  /*-- gallery --*/\r\n  .gallery-row {\r\n      padding: 0 3em;\r\n  }\r\n  .gallery-grids {\r\n      margin: 0.5em 0;\r\n      padding: 0 .5em;\r\n  }\r\n  .gallery h5{\r\n      color:aliceblue;\r\n      font-size: 25px;\r\n      text-align: center;\r\n      letter-spacing: 5px;\r\n\r\n  }\r\n  .gallery-w3ls-hover{\r\n      overflow: hidden;\r\n      position: relative;\r\n      transition: all 0.5s;\r\n      opacity: 1;\r\n      filter: alpha(opacity=100);\r\n    border: 2px solid #22add3;\r\n  }\r\n  .gallery-w3ls-hover img { \r\n    width: 100%;\r\n  }\r\n  .gallery-w3ls-hover .view-caption {\r\n    background-color: rgba(236, 64, 122, 0.85);\r\n    border: 5px solid #fff;\r\n    bottom: 0;\r\n    color: #fff;\r\n    left: 0;\r\n    margin: 10px;\r\n    position: absolute;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    z-index: 99;\r\n    transition: all 0.75s ease-in-out 0s;\r\n  }\r\n  .gallery-w3ls-hover .view-caption h5 {\r\n    color: #fff;\r\n    font-size: 1.5em;\r\n    padding-top: 25.5%;\r\n    transition: all 0.75s ease-in-out 0s;\r\n  }\r\n  .gallery-w3ls-hover:hover .view-caption {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    border: 10px solid #fff;\r\n  }\r\n  .gallery-w3ls-hover:hover .view-caption h5 {\r\n      padding-top: 26%;\r\n  }\r\n  /*-- //gallery --*/"

/***/ }),

/***/ "./src/app/my-work/my-work.component.html":
/*!************************************************!*\
  !*** ./src/app/my-work/my-work.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal-work -->\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [routerLink]=\"['/home']\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">My Work</h4>\n      </div>\n      \n      <!--Websites-->\n      <div class=\"modal-body modal-spa\">\n        <div class=\"gallery\">\n          <h5>Websites </h5>\n          <div class=\"gallery-row\">\n            <div class=\"col-md-4 gallery-grids\">\n              <div class=\"gallery-w3ls-hover\">\n                <a href=\"http://mohitnagpure.co.in/Project/9%20Apollo/index.html\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Lorem Ipsum is simply dummy the when an unknown galley\">\n                  <img src=\"./../../assets/images/Project-img/2 apollo.png\" class=\"img-responsive zoom-img\" alt=\"\" />\n                  <div class=\"view-caption\">\n                    <h5>View+</h5>\n                  </div>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-4 gallery-grids\">\n              <div class=\"gallery-w3ls-hover\">\n                <a href=\"http://mohitnagpure.co.in/Project/10%20Eudora/index.html\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Sed ut perspiciatis unde omnis iste natus error sit\">\n                  <img src=\"./../../assets/images/Project-img/1 eudora.jpg\" class=\"img-responsive zoom-img\" alt=\"\" />\n                  <div class=\"view-caption\">\n                    <h5>View+</h5>\n                  </div>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-4 gallery-grids\">\n              <div class=\"gallery-w3ls-hover\">\n                <a href=\"http://mohitnagpure.co.in/Project/8%20Comila/index.html\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Eaque ipsa quae ab illo inventore veritatis et quasi\">\n                  <img src=\"./../../assets/images/Project-img/6 comalia.png\" class=\"img-responsive zoom-img\" alt=\"\" />\n                  <div class=\"view-caption\">\n                    <h5>View+</h5>\n                  </div>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-4 gallery-grids\">\n              <div class=\"gallery-w3ls-hover\">\n                <a href=\"http://mohitnagpure.co.in/Project/4%20Alecto/index.html\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Lorem Ipsum is simply dummy the when an unknown galley\">\n                  <img src=\"./../../assets/images/Project-img/4 alecto.png\" class=\"img-responsive zoom-img\" alt=\"\" />\n                  <div class=\"view-caption\">\n                    <h5>View+</h5>\n                  </div>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-4 gallery-grids\">\n              <div class=\"gallery-w3ls-hover\">\n                <a href=\"http://mohitnagpure.co.in/Project/1%20Tinyone/Index.html\" target=\"_blank\"data-lightbox=\"example-set\" data-title=\"Sed ut perspiciatis unde omnis iste natus error sit\">\n                  <img src=\"./../../assets/images/Project-img/7 tinyone.png\" class=\"img-responsive zoom-img\" alt=\"\" />\n                  <div class=\"view-caption\">\n                    <h5>View+</h5>\n                  </div>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-4 gallery-grids\">\n              <div class=\"gallery-w3ls-hover\">\n                <a href=\"http://mohitnagpure.co.in/Project/3%20Caminer/index.html\" target=\"_blank\"data-lightbox=\"example-set\" data-title=\"Lorem Ipsum is simply dummy the when an unknown galley\">\n                  <img src=\"./../../assets/images/Project-img/10 caminar.png\" class=\"img-responsive zoom-img\" alt=\"\" />\n                  <div class=\"view-caption\">\n                    <h5>View+</h5>\n                  </div>\n                </a>\n              </div>\n            </div>\n            <br>\n            <div class=\"clearfix\"> </div>\n          </div>\n        </div>\n      </div> \n      <!--End Websites-->\n\n<!--Angular-->\n<div class=\"modal-body modal-spa\">\n    <div class=\"gallery\">\n    <h5>Angular Application </h5> \n      <div class=\"gallery-row\"> \n       \n        <div class=\"col-md-4 gallery-grids\">\n          <div class=\"gallery-w3ls-hover\">\n            <a href=\"http://www.angular-advance.mohitnagpure.com\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Lorem Ipsum is simply dummy the when an unknown galley\">\n              <img src=\"./../../assets/images/Project-img/angular-app1.png\" class=\"img-responsive zoom-img\" alt=\"\"/>\n              <div class=\"view-caption\">\n                <h5>View+</h5> \n              </div>\n            </a>\n          </div>\n        </div>\n      \n        <div class=\"col-md-4 gallery-grids\">\n          <div class=\"gallery-w3ls-hover\">\n            <a href=\"http://www.angular-basic.mohitnagpure.com\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Lorem Ipsum is simply dummy the when an unknown galley\">\n              <img src=\"./../../assets/images/Project-img/angular-app2.png\" class=\"img-responsive zoom-img\" alt=\"\"/>\n              <div class=\"view-caption\">\n                <h5>View+</h5> \n              </div>\n            </a>\n          </div>\n        </div>\n\n    <div class=\"clearfix\"> </div>\n      </div>\n    </div>\n  </div> \n\n<!--End Angular app-->\n\n  <!--Project-->\n<div class=\"modal-body modal-spa\">\n    <div class=\"gallery\">\n    <h5>Project: To-Do-List-Application </h5> \n      <div class=\"gallery-row\"> \n       \n        <div class=\"col-md-4 gallery-grids\">\n          <div class=\"gallery-w3ls-hover\">\n            <a href=\"http://todolist.mohitnagpure.com/login\" target=\"_blank\" data-lightbox=\"example-set\" data-title=\"Lorem Ipsum is simply dummy the when an unknown galley\">\n              <img src=\"./../../assets/images/Project-img/todolist.png\" class=\"img-responsive zoom-img\" alt=\"\"/>\n              <div class=\"view-caption\">\n                <h5>View+</h5> \n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n        \n    <div class=\"clearfix\"> </div>\n      </div>\n    </div>\n  \n\n  <!--End Project-->\n    </div>\n\n  </div>\n\n</div>\n\n<!-- end-modal-work -->"

/***/ }),

/***/ "./src/app/my-work/my-work.component.ts":
/*!**********************************************!*\
  !*** ./src/app/my-work/my-work.component.ts ***!
  \**********************************************/
/*! exports provided: MyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkComponent", function() { return MyWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyWorkComponent = /** @class */ (function () {
    function MyWorkComponent() {
    }
    MyWorkComponent.prototype.ngOnInit = function () {
    };
    MyWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-work',
            template: __webpack_require__(/*! ./my-work.component.html */ "./src/app/my-work/my-work.component.html"),
            styles: [__webpack_require__(/*! ./my-work.component.css */ "./src/app/my-work/my-work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyWorkComponent);
    return MyWorkComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n    background: #192f54 ;\r\n    background-size:cover; \r\n    padding: 0 !important;\r\n \r\n}\r\n.modal-dialog {\r\n    width: 60%; \r\n    margin:4em auto;\r\n}\r\n.modal-content {\r\n    background: url('model-bg.png') #000 repeat;\r\n}\r\n.modal-body.modal-spa {\r\n    padding: 0  1em 3em;\r\n}\r\n.modal-header {\r\n    border: none;\r\n    margin-bottom: 1em;\r\n    padding: 2em;\r\n}\r\nbutton.close {\r\n    color: #fff;\r\n    opacity: 1;\r\n    font-size: 3em;\r\n    padding: 0;\r\n    margin: 0 0;\r\n    outline: none;\r\n    font-weight: 100;\r\n    float: none;\r\n    position: absolute;\r\n    right: 7%;\r\n}\r\n.close:hover, .close:focus {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    filter: alpha(opacity=50);\r\n    opacity: 1;\r\n}\r\nh4.modal-title {\r\n    font-size: 2.5em;\r\n    color: #fff;\r\n  text-align:center;\r\n  letter-spacing: 5px;\r\n}\r\n/*-- //modal-basic --*/\r\n.bar-grids {\r\n    padding: 0 4em;\r\n}\r\n.bar-grids h4 {\r\n    font-size: 1.6em;\r\n    color: #1dadd3;\r\n    margin-bottom: 1.5em;\r\n    border-bottom: 1px dashed #484848;\r\n    padding-bottom: 0.5em;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n}\r\n.bar-grids h4 span.glyphicon{\r\n    margin-right: 0.8em;\r\n}\r\n.bar-grids h6 {\r\n    font-size: 1em;\r\n    color: #fff;\r\n    margin-bottom: 0.6em;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    text-transform: capitalize;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n}\r\n/*-- //skills --*/"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal-Skills -->\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [routerLink]=\"['/home']\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">My Skills</h4>\n      </div>\n      <div class=\"modal-body modal-spa\">\n        <div class=\"skills\">\n          <div class=\"col-md-6 bar-grids\">\n            <h4><span class=\"glyphicon glyphicon-cog\"></span> Frontend Technologies </h4>\n            <h6>PHOTOSHOP </h6>\n            <h6>HTML & CSS</h6>\n            <h6>Javascript</h6>\n            <h6>jquery</h6>\n            <h6>Bootstrap</h6>\n            <h6>Angular</h6>\n          </div>\n          <div class=\"col-md-6 bar-grids\">\n            <h4><span class=\"glyphicon glyphicon-cog\"></span>Backend Technologies </h4>\n            <h6>NodeJS</h6>\n            <h6>ExpressJS</h6>\n            <h6>MongoDB</h6>\n          </div>\n          <div class=\"col-md-6 bar-grids\">\n            <h4><span class=\"glyphicon glyphicon-cog\"></span>Cloud</h4>\n            <h6>AWS</h6>\n            <h6>Nginx Deployment</h6>\n          </div>\n          <div class=\"clearfix\"> </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<!-- //modal-skills -->"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cw\Desktop\Portfolio\my-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map