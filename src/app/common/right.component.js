"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RightComponent = (function () {
    function RightComponent() {
        this.title = "News";
        this.items = ["Welcome", "Welcome #2"];
        this.dato = "3";
        this.employees = [
            { 'id': '1', 'name': 'Fazt', position: 'manager', email: 'email@email.com' },
            { 'id': '2', 'name': 'Juan', position: 'Designer', email: 'email@email.com' },
            { 'id': '3', 'name': 'Pedro', position: 'Programmer', email: 'email@email.com' }
        ];
    }
    RightComponent.prototype.addItem = function () {
        this.dato = (parseFloat(this.dato) + 1).toString();
        this.employees.push({ 'id': this.dato, 'name': 'Fazt ' + Math.random().toString(), position: 'manager', email: 'email@email.com' });
    };
    RightComponent.prototype.consoleLog = function () {
        console.log(this.employees);
    };
    return RightComponent;
}());
RightComponent = __decorate([
    core_1.Component({
        selector: 'app-right-content',
        templateUrl: './right.component.html',
    })
], RightComponent);
exports.RightComponent = RightComponent;
//# sourceMappingURL=right.component.js.map