/**
 * Created by novo on 10/04/15.
 */
(function () {
  "use strict";

  angular
    .module('app')
    .filter('answerRandomizer', function () {
      return function(input) {
        console.log("filter runnin");
        return "hej";
      }
    })

})();
