angular.module("myApp", []);

// now to define our controller
// controllers take our data from the front-end(view)
// and then operates on that data

// In Angular, the view and the controller are bound using
// an object called $scope


var myController = function($scope){

	$scope.greeting = "Dana!!";

}

// after writing our controller here, we have to tell Angular
// to use this controller in our application

angular
	.module("myApp")
	.controller('myController', myController)