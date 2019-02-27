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

module.exports = ".multiselect-item-checkbox{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          \n        </div>\n      </nav>\n      <router-outlet></router-outlet>\n</div>\n\n\n"

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

module.exports = "body{\r\n    background: -webkit-gradient(linear, left top, right top, color-stop(50%, #e8e8e8), color-stop(50%, #3d009e));\r\n    background: linear-gradient(90deg, #e8e8e8 50%, #3d009e 50%);\r\n}\r\n.portfolio{\r\n    padding:6%;\r\n    text-align:center;\r\n}\r\n.heading{\r\n    background: #fff;\r\n    padding: 1%;\r\n    text-align: left;\r\n    -webkit-box-shadow: 0px 0px 4px 0px #545b62;\r\n            box-shadow: 0px 0px 4px 0px #545b62;\r\n}\r\n.heading img{\r\n    width: 10%;\r\n}\r\n.bio-info{\r\n    padding: 5%;\r\n    background:#fff;\r\n    -webkit-box-shadow: 0px 0px 4px 0px #b0b3b7;\r\n            box-shadow: 0px 0px 4px 0px #b0b3b7;\r\n}\r\n.name{\r\n    font-family: 'Charmonman', cursive;\r\n    font-weight:600;\r\n}\r\n.bio-image{\r\n    text-align:center;\r\n}\r\n.bio-image img{\r\n    border-radius:50%;\r\n}\r\n.bio-content{\r\n    text-align:left;\r\n}\r\n.bio-content p{\r\n    font-weight:200;\r\n    font-size:20px;\r\n}"

/***/ }),

/***/ "./src/app/detailed-bio/detailed-bio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container portfolio\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"heading\">\t\n        <a routerLink=\"/\">Go Back</a>\n      </div>\n    </div>\t\n\t</div>\n\t<div class=\"bio-info\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"bio-image\">\n\t\t\t\t\t\t\t<img [src]=\"arrayData[0].picture\" alt=\"image\" />\n\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"bio-content\">\n          <h1>{{arrayData[0].fullName}}</h1>\n          <h5>{{arrayData[0].username}}</h5>\n          <p>{{arrayData[0].biography}}</p>\n          <ul class=\"list-group list-group-horizontal\">\n              <li class=\"list-group-item\">Followers Count</li>\n            <li class=\"list-group-item\">{{arrayData[0].followerCount}}</li>\n          </ul>\n          <br>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item active\">Interests</li>\n            <li class=\"list-group-item\" *ngFor=\"let data of arrayData[0].stats.interests\">{{data}}</li>\n          </ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>"

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

module.exports = ".card{\r\n    margin: 10px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n.card-img-top{\r\n    padding : 10px;\r\n}\r\n.card-body{\r\n    height: 300px;\r\n}\r\n.ngx-pagination{\r\n    margin-left: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n  <div class=\"col-md-3\">\n      <div class=\"dropdown\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Sort the list\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" (click)=\"sortByFollowersDesc()\" href=\"#\">Followers Decreasing</a>\n            <a class=\"dropdown-item\" (click)=\"sortByFollowersAsc()\" href=\"#\">Followers Increasing</a>\n            <a class=\"dropdown-item\" (click)=\"sortByEngagementDesc()\" href=\"#\">Engagement Decreasing</a>\n            <a class=\"dropdown-item\" (click)=\"sortByEngagementAsc()\" href=\"#\">Engagement Increasing</a>\n          </div>\n        </div>\n  </div>\n  <div class=\"col-md-5\">\n        <div class=\"form-group\">\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keyup.enter)=\"onKeyUp()\" id=\"exampleInput\" aria-describedby=\"emailHelp\" placeholder=\"Type To Search from Bio\">\n        </div>\n  </div>\n  <div class=\"col-md-4\">\n      <ng-multiselect-dropdown\n          [placeholder]=\"'Filter By Interests'\"\n          [data]=\"dropdownList\"\n          [(ngModel)]=\"selectedItems\"\n          [settings]=\"dropdownSettings\"\n          (onSelect)=\"onItemSelect($event)\"\n          (onDeSelect)=\"onItemDeSelect($event)\"\n      >\n</ng-multiselect-dropdown>\n  </div>\n</div>\n<br>\n<div class=\"row\">  \n  <div class=\"col-md-3 lg-3\" *ngFor=\"let array of arrayData | filter : selectedItems | search : searchText | paginate: { itemsPerPage: 12, currentPage: p } \">\n      <div class=\"card\" style=\"width: 18rem;\">\n          <img [src]=\"array.picture\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{array.fullName}}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{array.username}}</h6>\n            <p class=\"card-text\">{{array.biography}}</p>\n            <a id=\"link\" [routerLink]=\"['/bio', array.username]\" class=\"btn btn-primary\" >Know More</a>\n          </div>\n      </div>\n  </div>\n</div>\n<br>\n<br>\n<br>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>"

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
    HomeComponent.prototype.onKeyUp = function () {
        console.log(this.searchText);
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        $('.multiselect-item-checkbox').children().eq(1).css('display', 'none');
        $('.ngx-pagination').css('margin-left', '27%');
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