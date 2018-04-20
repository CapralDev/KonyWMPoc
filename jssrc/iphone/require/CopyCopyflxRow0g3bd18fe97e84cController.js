define(function(){
	var controller = require("userCopyCopyflxRow0g3bd18fe97e84cController");
	var controllerActions = ["CopyCopyflxRow0g3bd18fe97e84cControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})