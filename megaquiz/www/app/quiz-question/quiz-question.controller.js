/**
 * Created by novo on 08/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .controller('QuizQuestionCtrl', function ($scope, $stateParams, Quiz) {
      console.log($stateParams);

      var vm = this;
      vm.currentQuestionIndex = -1;

      var questions = Quiz.questions($stateParams.title);
      console.log(questions);

      vm.getNextQuestion = function() {
        vm.currentQuestionIndex++;
        vm.title = questions[vm.currentQuestionIndex].question;
        vm.answers = Quiz.getAnswersForQuestion(questions[vm.currentQuestionIndex]);
        vm.questionType = questions[vm.currentQuestionIndex].type;
      }

      vm.getNextQuestion();

    });

})();
