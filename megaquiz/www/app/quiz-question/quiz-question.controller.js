/**
 * Created by novo on 08/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .controller('QuizQuestionCtrl', function ($scope, $state, $stateParams, Quiz) {
      console.log($stateParams);

      var vm = this;
      vm.currentQuestionIndex = -1;
      var submittedAnswers = [];

      var currentAnswer = [];

      var questions = Quiz.questions($stateParams.title);
      console.log(questions);

      vm.radioClick = function (answer) {
        currentAnswer = [];
        currentAnswer.push(answer);
      };

      vm.multipleToggle = function (answer) {
        var pos = currentAnswer.indexOf(answer);
        if (pos > -1) {
          currentAnswer.splice(pos, 1);
        } else {
          currentAnswer.push(answer);
        }
        console.log(currentAnswer);
      };

      vm.getNextQuestion = function () {
        vm.currentQuestionIndex++;
        console.log(vm.currentQuestionIndex, (questions.length))
        if (vm.currentQuestionIndex >= (questions.length)) {
          $state.go('tab.quiz-question-result', {
            submittedAnswers: submittedAnswers,
            questions: questions
          });
          return;
        }

        if (0 < vm.currentQuestionIndex) {
          submittedAnswers.push(currentAnswer);
          console.log(submittedAnswers);
        }
        currentAnswer = [];
        vm.title = questions[vm.currentQuestionIndex].question;
        vm.answers = Quiz.getAnswersForQuestion(questions[vm.currentQuestionIndex]);
        vm.questionType = questions[vm.currentQuestionIndex].type;
      };

      if (vm.currentQuestionIndex === -1) {
        vm.getNextQuestion();
      }

    });

})();
