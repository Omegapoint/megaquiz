/**
 * Created by novo on 08/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .controller('QuizCtrl', function ($rootScope, $scope, Quiz, $state) {
      // TODO Write controller code for quiz controller
      $scope.quizList = [
        {
          title: "robertquizzen",
          count: 4,
          img: 'https://placekitten.com/g/50/50',
          reference_gid: 112309823
        },
        {
          title: "toraquihhzzen",
          count: 2,
          img: 'https://placekitten.com/g/50/50',
          reference_gid: 112311223
        }
      ];

      Quiz.loadData().$promise.then(function (response) {
        $scope.quizzes = response;
      });

      $scope.goToQuestion = function (quizId) {
        // FIXME: Static id at the moment.
        $state.go('tab.quiz-question', {id: 1});
      }
    })

})();
