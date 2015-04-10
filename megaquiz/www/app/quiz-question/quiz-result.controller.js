/**
 * Created by novo on 10/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .controller('QuizResultCtrl', QuizResultCtrl);

  function QuizResultCtrl($state, $stateParams) {
    console.log($stateParams, $state.params);
  }

})();


