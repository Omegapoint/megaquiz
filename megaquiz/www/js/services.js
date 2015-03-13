angular.module('starter.services', [])

    .factory('Quiz', function($rootScope, $resource) {
        // Might use a resource here that returns a JSON array

        // TODO Implement as in https://docs.angularjs.org/tutorial/step_11
        // https://github.com/times/angular-tabletop
        var quizSpreadSheet = "1DTeGI9jOG9cGZ0fh42WYLcJ_AUOeLpqH3-5zD_BElEg";

        var quizzes = function () {
            return $rootScope.quizData.index;
        };

        var getQuestion = function (quiz, index) {
            return quiz.elements[index];
        };

        var getAnswer = function (answers, index) {
            return answers[index];
        };

        return {

            loadData: function () {
                return $resource('http://quiz.favvis.se/data.json', {}, {
                    query: { method: 'GET', params: {}, isArray: false }
                }).query();
            },

            quizzes: quizzes,

            questions: function (quizName) {
                var count;
                angular.forEach(quizzes(), function (value, key) {
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
            },

            getAnswersForQuestion: function (question) {
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

        };
    });
