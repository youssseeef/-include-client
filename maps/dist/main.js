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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>{{title}}</h1>\n  <app-map></app-map>\n</div>\n"

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
        this.title = 'INCLUDE!';
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_map_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/map.service */ "./src/app/components/map/map.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_qrcomponent_qrcomponent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/qrcomponent/qrcomponent.component */ "./src/app/components/qrcomponent/qrcomponent.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                _components_qrcomponent_qrcomponent_component__WEBPACK_IMPORTED_MODULE_7__["QrcomponentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDd-4nZI3trYvjXstsCzT-tk9aU1HuDe5s'
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__["QRCodeModule"]
            ],
            providers: [_components_map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 500px;\n}\n"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=16>\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"'assets/myself.png'\"></agm-marker>\n    <agm-marker *ngFor=\"let car of otherCarMarkers\" [latitude]=\"car.lat\" [iconUrl]=\"'assets/othercar.png'\" [longitude]=\"car.lng\"></agm-marker>\n</agm-map>"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.service */ "./src/app/components/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    /**
     * {
      lat:30.851235,
      lng:29.5706148,
      i:1
    },
    {
      lat:30.851235,
      lng:29.5766148,
      i:9
    },
    {
      lat:30.851235,
      lng:29.5806148,
      i:18
    },
    {
      lat:30.851235,
      lng:29.5806148,
      i:18
    }
      //simulationArray = [{"lon":29.5621114,"lat":30.837624,"ele":62},{"lon":29.561996622915963,"lat":30.837774466622097,"ele":63},{"lon":29.561881845831927,"lat":30.837924933244192,"ele":65},{"lon":29.56176706874789,"lat":30.838075399866288,"ele":67},{"lon":29.561652291663854,"lat":30.838225866488383,"ele":67},{"lon":29.56153751457982,"lat":30.838376333110478,"ele":68},{"lon":29.561422737495782,"lat":30.838526799732573,"ele":67},{"lon":29.561307960411746,"lat":30.83867726635467,"ele":66},{"lon":29.56119318332771,"lat":30.838827732976764,"ele":64},{"lon":29.561078406243674,"lat":30.83897819959886,"ele":64},{"lon":29.560963629159637,"lat":30.839128666220954,"ele":64},{"lon":29.5608488520756,"lat":30.83927913284305,"ele":66},{"lon":29.560734074991565,"lat":30.839429599465145,"ele":67},{"lon":29.56061929790753,"lat":30.83958006608724,"ele":69},{"lon":29.560504520823493,"lat":30.839730532709336,"ele":69},{"lon":29.560389743739456,"lat":30.83988099933143,"ele":71},{"lon":29.56027496665542,"lat":30.840031465953526,"ele":72},{"lon":29.560160189571384,"lat":30.84018193257562,"ele":73},{"lon":29.560045412487348,"lat":30.840332399197717,"ele":73},{"lon":29.559930635403312,"lat":30.840482865819812,"ele":73},{"lon":29.559815858319276,"lat":30.840633332441907,"ele":73},{"lon":29.55970108123524,"lat":30.840783799064003,"ele":73},{"lon":29.559586304151203,"lat":30.840934265686098,"ele":72},{"lon":29.559471527067167,"lat":30.841084732308193,"ele":72},{"lon":29.55935674998313,"lat":30.84123519893029,"ele":71},{"lon":29.559241972899095,"lat":30.841385665552384,"ele":71},{"lon":29.55912719581506,"lat":30.84153613217448,"ele":71},{"lon":29.559012418731022,"lat":30.841686598796574,"ele":72},{"lon":29.558897641646986,"lat":30.84183706541867,"ele":72},{"lon":29.55878286456295,"lat":30.841987532040765,"ele":71},{"lon":29.558668087478914,"lat":30.84213799866286,"ele":71},{"lon":29.558553310394878,"lat":30.842288465284955,"ele":72},{"lon":29.55843853331084,"lat":30.84243893190705,"ele":73},{"lon":29.558323756226805,"lat":30.842589398529146,"ele":74},{"lon":29.55820897914277,"lat":30.84273986515124,"ele":75},{"lon":29.558094202058733,"lat":30.842890331773336,"ele":75},{"lon":29.557979424974697,"lat":30.843040798395432,"ele":73},{"lon":29.55786464789066,"lat":30.843191265017527,"ele":71},{"lon":29.557749870806624,"lat":30.843341731639622,"ele":68},{"lon":29.55763509372259,"lat":30.843492198261718,"ele":69},{"lon":29.557520316638552,"lat":30.843642664883813,"ele":71},{"lon":29.557405539554512,"lat":30.843793131505908,"ele":74},{"lon":29.557290762470476,"lat":30.843943598128003,"ele":76},{"lon":29.557175985386436,"lat":30.8440940647501,"ele":78},{"lon":29.5570612083024,"lat":30.844244531372194,"ele":78},{"lon":29.55694643121836,"lat":30.84439499799429,"ele":79},{"lon":29.556831654134324,"lat":30.844545464616385,"ele":80},{"lon":29.556716877050285,"lat":30.84469593123848,"ele":81},{"lon":29.55660209996625,"lat":30.844846397860575,"ele":79},{"lon":29.55648732288221,"lat":30.844996864482667,"ele":76},{"lon":29.556372545798173,"lat":30.845147331104762,"ele":73},{"lon":29.556257768714133,"lat":30.845297797726854,"ele":71},{"lon":29.556142991630097,"lat":30.84544826434895,"ele":69},{"lon":29.556028214546057,"lat":30.84559873097104,"ele":68},{"lon":29.55591343746202,"lat":30.845749197593136,"ele":68},{"lon":29.55579866037798,"lat":30.845899664215228,"ele":70},{"lon":29.555683883293945,"lat":30.846050130837323,"ele":73},{"lon":29.555569106209905,"lat":30.846200597459415,"ele":77},{"lon":29.55545432912587,"lat":30.84635106408151,"ele":79},{"lon":29.55533955204183,"lat":30.846501530703602,"ele":79},{"lon":29.555224774957793,"lat":30.846651997325697,"ele":79},{"lon":29.555109997873753,"lat":30.84680246394779,"ele":76},{"lon":29.554995220789717,"lat":30.846952930569884,"ele":71},{"lon":29.554880443705677,"lat":30.847103397191976,"ele":71},{"lon":29.55476566662164,"lat":30.84725386381407,"ele":70},{"lon":29.5546508895376,"lat":30.847404330436163,"ele":71},{"lon":29.554536112453565,"lat":30.847554797058258,"ele":70},{"lon":29.554421335369526,"lat":30.84770526368035,"ele":70},{"lon":29.55430655828549,"lat":30.847855730302445,"ele":68},{"lon":29.55419178120145,"lat":30.848006196924537,"ele":67},{"lon":29.554077004117413,"lat":30.848156663546632,"ele":67},{"lon":29.553962227033374,"lat":30.848307130168724,"ele":67},{"lon":29.553847449949338,"lat":30.84845759679082,"ele":69},{"lon":29.553732672865298,"lat":30.84860806341291,"ele":70},{"lon":29.55361789578126,"lat":30.848758530035006,"ele":69},{"lon":29.553503118697222,"lat":30.848908996657098,"ele":68},{"lon":29.553388341613186,"lat":30.849059463279193,"ele":67},{"lon":29.553273564529146,"lat":30.849209929901285,"ele":68},{"lon":29.55315878744511,"lat":30.84936039652338,"ele":68},{"lon":29.5531314,"lat":30.8493963,"ele":68}];
  
     */
    function MapComponent(mapService) {
        this.mapService = mapService;
        // these are where we center the user in the map.
        // these should be the user's location
        this.lat = 31.254567;
        this.lng = 29.978568;
        this.iter = 0;
        this.otherCarMarkers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.defaultCall();
    };
    MapComponent.prototype.defaultCall = function () {
        var that = this;
        setTimeout(function () {
            that.mapService.getNearbyCars(function (value) {
                if (value && value.thisCar && value.thisCar.lng && value.thisCar.lat) {
                    that.lng = value.thisCar.lng;
                    that.lat = value.thisCar.lat;
                }
                // if(that.iter<that.simulationArray.length){
                //   that.otherCarMarkers[3] =({
                //     lat:that.simulationArray[that.iter].lat,
                //     lng:that.simulationArray[that.iter].lon,
                //     i:that.iter
                //   })
                //   that.iter++;
                // }
            });
            // that.otherCarMarkers[0].lat += 0.0001;
            that.defaultCall();
        }, 1500);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.service.ts":
/*!***********************************************!*\
  !*** ./src/app/components/map/map.service.ts ***!
  \***********************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
        this.NEARBY_CARS_URL = 'http://localhost:43421/getNearbyCars';
    }
    MapService.prototype.getNearbyCars = function (callback) {
        this.http.get(this.NEARBY_CARS_URL).toPromise().then(function (value) {
            callback(value);
        }).catch(function (rejection) {
            console.log(rejection);
        });
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/components/qrcomponent/qrcomponent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/qrcomponent/qrcomponent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/qrcomponent/qrcomponent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/qrcomponent/qrcomponent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  qrcomponent works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/qrcomponent/qrcomponent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/qrcomponent/qrcomponent.component.ts ***!
  \*****************************************************************/
/*! exports provided: QrcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcomponentComponent", function() { return QrcomponentComponent; });
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

var QrcomponentComponent = /** @class */ (function () {
    function QrcomponentComponent() {
    }
    QrcomponentComponent.prototype.ngOnInit = function () {
    };
    QrcomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qrcomponent',
            template: __webpack_require__(/*! ./qrcomponent.component.html */ "./src/app/components/qrcomponent/qrcomponent.component.html"),
            styles: [__webpack_require__(/*! ./qrcomponent.component.css */ "./src/app/components/qrcomponent/qrcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QrcomponentComponent);
    return QrcomponentComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/nordicsparrow/Data/College/Gradproject/include/client_v2/include-client/maps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map