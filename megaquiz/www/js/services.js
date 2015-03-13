angular.module('starter.services', [])

.factory('Quiz', function($rootScope) {
  // Might use a resource here that returns a JSON array

  // TODO Implement as in https://docs.angularjs.org/tutorial/step_11
  // https://github.com/times/angular-tabletop
  var quizSpreadSheet = "1DTeGI9jOG9cGZ0fh42WYLcJ_AUOeLpqH3-5zD_BElEg";

  return {
        quizzes: function () {
            var quiz = $rootScope.tabletopData[0].Quiz;
            return quiz.elements;
        }

  };
});
