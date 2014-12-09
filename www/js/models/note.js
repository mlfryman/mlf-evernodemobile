/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', ['$http', 'origin', function($http, origin){

    function count(){
      return $http.get(origin + '/notes/count');
    }

    return {count:count};
  }]);
})();
