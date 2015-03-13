angular.module('starter.controllers', [])

.controller('QuizCtrl', function($scope) {
    // TODO Write controller code for quiz controller
})

.controller('ResultsCtrl', function($scope) {
    // TODO Write controller code for results controller
})

.controller('QuizQuestionCtrl', function($scope) {
    // TODO Write controller code for quiz questions controller
    $scope.model = {};
    $scope.model.questionLabel = "Fråga 1 av 5";
    $scope.model.question = "Hur använder man angularJS och Ionic?";
    $scope.model.answers = ['Alternativ1', 'Alternativ2'];
});

