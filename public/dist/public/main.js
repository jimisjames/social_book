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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    max-width: 1000px;\n    margin: auto;\n}\n\nbody{\n    max-width: 1000px;\n    padding: 0px 30px;\n    margin: 5px auto 0px;\n    background-color: rgb(221, 221, 221);\n}\n\n#top{\n    background-color: rgb(185, 218, 230);\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'\n  crossorigin='anonymous'> <!-- Bootstrap -->\n<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> <!-- jQuery -->\n<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49'\n  crossorigin='anonymous'></script> <!-- Bootstrap -->\n<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy'\n  crossorigin='anonymous'></script> <!-- Bootstrap -->\n\n<div id=\"top\">\n  <h1>My Messager</h1>\n</div>\n<body>\n  <router-outlet></router-outlet>\n</body>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
                _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    padding-top: 15px;\n    padding-bottom: 55px;\n    background-color: inherit\n}\n\n.comment{\n    max-width: 400px;\n    border: 1px solid rgb(180, 180, 180);\n    border-radius: 3px;\n    padding: 10px;\n    margin-left: 10px;\n    background-color: white;\n}\n\n.comments{\n    border: 1px solid rgb(165, 165, 165);\n    border-radius: 3px;\n    background-color: rgb(187, 187, 187);\n    max-width: 300px;\n    padding: 10px 0 5px 0;\n    margin: 10px;\n}\n\n.form{\n    padding: 0 30px;\n}\n\n.post{\n    margin: 30px;\n    background-color: rgb(185, 218, 230);\n    border: 1px solid rgb(180, 180, 180);\n    border-radius: 3px;\n    padding: 15px;\n}\n\n.red{\n    color: red;\n}\n\n.thumb{\n    max-width: 25px;\n}\n\n.name{\n    max-width: 200px;\n}\n\n.space {\n    margin-left: 10px;\n}\n\n#lower{\n    background-color: rgb(185, 218, 230);\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid rgb(180, 180, 180);\n    padding: 0px 25px;\n}\n\n.chat{\n    background-color: rgb(234, 242, 245);\n    max-width: 17%;\n    border-left: 1px solid rgb(180, 180, 180);\n    border-right: 1px solid rgb(180, 180, 180);\n    height: 40px;\n    padding: 5px 10px;\n    cursor: pointer;\n}\n\n.chat p{\n    margin-bottom: 0;\n}\n\n.chatRow{\n    position: fixed;\n    width: 100%;\n    left: 0px;\n    bottom: 40px;\n    pointer-events: none;\n}\n\n.chatBox{\n    background-color: rgb(234, 242, 245);\n    border: 1px solid rgb(180, 180, 180);\n    border-radius: 2px;\n    max-width: 250px;\n    height: 300px;\n    margin-right: 0px;\n    padding: 5px 10px;\n    pointer-events: all;\n}\n\n.chatBox img{\n    max-width: 15px;\n    cursor: pointer;\n}\n\n.text{\n    background-color: rgb(253, 254, 255);\n    border: 1px solid rgba(180, 180, 180, 0.534);\n    border-radius: 3px;\n    padding: 5px 10px;\n    overflow: scroll;\n    max-height: 250px;\n}\n\n.text p{\n    margin-bottom: 3px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'\n  crossorigin='anonymous'> <!-- Bootstrap -->\n<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> <!-- jQuery -->\n<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49'\n  crossorigin='anonymous'></script> <!-- Bootstrap -->\n<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy'\n  crossorigin='anonymous'></script> <!-- Bootstrap -->\n\n<body>\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <h2>Post a message on the wall</h2>\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-primary\" *ngIf=\"!user\" [routerLink]=\"['/login']\">Log In</button>\n      <button class=\"btn btn-danger\" *ngIf=\"user\" (click)=\"logout()\">Log Out</button>\n    </div>\n  </div>\n  <form class=\"form\" (submit)=\"newPost()\">\n    <div class=\"form-group\">\n      <label for=\"post\">Post:</label>\n      <textarea class=\"form-control\" id=\"post\" rows=\"3\" name=\"post.post\" [(ngModel)]=\"post.post\" placeholder=\"What's on your mind today?..\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Name:</label>\n      <input *ngIf=\"!user\" type=\"text\" class=\"form-control name\" name=\"post.name\" [(ngModel)]=\"post.name\" placeholder=\"Name\">\n      <input *ngIf=\"user\" type=\"text\" class=\"form-control name\" name=\"user.name\" [(ngModel)]=\"user.name\" disabled>\n    </div>\n    <p class=\"red\" *ngFor=\"let flash of postFlash\">{{flash}}</p>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n  <div class=\"post row\" *ngFor=\"let post of posts\">\n    <div class=\"col-9\">\n      <h3>{{post.post}}</h3>\n      <h5><img class=\"thumb\" src=\"assets/thumb-up-icon.png\" alt=\"likes\"> {{post.like_count}}</h5>\n      <h4>{{post.name}} <small>{{post.created_at}}</small></h4>\n      <div class=\"comments row\" *ngFor=\"let comment of post.comments\">\n        <div class=\"col-8\">\n          <h5>{{comment.comment}}</h5>\n          <h6>- {{comment.name}}</h6>\n        </div>\n        <div class=\"col\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"removeComment(comment._id)\">Delete</button>\n        </div>\n      </div>\n      <button class=\"btn btn-sm btn-primary\" *ngIf=\"newComment.post_id != post._id && user\" (click)=\"open(post._id)\">Write Comment</button>\n      <form class=\"comment\" *ngIf=\"newComment.post_id == post._id\" (submit)=\"comment()\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Comment:</label>\n          <textarea class=\"form-control\" id=\"post\" rows=\"2\" name=\"newComment.comment\" [(ngModel)]=\"newComment.comment\" placeholder=\"Comment\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"user.name\" [(ngModel)]=\"user.name\" disabled>\n        </div>\n        <p class=\"red\" *ngFor=\"let flash of commentFlash\">{{flash}}</p>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-info space\" *ngIf=\"user\" (click)=\"likePost(post._id)\">Like!</button>\n      <span *ngIf=\"user\">\n        <button class=\"btn btn-warning space\" *ngIf=\"post.userId == user._id\" (click)=\"delete(post._id)\">Delete</button>\n      </span>\n    </div>\n  </div>\n</body>\n\n<div class=\"chatRow row\">\n  <div class=\"col\"></div>\n  <div *ngIf=\"newMessage\" class=\"col chatBox\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h5>Jimmy</h5>\n      </div>\n      <div class=\"col-1\">\n        <img (click)=\"minimise()\" src=\"assets/minus.png\" alt=\"minus\">\n      </div>\n      <div class=\"col-2\">\n        <img (click)=\"deleteChat()\" src=\"assets/close.png\" alt=\"close\">\n      </div>\n    </div>\n    <div id=\"text\" class=\"text\">\n      <p>yee - Jimmy</p>\n      <p>yeah? - Jim</p>\n      <p>yep! - Jimmy</p>\n      <p>Longer Message Longer Message Longer Message Longer Message ! - Jimmy</p>\n      <p>Longer Message Longer Message Longer Message Longer Message ! - Jimmy</p>\n      <p>Longer Message Longer Message Longer Message Longer Message ! - Jimmy</p>\n    </div>\n  </div>\n</div>\n<div id=\"lower\">\n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div (click)=\"openChat()\" class=\"col chat\">\n      <p>Jimmy</p>\n    </div>\n  </div>\n</div>\n\n\n<script>\n  $('#text').ready(function(){\n    $('#text').scrollTop = $('#text').scrollHeight\n  })\n</script>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        this.user = this._httpService.user;
        this.post = {
            post: "",
            name: "",
            userId: "",
        };
        this.posts = [];
        this.newComment = {
            post_id: "",
            comment: "",
            name: ""
        };
        this.commentFlash = [];
        this.postFlash = [];
        this.newMessage = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    HomeComponent.prototype.openChat = function () {
        this.newMessage = {
            message: ""
        };
    };
    HomeComponent.prototype.minimise = function () {
        this.newMessage = null;
    };
    HomeComponent.prototype.deleteChat = function () {
    };
    HomeComponent.prototype.likePost = function (id) {
        var _this = this;
        var observable = this._httpService.likePost({ postId: id, userId: this.user['_id'] });
        observable.subscribe(function (data) {
            //console.log(data)
            if (data["message"] == "Success") {
                _this.getPosts();
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        this._httpService.logout();
        this.user = this._httpService.user;
    };
    HomeComponent.prototype.newPost = function () {
        var _this = this;
        if (this.user) {
            this.post.name = this.user['name'];
            this.post.userId = this.user['_id'];
        }
        //console.log(this.post)
        var observable = this._httpService.newPost(this.post);
        observable.subscribe(function (data) {
            if (data["message"] == "Success") {
                _this.getPosts();
                _this.post.post = "";
                _this.postFlash = [];
            }
            else {
                _this.postFlash = [];
                for (var err in data['error']['errors']) {
                    _this.postFlash.push(data['error']['errors'][err]["message"]);
                }
            }
        });
    };
    HomeComponent.prototype.getPosts = function () {
        var _this = this;
        var observable = this._httpService.getPosts();
        observable.subscribe(function (data) {
            //console.log(data)
            if (data["message"] == "Success") {
                _this.posts = data["data"];
                for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                    var post = _a[_i];
                    post['like_count'] = post['likes'].length;
                }
            }
        });
    };
    HomeComponent.prototype.open = function (id) {
        this.newComment = {
            post_id: id,
            comment: "",
            name: ""
        };
    };
    HomeComponent.prototype.comment = function () {
        var _this = this;
        this.newComment.name = this.user["name"];
        var observable = this._httpService.comment(this.newComment);
        observable.subscribe(function (data) {
            //console.log(data)
            if (data['message'] == "Success") {
                _this.getPosts();
                _this.newComment = {
                    post_id: "",
                    comment: "",
                    name: ""
                };
                _this.commentFlash = [];
            }
            else {
                _this.commentFlash = [];
                for (var err in data['error']['errors']) {
                    _this.commentFlash.push(data['error']['errors'][err]["message"]);
                }
            }
        });
    };
    HomeComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this post?")) {
            var observable = this._httpService.delete(id);
            observable.subscribe(function (data) {
                //console.log(data)
                if (data['message'] == "Success") {
                    _this.getPosts();
                }
            });
        }
    };
    HomeComponent.prototype.removeComment = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this comment?")) {
            var observable = this._httpService.removeComment(id);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['message'] == "Success") {
                    _this.getPosts();
                }
            });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.newPost = function (data) {
        return this._http.post('/', data);
    };
    HttpService.prototype.getPosts = function () {
        return this._http.get('/all');
    };
    HttpService.prototype.comment = function (data) {
        return this._http.post('/comment', data);
    };
    HttpService.prototype.register = function (data) {
        return this._http.post('/user', data);
    };
    HttpService.prototype.login = function (data) {
        var _this = this;
        var x = this._http.post('/login', data);
        x.subscribe(function (data) {
            if (data["message"] == "Success") {
                _this.user = data["data"];
            }
        });
        return x;
    };
    HttpService.prototype.logout = function () {
        this.user = null;
    };
    HttpService.prototype.likePost = function (data) {
        return this._http.post('/likePost', data);
    };
    HttpService.prototype.delete = function (id) {
        return this._http.delete('/' + id);
    };
    HttpService.prototype.removeComment = function (id) {
        return this._http.delete('/comment/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: inherit;\n    padding-bottom: 30px;\n    padding-top: 10px;\n}\n\n#home{\n    margin-top: 5px;\n}\n\n.red{\n    color: red;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'\n  crossorigin='anonymous'> <!-- Bootstrap -->\n<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> <!-- jQuery -->\n<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49'\n  crossorigin='anonymous'></script> <!-- Bootstrap -->\n<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy'\n  crossorigin='anonymous'></script> <!-- Bootstrap -->\n\n<body>\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <h1>Login</h1>\n      <form (submit)=\"login()\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"user.email\" id=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"user.password\" id=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\">\n          </div>\n        </div>\n        <p class=\"red\" *ngFor=\"let error of logFlash\">{{error}}</p>\n        <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n      </form>\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-primary\" id=\"home\" [routerLink]=\"['/']\">Home</button>\n    </div>\n  </div>\n\n  <hr>\n  <h1>Register</h1>\n  <form (submit)=\"register()\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name2\">Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"newUser.name\" id=\"name2\" [(ngModel)]=\"newUser.name\" placeholder=\"Name\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"email2\">Email</label>\n        <input type=\"email\" class=\"form-control\" name=\"newUser.email\" id=\"email2\" [(ngModel)]=\"newUser.email\" placeholder=\"Email\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"password2\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"newUser.password\" id=\"password2\" [(ngModel)]=\"newUser.password\" placeholder=\"Password\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"confirm_password\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"confirm_password\" id=\"confirm_password\" [(ngModel)]=\"confirm_password\" placeholder=\"Password\">\n      </div>\n    </div>\n    <p class=\"red\" *ngFor=\"let error of regFlash\">{{error}}</p>\n    <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n  </form>\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.aTaskEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newUser = {
            name: "",
            email: "",
            password: ""
        };
        this.user = {
            email: "",
            password: ""
        };
        this.confirm_password = "";
        this.regFlash = [];
        this.logFlash = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.user.email.length > 7 && this.user.password.length > 2) {
            var observable = this._httpService.login(this.user);
            observable.subscribe(function (data) {
                //console.log(data)
                if (data["message"] == "Success") {
                    _this.aTaskEventEmitter.emit(data["data"]);
                    _this._router.navigate(['/']);
                }
                else {
                    _this.logFlash = [];
                    for (var err in data["error"]["errors"]) {
                        _this.logFlash.push(data["error"]["errors"][err]["message"]);
                    }
                }
            });
        }
        else {
            this.logFlash = [];
            this.logFlash.push("Please enter your valid email and password, or register below.");
        }
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.newUser.password == this.confirm_password && this.newUser.password.length > 2) {
            var observable = this._httpService.register(this.newUser);
            observable.subscribe(function (data) {
                console.log(data);
                if (data["message"] == "Success") {
                    _this.regFlash = [];
                    _this.logFlash = [];
                    _this.newUser = {
                        name: "",
                        email: "",
                        password: ""
                    };
                    _this.user = {
                        email: "",
                        password: ""
                    };
                    _this.confirm_password = "";
                    _this.regFlash.push("You are now registered! Please log in");
                }
                else {
                    _this.regFlash = [];
                    for (var err in data["error"]["errors"]) {
                        _this.regFlash.push(data["error"]["errors"][err]["message"]);
                    }
                }
            });
        }
        else {
            this.regFlash = [];
            this.regFlash.push("Please enter and confirm your password, password must be more than 3 char and must match.");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "aTaskEventEmitter", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
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

var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/newuser/Documents/coding_dojo/mean_stack/project/social_book/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map