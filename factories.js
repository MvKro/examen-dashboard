var factories = angular.module('chatApp.factories', ['firebase']);

factories.factory('$message', function($firebase, $firebaseArray, $firebaseObject){
  var ref = new Firebase('https://chat506.firebaseio.com');
  var messages = $firebaseArray(ref.child('messages'));//

  var create = function(message){
    return messages.$add(message);
  };
  var get = function(messageId){
    return $firebaseObject( ref.child('messages').child(messageId) );
  };
  var eliminate = function(message){
    return messages.$remove(message);
  };
  var loadMessages = function(messagesList){
    var currentMessageCount = messages.length;
    messages.splice(0, currentMessageCount, null);
    messagesList.forEach(function(element){
       messages.concat(element);
    });
    return messages.$save();
  };


  return {
    all: messages,
    create: create,
    get: get,
    eliminate: eliminate,
    load: loadMessages
  };
});

factories.factory('$room', function($firebase, $firebaseArray, $firebaseObject){
  var ref = new Firebase('https://chat506.firebaseio.com');
  var rooms = $firebaseArray(ref.child('rooms'));

  var getRoom = function(roomId){
    return $firebaseObject( rooms.child(roomID) );
  }; 

  var getMessages = function(roomId){
    var messagesArray = [];
    var messages = null;
    for(var i=0; i<rooms.length;i++){
      var room = rooms[i];
      if(room.$id == roomId){
        messages = room.messages;
      }
    }

    angular.forEach(messages, function(element) {
      messagesArray.push(element);
    });

    return messagesArray;
  };

  return {
    all: rooms,
    get: getRoom,
    messages: getMessages
  };
});