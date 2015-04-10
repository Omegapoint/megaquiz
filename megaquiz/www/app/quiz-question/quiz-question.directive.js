/**
 * Created by novo on 09/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .directive('quizQuestion', quizQuestion)

  function quizQuestion() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/quiz-question/tab-quiz-question.html',
      link: function (scope, el, attrs) {

      }
    }

    return directive;
  }

})();
