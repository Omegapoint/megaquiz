/**
 * Created by novo on 09/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app.core')
    .factory('quizData', quizData);


  quizData.$inject = ['Tabletop'];

  function quizData(TabletopProvider) {

    function getQuizData() {

    }

    return {
      getQuizData: getQuizData
    }
  }
})();
