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

      vm.questions = Quiz.questions($stateParams.title);
      console.log(vm.questions);
      //Randomizer.getQuestion(id).then(function(questions) {
      //
      //});

      // TODO Write controller code for quiz questions controller

    });

})();
