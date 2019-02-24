"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("./services/login.service");
var LoginComponent = (function () {
    function LoginComponent(_route, _router, _loginService) {
        this._route = _route;
        this._router = _router;
        this._loginService = _loginService;
        this.title = "Identificate";
        this.emailForm = "";
        this.pwdForm = "";
        this.codError = -999;
        this.msgError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("login.component  cargado!!");
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.codError = -999;
        this._loginService.singup(this.emailForm, this.pwdForm).subscribe(function (response) {
            console.log(response);
            _this.codError = response.code;
            _this.msgError = response.msg;
            if (_this.codError == 1) {
                _this.status = "success";
            }
            else {
                _this.status = "danger";
            }
        }, function (error) {
            console.log(error);
            //console.log("error 454545.");
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.codError = -1;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map