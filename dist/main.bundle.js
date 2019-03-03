webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailed_bio_detailed_bio_component__ = __webpack_require__("./src/app/detailed-bio/detailed-bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'bio/:username', component: __WEBPACK_IMPORTED_MODULE_2__detailed_bio_detailed_bio_component__["a" /* DetailedBioComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    overflow: hidden;\r\n    background-color: #ffffff;\r\n    position: fixed; /* Set the navbar to fixed position */\r\n    top: 0; /* Position the navbar at the top of the page */\r\n    height: 70px;\r\n    width: 100%; /* Full width */\r\n    z-index: 999;\r\n  }\r\n\r\n.navbar p{\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 50px;\r\n}\r\n  \r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "      <router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_multiselect_dropdown__ = __webpack_require__("./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sort_service__ = __webpack_require__("./src/app/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_pipe__ = __webpack_require__("./src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detailed_bio_detailed_bio_component__ = __webpack_require__("./src/app/detailed-bio/detailed-bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_11__detailed_bio_detailed_bio_component__["a" /* DetailedBioComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_multiselect_dropdown__["a" /* NgMultiSelectDropDownModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__sort_service__["a" /* SortService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detailed-bio/detailed-bio.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: #fdf1ec;\r\n  }\r\n  \r\n  .wrapper {\r\n    height: 420px;\r\n    width: 654px;\r\n    margin: 50px auto;\r\n    border-radius: 7px 7px 7px 7px;\r\n    /* VIA CSS MATIC https://goo.gl/cIbnS */\r\n    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  \r\n  .header{\r\n    width : 100%;\r\n    text-align: center;\r\n    height: 20px;\r\n    padding-top: 5px;\r\n    font-family: 'Raleway', sans-serif;\r\n  }\r\n  \r\n  .product-img {\r\n    float: left;\r\n    height: 100%;\r\n    margin-top: 20%;\r\n    padding: 10px;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .product-img img {\r\n    border-radius: 7px 0 0 7px;\r\n  }\r\n  \r\n  .product-info {\r\n    float: left;\r\n    height: 420px;\r\n    width: 400px;\r\n    padding-left: 10px; \r\n    border-radius: 0 7px 10px 7px;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .product-text {\r\n    height: 300px;\r\n    width: 327px;\r\n    padding-left: 7px;\r\n  }\r\n  \r\n  .product-text h1 {\r\n    margin: 0 0 0 35px;\r\n    padding-top: 52px;\r\n    font-size: 34px;\r\n    color: #474747;\r\n  }\r\n  \r\n  .product-text h1,\r\n  .product-price-btn p {\r\n    font-family: 'Bentham', serif;\r\n  }\r\n  \r\n  .product-text h2 {\r\n    margin: 0 0 47px 38px;\r\n    font-size: 13px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    color: #474747;\r\n    letter-spacing: 0.2em;\r\n  }\r\n  \r\n  .product-text p {\r\n    height: 125px;\r\n    margin: 0 0 0 38px;\r\n    font-family: 'Playfair Display', serif;\r\n    color: #8d8d8d;\r\n    line-height: 1.7em;\r\n    font-size: 15px;\r\n    font-weight: lighter;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .product-price-btn {\r\n    height: 103px;\r\n    width: 327px;\r\n    margin-top: 17px;\r\n    position: relative;\r\n  }\r\n  \r\n  .product-price-btn p {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: -13px;\r\n    height: 50px;\r\n    font-family: 'Trocchi', serif;\r\n    margin: 0 0 0 38px;\r\n    font-size: 28px;\r\n    font-weight: lighter;\r\n    color: #474747;\r\n  }\r\n  \r\n  span {\r\n    display: inline-block;\r\n    height: 50px;\r\n    font-family: 'Suranna', serif;\r\n    font-size: 34px;\r\n  }\r\n  \r\n  ul {\r\n    overflow: hidden;\r\n    list-style-type: none;\r\n  }\r\n  \r\n  li {\r\n    height: 25px;\r\n    float: left;\r\n    margin-right: 0px;\r\n    border-right: 1px solid #aaa;\r\n    padding: 0 7px;\r\n  }\r\n  \r\n  li:last-child {\r\n    border-right: none;\r\n  }\r\n  \r\n  li a {\r\n    text-decoration: none;\r\n    color: #ccc;\r\n    font: 20px/1 Helvetica, Verdana, sans-serif;\r\n    text-transform: uppercase;\r\n    -webkit-transition: all 0.5s ease;\r\n  }\r\n  \r\n  li a:hover {\r\n    color: #666;\r\n  }\r\n  \r\n  li.active a {\r\n    font-weight: bold;\r\n    color: #333;\r\n  }"

/***/ }),

/***/ "./src/app/detailed-bio/detailed-bio.component.html":
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"arrayData\" class=\"wrapper\">\n\t\t<div class=\"header\">\n\t\t\t<a [routerLink]=\"['/']\">Back To Dashboard</a>\n\t\t</div>\n    <div class=\"product-img\">\n      <img [src]=\"arrayData[0].picture\" alt=\"image\"/>\n    </div>\n    <div class=\"product-info\">\n      <div class=\"product-text\">\n        <h1>{{arrayData[0].fullName}}</h1>\n\t\t\t\t<h2>{{arrayData[0].username}}</h2>\n\t\t\t\t<p>{{arrayData[0].biography}}</p>\n\t\t\t\t<h2 class=\"count\">Followers Count | {{arrayData[0].followerCount}}</h2>\n\t\t\t</div>\n\t\t\t\t<ul>\n\t\t\t\t\t<li  class=\"active\"><a href=\"#\">Interests</a></li>\n\t\t\t\t\t<li *ngFor=\"let data of arrayData[0].stats.interests\"><a href=\"#\">{{data}}</a></li>\n\t\t\t\t</ul>\n    </div>\n\t</div>\n\t\n\t"

/***/ }),

/***/ "./src/app/detailed-bio/detailed-bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedBioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_service__ = __webpack_require__("./src/app/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailedBioComponent = /** @class */ (function () {
    function DetailedBioComponent(route, _sortService) {
        this.route = route;
        this._sortService = _sortService;
        this.userdata = {};
    }
    DetailedBioComponent.prototype.ngOnInit = function () {
        this.parameters = this.route.snapshot.paramMap.get('username');
        console.log(this.parameters);
        this.getData();
    };
    DetailedBioComponent.prototype.getData = function () {
        var _this = this;
        console.log("GETTTTTTTTTTt", this.parameters);
        this._sortService.getUserData(this.parameters).subscribe(function (data) { _this.arrayData = data; }, function (err) { return console.error(err); }, function () { return console.log("HEYYYYYYYYYYYYYYYYYYYYYYYY", _this.arrayData, _this.parameters); });
    };
    DetailedBioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detailed-bio',
            template: __webpack_require__("./src/app/detailed-bio/detailed-bio.component.html"),
            styles: [__webpack_require__("./src/app/detailed-bio/detailed-bio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__sort_service__["a" /* SortService */]])
    ], DetailedBioComponent);
    return DetailedBioComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, selectedItems) {
        if (!items)
            return [];
        if (selectedItems.length == 0) {
            return items;
        }
        var dataToBePushed = [];
        console.log("SelectedItems", selectedItems);
        items.map(function (item) {
            item.stats.interests.map(function (interest) {
                for (var i = 0; i < selectedItems.length; i++) {
                    if (interest == selectedItems[i]) {
                        var flag = true;
                        dataToBePushed.map(function (data) {
                            if (data.username == item.username) {
                                flag = false;
                            }
                        });
                        if (flag == true) {
                            dataToBePushed.push(item);
                        }
                    }
                }
            });
        });
        return dataToBePushed;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    \r\n  }\r\n.main{\r\n  padding-top: 30px;\r\n}\r\n.row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n[class*=\"col-\"] {\r\n    float: left;\r\n    padding: 5px;\r\n  }\r\n.col-1 {width: 8.33%;}\r\n.col-2 {width: 16.66%;}\r\n.col-3 {width: 25%;}\r\n.col-4 {width: 33.33%;}\r\n.col-5 {width: 41.66%;}\r\n.col-6 {width: 50%;}\r\n.col-7 {width: 58.33%;}\r\n.col-8 {width: 66.66%;}\r\n.col-9 {width: 75%;}\r\n.col-10 {width: 83.33%;}\r\n.col-11 {width: 91.66%;}\r\n.col-12 {width: 100%;}\r\n.dropbtn {\r\n    width: 100%;\r\n    background-color: #2980b9;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n.dropdown-multi {\r\n    padding: 16px;\r\n  }\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #2980b9}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {\r\n    background-color: #2980b9;\r\n  }\r\ninput[type=text], select {\r\n    width: 100%;\r\n    padding: 16px;\r\n    margin: 0px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\n.ngx-pagination{\r\n    margin-left: 25%;\r\n}\r\n.menu {\r\n    font-family: 'Roboto', sans-serif; \r\n    height: 600px;\r\n    width: 25%;\r\n    float: left;\r\n    padding: 15px;\r\n  }\r\n.card-column{\r\n    float: left;\r\n    width: 33.33%;\r\n  }\r\n.card {\r\n    position: relative;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    height: 100%;\r\n    margin: auto;\r\n    text-align: center;\r\n  }\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n  }\r\n.biography{\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    padding: 5px;\r\n  }\r\n.bottom{\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n.cardButton {\r\n    border: none;\r\n    margin-bottom: 0%;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #2980b9;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\na[id=\"link\"] {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: white;\r\n  }\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\n@media only screen and (max-width: 768px) {\r\n    [class*=\"col-\"] {\r\n        width: 100%;\r\n        padding: 5px;\r\n      }\r\n\r\n      .menu {\r\n          width: 50%;\r\n          height: 650px;\r\n          padding: 5px;\r\n      }\r\n\r\n    .ngx-pagination{\r\n        margin-left: 10%;\r\n    }\r\n  }\r\n@media only screen and (max-width: 768px) {\r\n    [class*=\"col-\"] {\r\n        width: 100%;\r\n        padding: 5px;\r\n      }\r\n\r\n      .menu {\r\n          width: 90%;\r\n          height: 700px;\r\n          padding: 10%;\r\n      }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" (window:resize)=\"onResize($event)\">\n<div class=\"row\">\n  <div class=\"col-2\">\n      <div class=\"dropdown\">\n          <button class=\"dropbtn\" id=\"dropdownMenuButton\">\n            Sort the list\n          </button>\n          <div class=\"dropdown-content\">\n            <a  (click)=\"sortByFollowersDesc()\" href=\"#\">Followers Decreasing</a>\n            <a  (click)=\"sortByFollowersAsc()\" href=\"#\">Followers Increasing</a>\n            <a  (click)=\"sortByEngagementDesc()\" href=\"#\">Engagement Decreasing</a>\n            <a  (click)=\"sortByEngagementAsc()\" href=\"#\">Engagement Increasing</a>\n          </div>\n        </div>\n  </div>\n  <div class=\"col-6\">\n                 <input type=\"text\" [(ngModel)]=\"searchText\" (keyup.enter)=\"onKeyUp()\" id=\"exampleInput\" placeholder=\"Type To Search from Bio\">\n  </div>\n  <div class=\"col-3\">\n    <div class=\"dropdown-multi\">\n              <ng-multiselect-dropdown\n              [placeholder]=\"'Filter By Interests'\"\n              [data]=\"dropdownList\"\n              [(ngModel)]=\"selectedItems\"\n              [settings]=\"dropdownSettings\"\n              (onSelect)=\"onItemSelect($event)\"\n              (onDeSelect)=\"onItemDeSelect($event)\"\n          >\n          </ng-multiselect-dropdown>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"row\">  \n  <div class=\"menu\" *ngFor=\"let array of arrayData | filter : selectedItems | search : searchText | paginate: { itemsPerPage: 12, currentPage: p } \">\n      <div class=\"card\">\n          <img [src]=\"array.picture\" style=\"width:100%\">\n            <h3 class=\"card-title\">{{array.fullName}}</h3>\n            <p class=\"title\">{{array.username}}</p>\n            <p class=\"biography\">{{array.biography}}</p>\n            <div class=\"bottom\">\n            <p><button class=\"cardButton\"><a id=\"link\" [routerLink]=\"['/bio', array.username]\">Know More</a></button></p>\n            </div>\n      </div>\n  </div>\n</div>\n<br>\n<br>\n<br>\n<div class=\"pagination-margin\">\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_service__ = __webpack_require__("./src/app/sort.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_sortService) {
        this._sortService = _sortService;
        this.searchText = '';
        this.p = 1;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.itmesSelected = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dropdownList = ["Arts", "Beauty", "Entertainment", "Fashion & accessory", "Fitness", "Food & beverages", "Leisure", "Lifestyle", "Music", "Outdoors", "Parenting", "Pets and animals", "Photography", "Sports", "Toys", "Travel", "Vehicles"];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
        this.sortByFollowersDesc();
    };
    HomeComponent.prototype.onResize = function (event) {
        console.log("WINDOW RESIZING", event.target.innerWidth);
        if (event.target.innerWidth <= 768) {
            console.log("WINDOW RESIZING WVWNT");
            $('.ngx-pagination').css('margin-left', '5%');
        }
    };
    HomeComponent.prototype.onKeyUp = function () {
        console.log(this.searchText);
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        $('.multiselect-item-checkbox').children().eq(1).css('display', 'none');
        $('.ngx-pagination').css('margin-left', '27%');
        $('.dropdown-multi[_ngcontent-c1]').css('padding', '0px');
        $('.dropdown-btn[_ngcontent-c2]').css('padding', '12px');
    };
    HomeComponent.prototype.hidingSelctAll = function () {
        $('.multiselect-item-checkbox').children().eq(1).css('display', 'none');
    };
    HomeComponent.prototype.onItemSelect = function (item) {
        var flag = true;
        for (var i = 0; i < this.itmesSelected.length; i++) {
            if (this.itmesSelected[i] == item) {
                flag = false;
            }
        }
        if (flag == true) {
            this.itmesSelected.push(item);
        }
        console.log(this.itmesSelected);
    };
    HomeComponent.prototype.onItemDeSelect = function (items) {
        console.log(items);
        var indexOfItem = this.itmesSelected.indexOf(items);
        this.itmesSelected.splice(indexOfItem, 1);
        console.log(this.itmesSelected);
    };
    HomeComponent.prototype.sortByFollowersDesc = function () {
        var _this = this;
        this._sortService.sortByFollowersDesc().subscribe(function (data) { _this.arrayData = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading data', _this.arrayData); });
    };
    HomeComponent.prototype.sortByFollowersAsc = function () {
        var _this = this;
        this._sortService.sortByFollowersAsc().subscribe(function (data) { _this.arrayData = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading data', _this.arrayData); });
    };
    HomeComponent.prototype.sortByEngagementAsc = function () {
        var _this = this;
        this._sortService.sortByEngagementAsc().subscribe(function (data) { _this.arrayData = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading data', _this.arrayData); });
    };
    HomeComponent.prototype.sortByEngagementDesc = function () {
        var _this = this;
        this._sortService.sortByEngagementDesc().subscribe(function (data) { _this.arrayData = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading data', _this.arrayData); });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sort_service__["a" /* SortService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText) {
            return items;
        }
        var dataToBePushed = [];
        console.log("SelectedItems", searchText.toLowerCase());
        items.map(function (item) {
            if (item.biography.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                dataToBePushed.push(item);
            }
        });
        return dataToBePushed;
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/sort.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var SortService = /** @class */ (function () {
    function SortService(http) {
        this.http = http;
    }
    SortService.prototype.getUserData = function (username) {
        console.log('http://127.0.0.1:8080/bio?username=' + username);
        var data = this.http.get('http://127.0.0.1:8080/bio?username=' + username);
        console.log("SORRRRRRRRRRRRRRRRRRRRR", data);
        return this.http.get('http://127.0.0.1:8080/bio?username=' + username);
    };
    SortService.prototype.sortByFollowersAsc = function () {
        return this.http.get('http://127.0.0.1:8080/sortasc');
    };
    SortService.prototype.sortByFollowersDesc = function () {
        return this.http.get('http://127.0.0.1:8080/sortdesc');
    };
    SortService.prototype.sortByEngagementAsc = function () {
        return this.http.get('http://127.0.0.1:8080/sortengasc');
    };
    SortService.prototype.sortByEngagementDesc = function () {
        return this.http.get('http://127.0.0.1:8080/sortengdesc');
    };
    SortService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SortService);
    return SortService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map