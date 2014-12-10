(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', function($http, origin){

    function count(){
      return $http.get(origin + '/notes/count');
    }

    function query(){
      return $http.get(origin + '/notes');
    }

    function show(noteId){
      return $http.get(origin + '/notes/' + noteId);
    }

    return {count:count, query:query, show:show};
  });
})();
