(function(){
  'use strict';

  angular.module('starter')
  .controller('NoteDetailCtrl', function($scope, $stateParams, Notes){
    $scope.note = Notes.get($stateParams.noteId);
  });
})();
