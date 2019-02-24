"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LeftComponent = (function () {
    function LeftComponent() {
        this.title = "News";
        this.items = ["Welcome", "Welcome #2"];
        this.dato = "00";
    }
    LeftComponent.prototype.addItem = function () {
        this.dato = Math.random().toString();
        this.items.push(this.dato);
    };
    return LeftComponent;
}());
LeftComponent = __decorate([
    core_1.Component({
        selector: 'app-left-navigation',
        templateUrl: './left.component.html',
    })
], LeftComponent);
exports.LeftComponent = LeftComponent;
//# sourceMappingURL=left.component.js.map