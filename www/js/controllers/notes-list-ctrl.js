(function(){
  'use strict';

  angular.module('starter')

  .controller('NotesListCtrl', function($scope, Note){
    Note.query().then(function(response){
      $scope.notes = response.data.notes;
    });
  });
})();
