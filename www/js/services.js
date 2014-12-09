'use strict';

angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Notes', function(){
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var notes = [
    {id: 0, title: 'Scruff McGruff'},
    {id: 1, title: 'G.I. Joe'},
    {id: 2, title: 'Miss Frizzle'},
    {id: 3, title: 'Ash Ketchum'}
  ];

  return {
    all: function(){
      return notes;
    },
    get: function(noteId){
      // Simple index lookup
      return notes[noteId];
    }
  };
});
