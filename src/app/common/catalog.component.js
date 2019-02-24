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
var login_service_1 = require("./services/login.service");
var CatalogComponent = (function () {
    function CatalogComponent(_loginService) {
        this._loginService = _loginService;
        this.title = "News";
        //items:Array<string> = ["Welcome", "Welcome #2"];
        this.dato = "1";
        this.employees = [
            { 'id': '1', 'name': 'Fazt', position: 'manager', email: 'email@email.com' },
            { 'id': '2', 'name': 'Juan', position: 'Designer', email: 'email@email.com' },
            { 'id': '3', 'name': 'Pedro', position: 'Programmer', email: 'email@email.com' }
        ];
        this.invoice = [
            { 'id': '1', 'name': 'Producto 1', description: 'nose1', 'cantid': 1, price: 10.05 }
        ];
        this.items = [{}];
        this.itemsANT = [
            {
                "name": "Producto 0",
                "description": "Description 0",
                "price": "1.03"
            },
            {
                "name": "Producto 1",
                "description": "Description 1",
                "price": "0.05"
            },
            {
                "name": "Producto 2",
                "description": "Description 2",
                "price": "0.20"
            },
            {
                "name": "Producto 3",
                "description": "Description 3",
                "price": "3.25"
            },
            {
                "name": "Producto 4",
                "description": "Description 4",
                "price": 4
            },
            {
                "name": "Producto 5",
                "description": "Description 5",
                "price": 5
            },
            {
                "name": "Producto 6",
                "price": 6
            },
            {
                "name": "Producto 7",
                "price": 7
            },
            {
                "name": "Producto 8",
                "price": 8
            },
            {
                "name": "Producto 9",
                "price": 9
            },
            {
                "name": "Producto 10",
                "price": 10
            }
        ];
        this.defaultCoin = [{
                "name": "Bitcoin",
                "address": "1JSRWccK7Lef2xZmd8B41bB481iNV9pPoy",
                "symbol": "btc"
            }];
        this.addresses = [
            {
                "name": "First Address",
                "address": "194AJeZCav8TUFn5WBc8cELWwJQK6ViC8x",
                "symbol": "btc"
            },
            {
                "name": "Second Address",
                "address": "194AJeZCav8TUFn5WBc8cELWwJQK6ViC8xs",
                "symbol": "btc"
            },
            {
                "name": "Third Address",
                "address": "1KW8DKTgJzvgc4MaU5HUmHqT65mU8PmzqJ",
                "symbol": "btc"
            },
            {
                "name": "Fourth Address",
                "address": "1APjoxbqRykt1JDYKoK68vYiFwQfJFb25Z",
                "symbol": "btc"
            }
        ];
        this.title = "Identificate";
        this.verproductos();
    }
    CatalogComponent.prototype.verproductos = function () {
        var _this = this;
        this._loginService.articulos().subscribe(function (response) {
            _this.items = [];
            for (var key in response.data) {
                if (response.data.hasOwnProperty(key)) {
                    var element = response.data[key];
                    _this.items.push({ 'name': element.nompro, 'description': "", 'price': element.precio });
                }
            }
            console.log(response.data[0].nompro);
            //this.items = response;
            console.log(_this.items);
        }, function (error) {
            console.log(error);
            //console.log("error 454545.");
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
            }
        });
    };
    CatalogComponent.prototype.addItem = function (name, description, price) {
        this.dato = (parseFloat(this.dato) + 1).toString();
        this.invoice.push({ 'id': this.dato, 'name': name, 'description': description, 'cantid': 1, 'price': price });
    };
    CatalogComponent.prototype.invoItemMas = function (item) {
        this.invoice[item].cantid = this.invoice[item].cantid + 1;
        //var printContents = document.getElementById('dataPrint').innerHTML;
        //var originalContents = document.body.innerHTML;        
        //document.body.innerHTML = printContents;
        //window.print();
        //document.body.innerHTML = originalContents;
    };
    CatalogComponent.prototype.invoItemMenos = function (item) {
        if (this.invoice[item].cantid > 1) {
            this.invoice[item].cantid = this.invoice[item].cantid - 1;
        }
    };
    CatalogComponent.prototype.invoItemDelete = function (item) {
        this.invoice.splice(item, 1);
    };
    CatalogComponent.prototype.invoGetTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.invoice; _i < _a.length; _i++) {
            var item = _a[_i];
            total = total + (item.cantid * item.price);
        }
        return total.toFixed(2);
    };
    CatalogComponent.prototype.consoleLog = function () {
        console.log(this.employees);
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    core_1.Component({
        selector: 'app-catalog',
        templateUrl: './catalog.component.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], CatalogComponent);
exports.CatalogComponent = CatalogComponent;
//# sourceMappingURL=catalog.component.js.map