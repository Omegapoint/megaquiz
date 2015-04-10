(function () {
  "use strict";
  angular.module('app.services', [])
    .factory('Quiz', function ($rootScope, $resource) {
      // Might use a resource here that returns a JSON array

      // TODO Implement as in https://docs.angularjs.org/tutorial/step_11
      // https://github.com/times/angular-tabletop
      var quizSpreadSheet = "1DTeGI9jOG9cGZ0fh42WYLcJ_AUOeLpqH3-5zD_BElEg";

      var service = {
        loadData: loadData,
        quizzes: quizzes,
        questions: questions,
        getAnswersForQuestion: getAnswersForQuestion
      };

      return service;

      function quizzes() {
        return $rootScope.quizData.index;
      }

      function getQuestion(quiz, index) {
        return quiz.elements[index];
      }

      function getAnswer(answers, index) {
        return answers[index];
      };

      function loadData() {
        return $resource('http://quiz.favvis.se/data.json', {}, {
          query: {method: 'GET', params: {}, isArray: false}
        }).query();
      }

      function questions(quizName) {
        var count = 0;
        angular.forEach(quizzes(), function (value) {
          if (value.title === quizName) {
            count = value.count;
          }
        });
        var quiz = $rootScope.quizData.quizes[quizName];
        var questions = [];
        var indexes = [];
        while (count > 0) {
          var index = Math.floor(Math.random() * quiz.elements.length);
          if (indexes.indexOf(index) === -1) {
            var question = getQuestion(quiz, index);
            questions.push(question);
            indexes.push(index);
            count--;
          }
        }
        return questions;
      }

      function getAnswersForQuestion(question) {
        var count = question.count;
        var answers = [];
        var indexes = [];
        var gotOneCorrect = false;
        while (count > 0) {
          var index = Math.floor(Math.random() * question.answers.length);
          if (indexes.indexOf(index) === -1) {
            var answer = getAnswer(question.answers, index);
            if (gotOneCorrect) {
              answers.push(answer);
              indexes.push(index);
              count--;
            } else if (answer.correct) {
              gotOneCorrect = true;
              answers.push(answer);
              indexes.push(index);
              count--;
            }

          }
        }
        return answers;
      }

    });
})();
