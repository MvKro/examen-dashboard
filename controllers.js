var controllers = angular.module("chatApp.controllers", []);

controllers.controller('chatController', function($scope, $message, $room){

	$scope.rooms = $room.all;

	$scope.joinChat = function(room) {
		$message.load($room.messages(room.$id));
	};

	$scope.messages = $message.all;

	$scope.send = function(message){
		$message.create(message);
	};
});