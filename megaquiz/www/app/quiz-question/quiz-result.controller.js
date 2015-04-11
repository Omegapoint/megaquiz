/**
 * Created by novo on 10/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .controller('QuizResultCtrl', QuizResultCtrl);

  function QuizResultCtrl($state, $stateParams) {
    var vm = this;
    var questions = $stateParams.questions;
    var questionAnswers = $stateParams.questionAnswers;
    var submittedAnswers = $stateParams.submittedAnswers;

    vm.score = calculateScore(questionAnswers, submittedAnswers, questions);

    console.log($stateParams, $state.params);

  }

  function calculateScore(questionAnswers, submittedAnswers, questions) {

    var maxScore = 100 * questionAnswers.length;
    var totalScore = 0;

    questionAnswers.forEach(function(item, i, arr) {
      var rightAnswerScore = 100 / item.length;
      var questionType = questions[i].type;
      if (questionType === 'multiple') {
        item.forEach(function(item, innerindex) {
          if (item.correct && submittedAnswers[i].indexOf(innerindex) !== -1) {
            totalScore += rightAnswerScore;
          } else if (!item.correct && submittedAnswers[i].indexOf(innerindex) === -1) {
            totalScore += rightAnswerScore;
          }
        });
      } else if (questionType === 'single') {
        if (submittedAnswers[i].length === 1 && questionAnswers[i][submittedAnswers[i][0]].correct) {
          totalScore += 100;
        }
      }
    });

    return Math.ceil((totalScore / maxScore) * 100);
  }

})();


