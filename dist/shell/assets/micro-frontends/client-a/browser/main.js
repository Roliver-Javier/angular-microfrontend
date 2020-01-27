(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Roliver/Documents/dashboard-elments/node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  error works!\n</p>\n");

/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'client-a',
            template: "\n    <div id=\"client-a\">\n      <div class=\"card\">\n        <div class=\"content\">\n          <a routerLink=\"client-a/page1\" queryParamsHandling=\"merge\">Flight Search</a> | <a routerLink=\"client-a/page2\" queryParamsHandling=\"merge\">Advanced</a>\n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  ",
            styles: ["#client-a { border: darkred dashed 5px; padding: 10px }"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_a_widget_client_a_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-a-widget/client-a-widget.component */ "./src/app/client-a-widget/client-a-widget.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");











var AppModule = /** @class */ (function () {
    function AppModule(injector, platformId) {
        this.injector = injector;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["isPlatformBrowser"])(platformId)) {
            var createCustomElement = __webpack_require__(/*! @angular/elements */ "../../node_modules/@angular/elements/fesm5/elements.js").createCustomElement;
            var widgetElement = createCustomElement(_client_a_widget_client_a_widget_component__WEBPACK_IMPORTED_MODULE_7__["ClientAWidgetComponent"], { injector: this.injector });
            customElements.define('client-a-widget', widgetElement);
        }
    }
    AppModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'client-a/page1' },
                    {
                        path: 'client-a', children: [
                            { path: 'page1', component: _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"] },
                            { path: 'page2', component: _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"] },
                        ]
                    },
                    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"] }
                ], { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"],
                _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _client_a_widget_client_a_widget_component__WEBPACK_IMPORTED_MODULE_7__["ClientAWidgetComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [
                _client_a_widget_client_a_widget_component__WEBPACK_IMPORTED_MODULE_7__["ClientAWidgetComponent"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            Object])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client-a-widget/client-a-widget.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/client-a-widget/client-a-widget.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientAWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAWidgetComponent", function() { return ClientAWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var ClientAWidgetComponent = /** @class */ (function () {
    function ClientAWidgetComponent() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ClientAWidgetComponent.prototype.ngOnInit = function () {
        this.control.valueChanges.subscribe(function (x) { return console.debug(x); });
        this.value$ = this.control.valueChanges;
    };
    ClientAWidgetComponent.prototype.clickMe = function () {
        console.debug('ouch!');
    };
    ClientAWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            //selector: 'client-a-widget',
            template: "\n  <div id=\"widget\">\n  <div class=\"card\">\n    <div class=\"header\">\n      <h1>Your Flights</h1>\n    </div>\n    <div class=\"content\">\n  <table class=\"table table-contensed table-striped\">\n      <thead>\n      <tr>\n          <th>Id</th>\n          <th>From</th>\n          <th>To</th>\n      </tr>\n      </thead>\n      <tr>\n          <td>4711</td>\n          <td>Graz</td>\n          <td>Frankfurt</td>\n      </tr>\n      <tr>\n          <td>4712</td>\n          <td>Frankfurt</td>\n          <td>Graz</td>\n      </tr>\n\n      </table>\n  </div>\n</div>\n</div>\n\n\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            styles: ["\n        #widget { padding:10px; border: 2px darkred dashed }\n  "]
        })
    ], ClientAWidgetComponent);
    return ClientAWidgetComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQtYS9zcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var Page1Component = /** @class */ (function () {
    function Page1Component(router) {
        this.router = router;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    Page1Component.prototype.search = function () {
        this.router.navigate(['.'], { queryParamsHandling: 'merge', queryParams: { id: 17 } });
        window.dispatchEvent(new CustomEvent('client-message', { detail: 17 }));
    };
    Page1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Page1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <div class=\"card\">\n\n  <div class=\"header\">\n      <h2 class=\"title\">Flight Searchs</h2>\n  </div>\n  <div class=\"content\">\n\n\n      <div class=\"form-group\">\n          <label>From:</label>\n          <input name=\"from\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label>To:</label>\n          <input name=\"to\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n          <button\n              class=\"btn btn-default\" (click)=\"search()\">Search</button>\n\n          </div>\n\n  </div>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var Page2Component = /** @class */ (function () {
    function Page2Component() {
    }
    Page2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <div class=\"card\">\n\n  <div class=\"header\">\n      <h2 class=\"title\">Advanced Flight Search</h2>\n  </div>\n  <div class=\"content\">\n  \n  \n      <div class=\"form-group\">\n          <label>From:</label>\n          <input name=\"from\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label>To:</label>\n          <input name=\"to\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label>To:</label>\n          <input name=\"to\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label>To:</label>\n          <input name=\"to\" class=\"form-control\">\n      </div>\n  \n      <div class=\"form-group\">\n          <button \n              class=\"btn btn-default\">Search</button>\n  \n          </div>\n  \n  </div>\n  \n  </div>\n  "
        })
    ], Page2Component);
    return Page2Component;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false,
    standalone: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    // Let the host app decide about prod mode
    // enableProdMode();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roliver\Documents\dashboard-elments\projects\client-a\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map