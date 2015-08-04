(function () {
    "use strict";

    angular
        .module('CarouselApp')
        .controller('homeCtrl',['$scope', '$filter', '$firebaseArray', 'homeSvc', function ($scope, $filter, $firebaseArray, homeSvc) {

            $scope.works = 'Home Ctrl is here';
            $scope.test = 'working';

        }]);


})();