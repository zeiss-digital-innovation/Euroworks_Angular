"use strict";
var FilterProperties = (function () {
    function FilterProperties(_Coachworks, _DriverLicenceClasses, _FieldOfApplications, _ProfessionalDriverModuls, _Workshift) {
        this._Coachworks = _Coachworks;
        this._DriverLicenceClasses = _DriverLicenceClasses;
        this._FieldOfApplications = _FieldOfApplications;
        this._ProfessionalDriverModuls = _ProfessionalDriverModuls;
        this._Workshift = _Workshift;
    }
    Object.defineProperty(FilterProperties.prototype, "Coachworks", {
        get: function () {
            return this._Coachworks;
        },
        set: function (value) {
            this._Coachworks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterProperties.prototype, "DriverLicenceClasses", {
        get: function () {
            return this._DriverLicenceClasses;
        },
        set: function (value) {
            this._DriverLicenceClasses = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterProperties.prototype, "FieldOfApplications", {
        get: function () {
            return this._FieldOfApplications;
        },
        set: function (value) {
            this._FieldOfApplications = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterProperties.prototype, "ProfessionalDriverModuls", {
        get: function () {
            return this._ProfessionalDriverModuls;
        },
        set: function (value) {
            this._ProfessionalDriverModuls = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterProperties.prototype, "Workshift", {
        get: function () {
            return this._Workshift;
        },
        set: function (value) {
            this._Workshift = value;
        },
        enumerable: true,
        configurable: true
    });
    return FilterProperties;
}());
exports.FilterProperties = FilterProperties;
//# sourceMappingURL=filter-properties.js.map