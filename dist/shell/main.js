(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\"\r\n  data-background-color=\"white\"\r\n  data-active-color=\"danger\">\r\n\r\n    <sidebar-cmp></sidebar-cmp>\r\n  </div>\r\n\r\n  <div class=\"main-panel\">\r\n    <navbar-cmp></navbar-cmp>\r\n    <div id=\"content\" class=\"content\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar bar1\"></span>\n              <span class=\"icon-bar bar2\"></span>\n              <span class=\"icon-bar bar3\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Flight42</a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"ti-panel\"></i>\n                      <p>Stats</p>\n                  </a>\n              </li>\n              <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"ti-bell\"></i>\n                          <p class=\"notification\">5</p>\n                          <p>Notifications</p>\n                          <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Notification 1</a></li>\n                      <li><a href=\"#\">Notification 2</a></li>\n                      <li><a href=\"#\">Notification 3</a></li>\n                      <li><a href=\"#\">Notification 4</a></li>\n                      <li><a href=\"#\">Another notification</a></li>\n                    </ul>\n              </li>\n              <li>\n                  <a href=\"#\">\n                      <i class=\"ti-settings\"></i>\n                      <p>Settings</p>\n                  </a>\n              </li>\n          </ul>\n\n      </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"sidebar-wrapper\">\r\n  <div class=\"logo\">\r\n      <a class=\"simple-text\">\r\n          <div class=\"logo-img\">\r\n              <img src=\"../../assets/img/angular2-logo.png\" alt=\"\">\r\n          </div>\r\n          Flight42\r\n      </a>\r\n  </div>\r\n  <ul class=\"nav\">\r\n      <li>\r\n          <a href=\"#/home\">\r\n              <i class=\"ti-home\"></i>\r\n              <p>Home</p>\r\n          </a>\r\n      </li>\r\n\r\n      <li>\r\n          <!-- href=\"#/client-a/page1\" -->\r\n          <a (click)=\"navigate('/client-a/page1')\">\r\n              <i class=\"ti-arrow-top-right\"></i>\r\n              <p>Flights</p>\r\n          </a>\r\n      </li>\r\n\r\n      <li>\r\n          <a (click)=\"navigate('/client-b/page1')\">\r\n              <i class=\"ti-user\"></i>\r\n              <p>Passengers</p>\r\n          </a>\r\n      </li>\r\n\r\n      <li>\r\n          <a (click)=\"navigate('/client-c')\">\r\n              <i class=\"ti-user\"></i>\r\n              <p>Bookings</p>\r\n          </a>\r\n      </li>\r\n\r\n      <li>\r\n          <a (click)=\"navigate('/client-d/payment')\">\r\n              <i class=\"ti-user\"></i>\r\n              <p>Payment</p>\r\n          </a>\r\n      </li>\r\n\r\n      <!--\r\n          <li routerLinkActive=\"active\">\r\n          <a>\r\n              <i class=\"ti-shopping-cart\"></i>\r\n              <p>Basket</p>\r\n          </a>\r\n          </li>\r\n          <li routerLinkActive=\"active\">\r\n          <a>\r\n              <i class=\"ti-close\"></i>\r\n              <p>Hide Basket</p>\r\n          </a>\r\n          </li>\r\n      -->\r\n\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#nav {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px black solid;\n  margin-bottom: 20px;\n}\n\na, a:visited, a:active {\n  color: black;\n  text-decoration: none;\n}\n\na:hover {\n  color: black;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSb2xpdmVyXFxEb2N1bWVudHNcXGRhc2hib2FyZC1lbG1lbnRzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmEsIGE6dmlzaXRlZCwgYTphY3RpdmUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iLCIjbmF2IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/shell.service */ "./src/app/shell/shell.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(shellService) {
        this.shellService = shellService;
        this.title = 'dashboard-elments';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.shellService.init({
            initialRoute: '/home',
            outletId: 'content',
            preload: true,
            clients: {
                'client-a': {
                    loaded: false,
                    //src: 'assets/micro-frontends/client-a/main.js',
                    src: 'https://client-a.netlify.com/main.js',
                    element: 'client-a',
                    route: '/client-a'
                },
                'client-b': {
                    loaded: false,
                    src: 'assets/micro-frontends/client-b/main.js',
                    element: 'client-b',
                    route: '/client-b'
                }
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (!this.sidebarVisible) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar-cmp',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.service.ts":
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/*! exports provided: ShellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellService", function() { return ShellService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ShellService = /** @class */ (function () {
    function ShellService() {
        this.urlManageBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ShellService.prototype.init = function (config) {
        var _this = this;
        this.config = config;
        if (!location.hash && config.initialRoute) {
            this.urlManageBS.next(config.initialRoute);
        }
        this.urlManageBS.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return location.hash = val; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.urlChanged(); })).subscribe();
        // setTimeout(() => this.urlChanged(), 0);
        if (config.preload) {
            this.preloadClients();
        }
    };
    ShellService.prototype.urlChanged = function () {
        // tslint:disable-next-line: forin
        for (var client in this.config.clients) {
            var entry = this.config.clients[client];
            var route = '#' + entry.route;
            if (location.hash.startsWith(route)) {
                // Lazy load module if still not loaded
                if (!entry.loaded) {
                    this.load(client);
                }
                else {
                    this.showClient(client);
                }
            }
            else if (entry.loaded) {
                this.hideClient(client);
            }
        }
    };
    ShellService.prototype.showClient = function (clientName) {
        this.setClientVisibility(clientName, true);
    };
    ShellService.prototype.hideClient = function (clientName) {
        this.setClientVisibility(clientName, false);
    };
    ShellService.prototype.setClientVisibility = function (clientName, show) {
        var entry = this.config.clients[clientName];
        if (!entry) {
            throw new Error("Client " + clientName + " is not configured.");
        }
        var elms = document.getElementsByTagName(entry.element);
        if (elms.length === 0) {
            throw new Error("Client " + clientName + " is not loaded.");
        }
        if (elms.length > 1) {
            throw new Error("Client " + clientName + " is loaded several times.");
        }
        var elm = elms[0];
        // tslint:disable-next-line: no-string-literal
        elm['hidden'] = !show;
    };
    ShellService.prototype.load = function (name) {
        var configItem = this.config.clients[name];
        // Don't load bundle twice
        if (configItem.loaded) {
            return;
        }
        configItem.loaded = true;
        var content = document.getElementById(this.config.outletId || 'content');
        // Add tag for micro frontend, e. g. <client-a></client-a>
        var element = document.createElement(configItem.element);
        // tslint:disable-next-line: no-string-literal
        element['hidden'] = !location.hash.startsWith('#' + configItem.route);
        content.appendChild(element);
        // Add script-tag(s) to load bundle
        var files = typeof configItem.src === 'string' ? [configItem.src] : configItem.src;
        files.forEach(function (src) {
            var script = document.createElement('script');
            script.src = src;
            content.appendChild(script);
        });
    };
    ShellService.prototype.preloadClients = function () {
        // tslint:disable-next-line: forin
        for (var client in this.config.clients) {
            this.load(client);
        }
    };
    ShellService.prototype.navigate = function (url) {
        var pos = location.hash.indexOf('?');
        var query = pos !== -1 ? location.hash.substr(pos) : '';
        // location.hash = url + query;
        this.urlManageBS.next((url + query));
    };
    ShellService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShellService);
    return ShellService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/shell.service */ "./src/app/shell/shell.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(shellService) {
        this.shellService = shellService;
    }
    SidebarComponent.prototype.navigate = function (url) {
        this.shellService.navigate(url);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidebar-cmp',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roliver\Documents\dashboard-elments\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map