define(function() {
    var controller = require("ListView/SkypeMessage/userSkypeMessageController");
    var actions = require("ListView/SkypeMessage/SkypeMessageControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});