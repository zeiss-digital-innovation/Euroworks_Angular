/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var get_properties_service_1 = require('./get-properties.service');
var esm_1 = require("@angular/http/esm");
describe('Service: GetProperties', function () {
    beforeEach(function () {
        testing_1.addProviders([{ provide: esm_1.Http, useClass: MockHttp }, get_properties_service_1.GetPropertiesService]);
    });
    it('should get and parse data correctly', testing_1.async(testing_1.inject([get_properties_service_1.GetPropertiesService], function (service) {
        service.properties.subscribe(function (data) {
            var reference = {
                Coachworks: [
                    "Cooler",
                    "Plans",
                    "Silo",
                    "Tipper",
                    "Tanker",
                    "HeavyDuty"
                ],
                DriverLicenceClasses: [
                    "C1",
                    "C",
                    "C1E",
                    "CE",
                    "PersonTransfer"
                ],
                FieldOfApplications: [
                    "National",
                    "International",
                    "Regional"
                ],
                ProfessionalDriverModuls: [
                    "Module1",
                    "Module2"
                ],
                Workshift: [
                    "Daily",
                    "Weekly",
                    "Every2Week",
                    "Even"
                ]
            };
            expect(data.Coachworks).toEqual(reference.Coachworks);
            expect(data.DriverLicenceClasses).toEqual(reference.DriverLicenceClasses);
            expect(data.FieldOfApplications).toEqual(reference.FieldOfApplications);
            expect(data.ProfessionalDriverModuls).toEqual(reference.ProfessionalDriverModuls);
            expect(data.Workshift).toEqual(reference.Workshift);
        });
    })));
});
var MockHttp = (function () {
    function MockHttp() {
    }
    ;
    MockHttp.prototype.get = function (url) {
        return "[\n  {\n    \"propertyType\": \"Coachworks\",\n    \"propertyValues\": {\n      \"1\": \"Cooler\",\n      \"2\": \"Plans\",\n      \"3\": \"Silo\",\n      \"4\": \"Tipper\",\n      \"5\": \"Tanker\",\n      \"6\": \"HeavyDuty\"\n    }\n  },\n  {\n    \"propertyType\": \"DriverLicenceClasses\",\n    \"propertyValues\": {\n      \"1\": \"C1\",\n      \"2\": \"C\",\n      \"3\": \"C1E\",\n      \"4\": \"CE\",\n      \"5\": \"PersonTransfer\"\n    }\n  },\n  {\n    \"propertyType\": \"FieldOfApplications\",\n    \"propertyValues\": {\n      \"1\": \"National\",\n      \"2\": \"International\",\n      \"3\": \"Regional\"\n    }\n  },\n  {\n    \"propertyType\": \"ProfessionalDriverModuls\",\n    \"propertyValues\": {\n      \"1\": \"Module1\",\n      \"2\": \"Module2\"\n    }\n  },\n  {\n    \"propertyType\": \"Workshift\",\n    \"propertyValues\": {\n      \"1\": \"Daily\",\n      \"2\": \"Weekly\",\n      \"3\": \"Every2Week\",\n      \"4\": \"Even\"\n    }\n  }\n]";
    };
    return MockHttp;
}());
//# sourceMappingURL=get-properties.service.spec.js.map