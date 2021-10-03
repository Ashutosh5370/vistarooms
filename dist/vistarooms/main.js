(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\vistarooms\src\main.ts */"zUnb");


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "PLN7":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ApiService {
    constructor(http) {
        this.http = http;
    }
    getUserInformation() {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/api.service */ "PLN7");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_tr_350_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.address.street + ", " + item_r1.address.suite + ", " + item_r1.address.city + ", " + item_r1.address.zipcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.website);
} }
class AppComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.title = 'vistarooms';
        this.faPlayCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlayCircle"];
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUserCircle"];
        this.faBell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBell"];
        this.udaipurImage = "assets/img/Udaipur_1.jpg";
        this.luxuryBannerImage = "assets/img/desktop+dubai+banner+homepage.webp";
        this.whyChooseUsIcons = [
            { src: "assets/img/Only+1+in+100+Homes++are+Selected.svg", placeholder: "Only 1 in 50 homes are accepted" },
            { src: "assets/img/500 Handpicked homes across India.svg", placeholder: "500+ Handpicked homes across India" },
            { src: "assets/img/Hosted over 250,000 happy guests.svg", placeholder: "Hosted over 250,000+ happy guests" },
            { src: "assets/img/Homes are regularly audited for 200 factors.svg", placeholder: "Homes are regularly audited for 200+ factors" },
            { src: "assets/img/We+empower+the++local+community.svg", placeholder: "We empower the local community" },
        ];
        this.getUserInformation();
    }
    getUserInformation() {
        this.apiService.getUserInformation()
            .subscribe((data) => this.userData = data);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 351, vars: 30, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "shadow-sm"], ["href", "#", 1, "navbar-brand"], ["src", "assets\\img\\vista-icon.svg", "alt", "vista-logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "mr-3"], ["href", "#", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "nav-item", "mr-3"], ["href", "#", 1, "nav-link"], [1, "btn", "btn-search"], [1, "d-flex", "px-1"], [1, "d-inline-block", "mr-2", 3, "icon"], [1, "btn", "btn-search", 2, "background", "#fff"], [1, "d-flex", "px-1", 2, "color", "#df494b"], [1, "search-section"], [1, "container-fluid"], [1, "row", 2, "position", "relative"], [1, "col-6"], [1, "search-results", 2, "padding", "120px"], ["src", "assets\\img\\2797667.png", "height", "40", "width", "40"], [1, "mt-3"], [1, "mt-5"], ["href", "", 2, "color", "#df494b"], [1, "col-6", 2, "position", "relative"], ["src", "assets\\img\\mr-lonandkars-villa-adc256.jpg", 1, "img-responsive", "w-100"], [2, "position", "absolute", "top", "40%", "left", "-20px"], [1, "fa-2x", 2, "background", "rgb(255, 255, 255)", "color", "#df495b", "border", "10px solid #fff", "border-radius", "100%", 3, "icon"], [1, "search-bar"], [1, "row"], [1, "col-lg-4", "col-md-3", "col-sm-12", "input-text", "location-search"], [1, "form-group"], ["type", "text", "placeholder", "Where are you travelling to/from?", 1, "form-control", "font-16", "search-dropdown", "text-capitalize"], [1, "col-lg-4", "col-md-3", "col-sm-6", "input-text"], ["type", "date", "placeholder", "Check-in / Check-out", 1, "form-control", "font-16", "search-dropdown", "text-capitalize"], [1, "col-lg-2", "col-md-3", "col-sm-12", "input-text"], [1, "col-lg-2", "col-md-3", "col-sm-12", "search-btn", "font-20"], [1, "btn", "btn-search", 2, "margin-top", "30px"], [1, "explore-home", "mt-5"], [1, "container", "text-center"], ["id", "demo", "data-ride", "carousel", 1, "carousel", "slide", "my-5"], [1, "carousel-inner"], [1, "carousel-item", "active", "text-center"], [1, "row", 2, "margin-right", "-244px"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "text-center"], ["alt", "Udaipur image", 1, "img-responsive", "w-100", "rounded-circle", 3, "lazyLoad"], [1, "mt-2"], [1, "carousel-item"], [1, "col-lg-2", "col-md-6", "col-sm-12", "col-xs-12", "text-center"], [1, "carousel-indicators", 2, "margin-top", "30px", "position", "relative"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], [1, "luxury-section"], [1, "container"], [1, "mb-5", "mt-5", "pt-4"], [1, "col-12"], ["alt", "home-banner", 1, "img-responsive", "w-100", 3, "lazyLoad"], [1, "why-choose-section", "bg-light"], [1, "container", "text-center", "p-5"], [1, "row", "icons", 2, "margin-top", "40px", "margin-right", "-277px"], ["alt", "icon", "width", "70", "height", "60", 3, "lazyLoad"], [1, "pt-3"], [1, "our-featured-home"], [1, "row", "mt-5"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/amara-villa-6b8218.webp')"], [1, "grid-inner-container", "p-2"], [1, "d-inline-block", "overflow-nowrap", "w-50", "p1-16-redhat-medium"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/casa-sol-one-70fea0.jpg')"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/casa-ela-11-f23935.jpg')"], [1, "row", "mt-3", 2, "margin-top", "40px"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/open-house-f831ee.webp')"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/pranaam-4ea2cb.webp')"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/mr-lonandkars-villa-adc256.jpg')"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/i0akabtcmnavv7hodwuq.webp')"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/umber-villa-d0e570.webp')"], [1, "img-con-1", "prop-img", 2, "background-image", "url('assets/img/the-winter-line-6554e0.webp')"], [1, "user-table-section", "bg-light"], [1, "text-center"], [1, "table-responsive"], [1, "table", "mt-4"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Cities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Kolhapur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Plan an event");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Corprate offcite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Partner With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Need Help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Working round-the-clock to keep you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " & your family safe on your next stay!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Our ground-team along with industry experts are implementing all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " WHO safety guidelines to make sure you are 100% protected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "fa-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Guest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Explore the finest Homes in the most Desirable Destinations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Skip the cookie-cutter hotel stays for the charm and warmth of our luxury holiday homes and personalized experiences. With over 500+ homes in 50+ destinations, invite you to experience the authenticity of India without compromising on hospitality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Udaipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Why Choose Vista For Your Ideal Getaway");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "section", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Our Featured Holiday Homes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "We carefully handpick and manage all our homes, to ensure you have a hassle-free, pleasant stay.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, " Alibaug, Maharashtra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " Amara Villa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, " Per Night ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, " Amara Villa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, " Per Night ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, " Per Night ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, " Per Night ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, " Per Night ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, " Homes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, " Per Night ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, " Alibaug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, " \u20B9 67,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "section", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "User Data Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "table", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "thead", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](350, AppComponent_tr_350_Template, 13, 6, "tr", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faBell);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUserCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPlayCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.udaipurImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.luxuryBannerImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.whyChooseUsIcons[0].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.whyChooseUsIcons[0].placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.whyChooseUsIcons[1].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.whyChooseUsIcons[1].placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.whyChooseUsIcons[2].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.whyChooseUsIcons[2].placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.whyChooseUsIcons[3].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.whyChooseUsIcons[3].placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", ctx.whyChooseUsIcons[4].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.whyChooseUsIcons[4].placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userData);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%] {\n  padding-left: 120px;\n  padding-right: 120px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #df494b !important;\n}\n\n.img-con-1[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  height: 320px;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.prop-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.grid-inner-container[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 72px;\n  width: 100%;\n  border-radius: 0 0 5px 5px;\n  margin-top: auto;\n  opacity: 0;\n  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transform: translateY(100%);\n}\n\n.prop-img[_ngcontent-%COMP%]:hover   .grid-inner-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 8px;\n  height: 8px;\n  margin-right: 10px;\n  border-radius: 100%;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #bd2130;\n  box-shadow: 0 0 0 2px #c8c7cc !important;\n  background-clip: padding-box;\n  border: 4px solid transparent;\n  box-sizing: content-box;\n  transition: opacity 0.6s ease;\n}\n\n.carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #df494a !important;\n  box-shadow: 0 0 0 1px #df494b !important;\n}\n\n\n\n.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #df495b;\n  border-color: #df495b;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background-color: #fff;\n  border-radius: 4px;\n  bottom: 110px;\n  left: 130px;\n  width: 1200px;\n  position: relative;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n\n.location-search[_ngcontent-%COMP%] {\n  padding-left: 50px !important;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #404a4c !important;\n  border: 1px solid #000 !important;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n.font-16[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\n.btn-search[_ngcontent-%COMP%] {\n  width: 90%;\n  background-color: #df495b;\n  border-color: #df495b;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBRUEsdUJBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUlBLGVBQUE7O0FBR0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLDJCQUFBO0FBSkY7O0FBT0E7RUFDRSw2QkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFDQUFBO0FBSkY7O0FBT0E7RUFDRSwwQkFBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZGY0OTRiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctY29uLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb3AtaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZ3JpZC1pbm5lci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAuNXMgY3ViaWMtYmV6aWVyKC4yNSwgLjQ2LCAuNDUsIC45NCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG59XHJcblxyXG4ucHJvcC1pbWc6aG92ZXIgLmdyaWQtaW5uZXItY29udGFpbmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyBlYXNlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjQ5NGEgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2RmNDk0YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogVXNlciB0YWJsZSAqL1xyXG5cclxuLnRhYmxlIHtcclxuICAudGhlYWQtZGFyayB0aCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjQ5NWI7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZjQ5NWI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDE2JSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm90dG9tOiAxMTBweDtcclxuICBsZWZ0OiAxMzBweDtcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0LXRleHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvY2F0aW9uLXNlYXJjaCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiAjNDA0YTRjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4udGV4dC1jYXBpdGFsaXplIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC0xNiB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjQ5NWI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGY0OTViO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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