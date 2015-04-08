/**
 * Created by novo on 13/03/15.
 */
(function () {
    "use strict";
    angular.module('app')
        .directive('quizItem', function () {
            return {
                scope: {
                    quiz: '='
                },
                restrict: 'EA',
                controller: 'QuizCtrl',
                template: '<ion-item class="item-thumbnail-left" ng-click="goToQuestion(quiz.reference_gid)"><img ng-src="{{quiz.img}}" alt=""/><h2>{{quiz.title}}</h2><h4>Antal frågor: {{quiz.count}}</h4></ion-item>',
                link:function($scope, iElm, iAttrs, controller) {
                }
            }
        })

})();
