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

    function mobileupload(noteId, b64){
      return $http.post(origin + '/notes/mobileupload', {noteId:noteId, b64:b64});
    }

    return {count:count, query:query, show:show, mobileupload:mobileupload};
  });
})();
