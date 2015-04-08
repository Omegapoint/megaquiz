angular.module('app.controllers', [])

    .controller('QuizCtrl', function ($rootScope, $scope, Quiz, $state) {
        // TODO Write controller code for quiz controller
        $scope.quizList = [
            {
                title: "robertquizzen",
                count: 4,
                img: 'https://placekitten.com/g/50/50',
                reference_gid: 112309823
            },
            {
                title: "toraquihhzzen",
                count: 2,
                img: 'https://placekitten.com/g/50/50',
                reference_gid: 112311223
            }
        ];

        Quiz.loadData().$promise.then(function (response) {
            $scope.quizzes = response;
        });

        $scope.goToQuestion = function(quizId) {
            $state.go('tab.quiz-question', {id:quizId});
        }
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

