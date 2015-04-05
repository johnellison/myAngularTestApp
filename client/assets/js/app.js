(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    .controller('MainCtrl', [
      function() {
        var self = this;
        
        var notes = [
          {
            id: 1,
            label: 'First Note',
            done: false,
            someRandon: 31431
          },
          {
            id: 2,
            label: 'Second Note',
            done: false
          },
          { 
            id: 3,
            label: 'Done Note',
            done: true
          },
          { 
            id: 4,
            label: 'Fourth Note',
            done: false
          }
        ];

        self.notes1 = angular.copy(notes);
        self.notes2 = angular.copy(notes);

        self.changeNotes = function() {
          notes = [
            {
              id: 1,
              label: 'First Note',
              done: false,
              someRandon: 31431
            },
            {
              id: 2,
              label: 'Second Note',
              done: false
            },
            { 
              id: 3,
              label: 'Done Note',
              done: true
            },
            { 
              id: 4,
              label: 'Fourth Note',
              done: false
            }
          ];
          self.notes1 = angular.copy(notes);
          self.notes2 = angular.copy(notes);
        }

        self.getNoteClass = function(status) {
          return {
            done: status,
            pending: !status
          }
        }
      }]);
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
