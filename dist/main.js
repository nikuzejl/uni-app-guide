(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikuzejl/Desktop/UniversityGuide/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 4, consts: [[1, "title"], [1, "subtitle"], ["mat-button", "", "routerLinkActive", "active_window", 3, "routerLink"], [1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " GENERAL INFO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " UNDERGRADUATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " GRADUATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/undergrad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/grad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media (min-width:480px){\n    .title[_ngcontent-%COMP%]{\n        display: flex;\n        color:white;\n    }\n    .subtitle[_ngcontent-%COMP%]{\n        margin-top: 14px;\n        width: 25%;\n        background-color: #74b5da;\n        opacity: 0.6;\n        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #74b5da 10px ), repeating-linear-gradient( #4d97e355, #4d97e3 );\n    }\n\n    a[_ngcontent-%COMP%]{\n        font-size: 1em;\n    }\n}\n\n.title[_ngcontent-%COMP%]{\n    color:black;\n    font-weight: bolder;\n}\n\n.subtitle[_ngcontent-%COMP%]{\n    text-align: center;\n    background-color: #74b5da;\n    opacity: 0.6;\n    background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #74b5da 10px ), repeating-linear-gradient( #4d97e355, #4d97e3 );\n}\n\n.container[_ngcontent-%COMP%]{\n    margin: 0% 5%;\n}\n\n.active_window[_ngcontent-%COMP%]{\n    background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLDJJQUEySTtJQUMvSTs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwySUFBMkk7QUFDL0k7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KXtcbiAgICAudGl0bGV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICAuc3VidGl0bGV7XG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NGI1ZGE7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogIHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIGNpcmNsZSBhdCAwIDAsIHRyYW5zcGFyZW50IDAsICM3NGI1ZGEgMTBweCApLCByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KCAjNGQ5N2UzNTUsICM0ZDk3ZTMgKTtcbiAgICB9XG5cbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG5cbi50aXRsZXtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc3VidGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NGI1ZGE7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCBjaXJjbGUgYXQgMCAwLCB0cmFuc3BhcmVudCAwLCAjNzRiNWRhIDEwcHggKSwgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCggIzRkOTdlMzU1LCAjNGQ5N2UzICk7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwJSA1JTtcbn1cblxuLmFjdGl2ZV93aW5kb3d7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG59XG4iXX0= */"] });


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class ContactComponent {
    constructor() {
        // contact_title= "Contact us";
        // subject= new FormControl();
        // message= new FormControl();
        // sent_message:boolean = false;
        this.clickedContact = false;
    }
    ngOnInit() {
    }
    toggleClick() {
        this.clickedContact = this.clickedContact ? false : true;
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 0, consts: [[1, "container"], ["target", "_blank", "action", "https://formsubmit.co/nikuzejl@gmail.com", "method", "POST"], ["type", "hidden", "name", "_captcha", "value", "false"], ["type", "hidden", "name", "_subject", "value", "Email from site visitors"], [1, "emails"], ["id", "email", "type", "email", "name", "email", "placeholder", "Your email address", "required", ""], [1, "messages"], ["id", "message", "type", "text", "name", "message", "placeholder", "Write your message here", "required", ""], ["type", "hidden", "name", "_next", "value", "https://nikuzejl.github.io/thankyoupage/"], ["type", "submit"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " If you want to give me feedback or ask questions, you can contact me here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"]], styles: ["#email[_ngcontent-%COMP%]{\n    width: 200px;\n    border-radius: 5px;\n }\n \n #message[_ngcontent-%COMP%]{\n     width:200px;\n     height: 80px;\n     margin-top: 10px;\n     border-color:rgb(150, 157, 163);\n     border-radius: 5px;\n }\n \n button[_ngcontent-%COMP%]{\n    background-color: orange;\n    height: 26px;\n    border-radius: 12px;\n    box-shadow: 2px 3px 4px grey;\n    border-style: none;\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsWUFBWTtLQUNaLGdCQUFnQjtLQUNoQiwrQkFBK0I7S0FDL0Isa0JBQWtCO0NBQ3RCOztDQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlbWFpbHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIH1cbiBcbiAjbWVzc2FnZXtcbiAgICAgd2lkdGg6MjAwcHg7XG4gICAgIGhlaWdodDogODBweDtcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgYm9yZGVyLWNvbG9yOnJnYigxNTAsIDE1NywgMTYzKTtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIH1cblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDRweCBncmV5O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ "JP69":
/*!*******************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(); };
ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 4, vars: 0, template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Message successfully sent! We will reply as soon as possible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "O//4":
/*!***************************************************!*\
  !*** ./src/app/components/grad/grad.component.ts ***!
  \***************************************************/
/*! exports provided: GradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradComponent", function() { return GradComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GradComponent {
    constructor() { }
    ngOnInit() { }
}
GradComponent.ɵfac = function GradComponent_Factory(t) { return new (t || GradComponent)(); };
GradComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradComponent, selectors: [["app-grad"]], decls: 49, vars: 0, consts: [[1, "container"], ["href", "https://www.ets.org/gre/", "target", "_blank"], ["href", "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters-scholarships"], ["href", "https://www.chevening.org/scholarship/burundi/"], ["href", "https://mastercardfdn.org/"]], template: function GradComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To apply to graduate school, you will need: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your university transcript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Two or three recommendation letters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Statement of purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Personal statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Other essays required by the program that you are applying to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Here are some other facts that you can keep in mind as you prepare your application: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Researching while you are still in undergraduate school will look great on your graduate application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Work hard to have the best grades you can have in undergraduate studies. It will show that you are skilled and can handle the workload of graduate school ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Be active in the real world. You can show that through volunteering, work, internship, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Unlike undergraduate school, you should know what you want to study in graduate school because, in your application, you need to say which program you are applying to and why. If you are applying to a PhD program, you should know different research projects going at the universities that you are applying to, and if possible, get in touch with professors working on those projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Some schools might require another exam called GRE. For more information about GRE, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " click here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Financial aid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " There are not as many need-based scholarships for graduate school as for undergraduate. However, each school has some kind of financial aid that you might be eligible for. If you apply for a PhD, it is likely to be fully funded because the project that you work on will have a dedicated budget that will cover your living expenses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " For a master's degree, you can be a teaching or research assistant, and the school can cover some, if not most of your expenses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "There are some organizations that can fund your graduate education: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Erasmus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " offered by the European Union has fully funded master's programs in Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Chevening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " also offers master's scholarships in the United Kingdom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " MasterCard Foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " offers scholarships in different countries around the world ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n    font-weight: 500;\n    line-height: 1.6em;\n    font-family: Verdana;\n}\n\nh2[_ngcontent-%COMP%]{\n    margin-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImdyYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG59XG5cbmgye1xuICAgIG1hcmdpbi1ib3R0b206IDFweDtcbn0iXX0= */"] });


/***/ }),

/***/ "PnrX":
/*!*******************************************************************!*\
  !*** ./src/app/components/general-info/general-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class GeneralInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralInfoComponent.ɵfac = function GeneralInfoComponent_Factory(t) { return new (t || GeneralInfoComponent)(); };
GeneralInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInfoComponent, selectors: [["app-general-info"]], decls: 82, vars: 2, consts: [[1, "container"], [3, "routerLink"], ["href", "https://www.wikihow.com/Prepare-for-College-in-High-School", "target", "_blank"], ["href", "https://www.topuniversities.com/blog/what-liberal-arts-education"], ["href", "https://www.usnews.com/education/community-colleges/articles/2015/02/06/frequently-asked-questions-community-college"]], template: function GeneralInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Applying to university in a foreign country can be daunting. However, thousands of international students around the world make it every year. You too can make it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This site contains very basic information about the American university application process, for undergraduate studies (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "baccalaur\u00E9at ou licence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ") and graduate studies (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "master ou doctorat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About the American higher education system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " In the U.S, bachelor's programs last four years, Master's degrees one to two years, and Ph.D. four to six years. Unlike many other countries, you cannot start medical school straight out of high school from your first year of university. First, you have to earn a four-year bachelor's degree in any major(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "facult\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "), then apply to medical school(which lasts four years). The same process applies to dental, veterinary, or law school. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " In the U.S, you are not required to declare your major until the second year of university, which means that by the time you start university, is okay to be undecided about what you want to study. Moreover, you can have more than one major or minor at no extra cost. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Differences and similarities between University, College and Community College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ": offers undergraduate degrees (bachelor's) and graduate degrees (master's degrees and/or PhD) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ": offers only undergraduate degrees. Therefore, you can get a bachelor's degree at a college or a university. Moreover, the terms \"College\" and \"University\" are interchangeably used in the United States ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Community College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ": offers associate degrees in 2 years. You can transfer from a community college to a college or university if you want more advanced degrees. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " In the US, the words \"college\" and \"university\" are often used interchangeably, and their cost of attendance is more or less similar. You can get your bachelor's degree at a university or a college. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Financial aid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " American schools are notoriously expensive. Unless you are rich or willing to take loans, you will need financial aid. You should make sure the school that you are applying to normally gives financial aid. Admission is the most important step because you will need to be admitted before your school considers giving you a scholarship. Most schools will often fund your education if they like you as a student. There are different types of scholarships, but many international students often receive need-based scholarships. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " So, where should you start this whole application process?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Look for universities that have majors that you are interested in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Look at the university's website the application requirements, especially standardized tests and language requirements for international students ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "If you know that you will need a scholarship, make sure the university provides scholarships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Study and prepare yourself for the standardized tests and get the best scores you can get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Make sure you have all the documents needed for your application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Submit your application and hope for the best!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " To increase your chances, you might need to apply to many universities. Do not hesitate to contact the schools that you are interested in if you have any questions. It might also be helpful to talk to current students or alumni of the school that you are applying to. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Click on these links to find out more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " graduate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " undergraduate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Some resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " College readiness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "What is Liberal Arts Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " More information about community colleges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/grad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/undergrad");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%]{\n    font-family: Verdana;\n    font-weight: 500;\n    line-height: 1.6em;\n}\n\n.text[_ngcontent-%COMP%]{\n    margin: auto;\n    color:white;\n    font-size: 1.5em;\n    font-weight: bold;\n    border-radius: 10px;  \n}\n\nh2[_ngcontent-%COMP%]{\n    margin-bottom:5px;\n}\n\n.footer[_ngcontent-%COMP%]{\n    height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJnZW5lcmFsLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG59XG5cbi50ZXh0e1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcbn1cblxuaDJ7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbi5mb290ZXJ7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");


class AppComponent {
    constructor() {
        this.title = 'UniversityGuide';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Uudc":
/*!*************************************************************!*\
  !*** ./src/app/components/undergrad/undergrad.component.ts ***!
  \*************************************************************/
/*! exports provided: UndergradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndergradComponent", function() { return UndergradComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UndergradComponent {
    constructor() { }
    ngOnInit() { }
}
UndergradComponent.ɵfac = function UndergradComponent_Factory(t) { return new (t || UndergradComponent)(); };
UndergradComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UndergradComponent, selectors: [["app-undergrad"]], decls: 88, vars: 0, consts: [[1, "container"], ["href", "https://www.ets.org/toefl", "target", "_blank"], ["href", "https://www.ielts.org/", "target", "_blank"], ["href", "https://englishtest.duolingo.com/home", "target", "_blank"], ["href", "https://collegereadiness.collegeboard.org/sat", "target", "_blank"], ["href", "https://www.act.org/", "target", "_blank"], ["href", "https://mastercardfdn.org/", "target", "_blank"], ["href", "http://bridge2rwanda.org/", "target", "_blank"], ["href", "https://meto-intl.org/"], ["href", "https://www.uwc.org/", "target", "_blank"], ["href", "http://www.africanleadershipacademy.org/", "target", "_blank"], ["href", "https://en.ashinaga.org/", "target", "_blank"], ["href", "http://www.tujenge.org/", "target", "_blank"]], template: function UndergradComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " As you prepare your undergraduate application, you should know that: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You need to do well in your classes so that your grades can help you to stand out among thousands of applicants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your grades are not everything. You also need extracurricular activities to show that you are more than a good student ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If English is not your native language, most schools will require you take an English test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Work hard to get above the minimum standardized test scores required by your schools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Here are some of the documents that you might need for your application: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "High school diploma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "National exam scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "High school transcripts (usually the last three years)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Recommendation letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The most common standardized English test is called TOEFL. It has four sections: reading, writing, listening and speaking. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " For more information about TOEFL, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". Depending on the university, other alternative tests might be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " IELTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Duolingo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Some schools will also require tests called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " If you are not able to do any of those tests, there are a few schools (mostly community colleges), which do not require any standardized tests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Admission and financial aid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Before you get a scholarship, you will need to apply the same way as anybody else to be admitted. After being admitted, you can become eligible for a scholarship. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " The school might be able to give you financial aid. Make sure to check thoroughly your school's website to see which kind of financial aid it offers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " You may also receive financial aid from another organization that can pay your universities expenses. For example, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " MasterCard Foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " gives scholarships to many undergraduate and graduate students in different countries around the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " You can request a student loan that you will have to pay after graduation. If you have the money, you can always pay for yourself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "College readiness programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " If you can prepare yourself for college applications on your own, that's great! However, that can be hard for many people, especially if your English is not good. There are organizations that help high school students or high school graduates to prepare for the standardized tests and guide students through the university application process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "These programs prepare students to apply to universities when they are still in high school: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Bridge2Rwanda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " : Two years before finishing high school, students spend a summer in Rwanda learning English and Leadership. The program follows up with the students when they go back to school so that they can be ready to apply to universities as soon as they graduate from high school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Meto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " United World College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " African Leadership Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " If you have already graduated from high school, you can apply to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Ashinaga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, ": Gap-year program with a French program in S\u00E9n\u00E9gal and an English program in Uganda. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Tujenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ": English gap-year program similar to Ashinaga and Bridge2Rwanda. It is based in Bujumbura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n    font-weight: 500;\n    line-height: 1.6em;\n    font-family: Verdana;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZGVyZ3JhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoidW5kZXJncmFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_undergrad_undergrad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/undergrad/undergrad.component */ "Uudc");
/* harmony import */ var _components_grad_grad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/grad/grad.component */ "O//4");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "JP69");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/general-info/general-info.component */ "PnrX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_undergrad_undergrad_component__WEBPACK_IMPORTED_MODULE_3__["UndergradComponent"],
        _components_grad_grad_component__WEBPACK_IMPORTED_MODULE_4__["GradComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
        _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_19__["GeneralInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "JP69");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general-info/general-info.component */ "PnrX");
/* harmony import */ var _components_grad_grad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/grad/grad.component */ "O//4");
/* harmony import */ var _components_undergrad_undergrad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/undergrad/undergrad.component */ "Uudc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_3__["GeneralInfoComponent"] },
    { path: 'grad', component: _components_grad_grad_component__WEBPACK_IMPORTED_MODULE_4__["GradComponent"] },
    { path: 'undergrad', component: _components_undergrad_undergrad_component__WEBPACK_IMPORTED_MODULE_5__["UndergradComponent"] },
    { path: 'confirmation', component: _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'general', component: _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_3__["GeneralInfoComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map