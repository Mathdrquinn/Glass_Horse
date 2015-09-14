angular
    .module('OCDirectory')
    .controller('appCtrl',['$scope', '$filter', '$firebaseObject', '$firebaseArray', function ($scope, $filter, $firebaseObject, $firebaseArray) {

        $scope.test = 'working';

        //Broadcasting Filters
        $scope.yell = function (word) {
            $scope.$broadcast('word', word);
        };
        $scope.$on('word', function (event, data) {
            console.log('brendan'); // 'Some data'
        });

        // Setting up individual Discipline
        // Initalize firebase and store the data
        var teamInfoRef = new Firebase("https://ocdirectory.firebaseio.com/info");
        // download the data into a local object
        var syncObject = $firebaseObject(teamInfoRef);
        // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, "teamInfo");

        // Initializing list of discipline names
        // Initalize firebase Array and store the data
        var disciplineListRef = new Firebase("https://ocdirectory.firebaseio.com/DisciplineList");
        // Storing Array in local variable
        $scope.disciplineList = $firebaseArray(disciplineListRef);

}]);