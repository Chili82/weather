"use strict";
var profile_1 = require("./profile");
var ProfileService = (function () {
    function ProfileService() {
        this.profiles = [
            new profile_1.Profile('Default profile', ['New York', 'London', 'Berlin'])
        ];
    }
    ProfileService.prototype.saveNewProfile = function (cities) {
        var profileName = 'Profile ' + this.profiles.length;
        var profile = new profile_1.Profile(profileName, cities);
        this.profiles.push(profile);
    };
    ProfileService.prototype.getProfiles = function () {
        return this.profiles;
    };
    ProfileService.prototype.deleteProfile = function (profile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    };
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map