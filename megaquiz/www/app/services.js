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
        //return $rootScope.quizData.index;
        return $rootScope.tabletopData[0].Quiz.elements;
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
        //var quiz = $rootScope.quizData.quizes[quizName];
        var quiz = $rootScope.tabletopData[0][quizName];
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

      function getSplicedAnswersFromQuestionAndShuffle(question) {
        var answers = [];
        Object.keys(question).forEach(function (key, index) {
          if (key.match(/^answer/) && question[key] !== '') {
            var answer = question[key].split(':', 2);
            answers.push({
              correct: answer[0] === "true",
              answer: answer[1]
            });
          }
        });

        return _.shuffle(answers);
      }

      function getFirstCorrectAnswerIndex(question) {
        for (var i = 0; i < question.length; i++) {
          if (question[i].correct === true) {
            return i;
          }
        }
      }

      function getAnswersForQuestion(question) {
        var count = question.count;
        var id = question.id;
        var title = question.question;
        var type = question.type;

        var possibleAnswers = getSplicedAnswersFromQuestionAndShuffle(question);
        var firstCorrectAnswerIndex = getFirstCorrectAnswerIndex(possibleAnswers);
        var answers = [];
        answers.push(possibleAnswers[firstCorrectAnswerIndex]);

        possibleAnswers.splice(firstCorrectAnswerIndex, 1);

        for (var i = 1; i < count; i++) {
          answers.push(possibleAnswers[i-1]);
        }

        return _.shuffle(answers);

        //var indexes = [];
        //var gotOneCorrect = false;
        //while (count > 0) {
        //  var index = Math.floor(Math.random() * possibleAnswers.length);
        //  if (indexes.indexOf(index) === -1) {
        //    var answer = getAnswer(possibleAnswers, index);
        //    if (gotOneCorrect) {
        //      answers.push(answer);
        //      indexes.push(index);
        //      count--;
        //    } else if (answer.correct) {
        //      gotOneCorrect = true;
        //      answers.push(answer);
        //      indexes.push(index);
        //    }
        //
        //    count--;
        //  }
        //}
        //console.log(answers);
        //return answers;
      }

    });
})();
