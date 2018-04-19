define(function() {
    var controller = require("ListView/AlertsWithoutThumbnails/userAlertsWithoutThumbnailsController");
    var actions = require("ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnailsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});