var factories = angular.module('chatApp.factories', ['firebase']);

factories.factory('$chat', function($firebase, $firebaseArray, $firebaseObject){
  var ref = new Firebase('https://examen-chat.firebaseio.com');
  var rooms = $firebaseArray(ref.child('rooms'));
  var messages = null;//$firebaseArray(ref.child('rooms/Room1/messages'));

  var create = function(message){
    return messages.$add(message);
  };
  var eliminate = function(message){
    return messages.$remove(message);
  };
  var loadMessages = function(roomId){
    messages = $firebaseArray(ref.child('rooms/'+roomId+'/messages'));
    return messages;
  };


  return {
    all: messages,
    rooms: rooms,
    create: create,
    eliminate: eliminate,
    load: loadMessages
  };
});