/**
 * Created by novo on 13/03/15.
 */
(function () {
    "use strict";
    angular.module('starter')
        .directive('quizItem', function () {
            return {
                //scope: false,
                scope: {
                    quiz: '='
                },
                restrict: 'EA',
                controller: 'QuizCtrl',
                //template: '<p>Hej {{quiz.title}}</p>',
                template: '<ion-item class="item-thumbnail-left" ng-click="goToQuestion(quiz.reference_gid)"><img ng-src="{{quiz.img}}" alt=""/><h2>{{quiz.title}}</h2><h4>Antal frågor: {{quiz.count}}</h4></ion-item>',
                link:function($scope, iElm, iAttrs, controller) {
                    //console.log(controller);
                    console.log(iElm);
                }
            }
        })

})();
