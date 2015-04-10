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
          '<ion-item class="item-thumbnail-left" ng-click="goToQuestion(quiz.title)">' +
            '<img ng-if="quiz.image" ng-src="{{quiz.image}}" alt=""/>' +
            '<img ng-if="!quiz.image" ng-src="http://placekitten.com/g/70/70" alt=""/>' +
            '<h2>{{quiz.title}}</h2>' +
            '<h4>Antal frågor: {{quiz.count}}</h4>' +
          '</ion-item>'
        ,
        link: function (scope, el, attrs) {
          //console.log(scope);
        }
      };

      return directive;
    });
})();
