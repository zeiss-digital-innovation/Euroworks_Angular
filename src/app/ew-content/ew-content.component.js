"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var truck_driver_filter_component_1 = require('../truck-driver-filter/truck-driver-filter.component');
var result_overview_component_1 = require("../result-overview/result-overview.component");
var result_component_1 = require("../result-overview/result/result.component");
var EwContentComponent = (function () {
    function EwContentComponent() {
    }
    EwContentComponent.prototype.ngOnInit = function () {
    };
    EwContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ew-content',
            templateUrl: 'ew-content.component.html',
            styleUrls: ['ew-content.component.css'],
            directives: [truck_driver_filter_component_1.TruckDriverFilterComponent, result_overview_component_1.ResultOverviewComponent, result_component_1.ResultComponent]
        })
    ], EwContentComponent);
    return EwContentComponent;
}());
exports.EwContentComponent = EwContentComponent;
//# sourceMappingURL=ew-content.component.js.map