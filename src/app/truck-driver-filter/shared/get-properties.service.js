"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var filter_properties_1 = require("./filter-properties");
var GetPropertiesService = (function () {
    function GetPropertiesService(http) {
        this.http = http;
        this._properties = new rxjs_1.BehaviorSubject(new filter_properties_1.FilterProperties([], [], []));
    }
    Object.defineProperty(GetPropertiesService.prototype, "properties", {
        get: function () {
            var _this = this;
            var newProperties = this.http.get("http://euroworksdockerserver.cloudapp.net/api/Driver/properties")
                .map(function (data) { return data.json(); })
                .map(function (jsonData) {
                var resultProperties = new filter_properties_1.FilterProperties();
                jsonData.forEach(function (dataSet) {
                    var key = dataSet.propertyType;
                    var data = [];
                    for (var key_1 in dataSet.propertyValues) {
                        data.push(dataSet.propertyValues[key_1]);
                    }
                    resultProperties[key] = data;
                });
                return resultProperties;
            })
                .share();
            newProperties.subscribe(function (data) { return _this._properties.next(data); }, function (error) { return console.error(error); });
            return newProperties;
        },
        enumerable: true,
        configurable: true
    });
    GetPropertiesService = __decorate([
        core_1.Injectable()
    ], GetPropertiesService);
    return GetPropertiesService;
}());
exports.GetPropertiesService = GetPropertiesService;
//# sourceMappingURL=get-properties.service.js.map