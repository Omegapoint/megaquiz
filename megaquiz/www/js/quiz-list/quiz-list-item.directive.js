/**
 * Created by novo on 08/04/15.
 */
(function () {
  "use strict";
  angular
    .module('app')
    .directive('quizListItem', function () {
      var directive = {
        scope: {
          quiz: '='
        },
        restrict: 'EA',
        controller: 'QuizCtrl',
        template:
          '<ion-item class="item-thumbnail-left" ng-click="goToQuestion(quiz.reference_gid)">' +
            '<img ng-src="{{quiz.img}}" alt=""/>' +
            '<h2>{{quiz.title}}</h2>' +
            '<h4>Antal frågor: {{quiz.count}}</h4>' +
          '</ion-item>'
        ,
        link: function (scope, el, attrs) {
          console.log(scope);
        }
      };

      return directive;
    });
})();
