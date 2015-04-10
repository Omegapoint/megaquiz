// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.app
// 'starter.controllers' is found in controllers.app
angular
  .module('app', [
    // core modules
    'ionic',
    'app.core',
    'app.services',
    'ngResource',
    'Tabletop'
  ])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, TabletopProvider) {

    var quizSpreadSheet = "1DTeGI9jOG9cGZ0fh42WYLcJ_AUOeLpqH3-5zD_BElEg";
    TabletopProvider.setTabletopOptions({
      //key: 'https://docs.google.com/spreadsheets/d/' + quizSpreadSheet + '/pubhtml'
      key: 'http://quiz.favvis.se/feeds/worksheets/1DTeGI9jOG9cGZ0fh42WYLcJ_AUOeLpqH3-5zD_BElEg/public/basic?alt=json'
    });

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.app
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        templateUrl: "templates/tabs.html",
        controller: function ($rootScope, Quiz) {
          //Quiz.loadData().$promise.then(function (response) {
          //   $rootScope.quizData = response;
          //});

          //resolve: {
          //    tabletopData: 'Tabletop'
          //},
          //controller: function ($rootScope, $log, tabletopData) {
          //    $rootScope.tabletopData = tabletopData; // This will be a resolved promise!
          //
          //}

        }
      })

      // Each tab has its own nav history stack:
      .state('tab.quiz', {
        url: '/quiz',
        views: {
          'tab-quiz': {
            templateUrl: 'app/quiz-list/tab-quiz.html',
            controller: 'QuizCtrl'
          }
        }
      })

      .state('tab.quiz-question', {
        url: '/:id/question',
        views: {
          'tab-quiz': {
            templateUrl: 'app/quiz-question/tab-quiz-question.html',
            controller: 'QuizQuestionCtrl'
          }
        }
      })

      .state('tab.results', {
        url: '/results',
        views: {
          'tab-results': {
            templateUrl: 'app/result/tab-results.html',
            controller: 'ResultsCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/quiz');

  });