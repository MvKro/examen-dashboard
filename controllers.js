var controllers = angular.module("chatApp.controllers", []);

controllers.controller('chatController', function($scope, $chat){

	$scope.rooms = $chat.rooms;

	$scope.joinChat = function(room) {
		$scope.messages = $chat.load(room.$id);
	};

	$scope.messages = $chat.all;

	$scope.send = function(message){
		$chat.create(message);
	};
});