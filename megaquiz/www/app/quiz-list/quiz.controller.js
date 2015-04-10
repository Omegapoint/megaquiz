/**
 * Created by novo on 08/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .controller('QuizCtrl', function ($rootScope, $scope, Quiz, $state) {
      var vm = this;
      vm.quizzes = $rootScope.tabletopData[0].Quiz.elements;

      $scope.goToQuestion = function (quizTitle) {
        $state.go('tab.quiz-question', {title: quizTitle});
      }
    })

})();
