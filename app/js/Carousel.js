(function () {
    "use strict";

    angular
        .module('CarouselApp')
        .controller('carouselCtrl',['$scope', '$filter', '$firebaseObject', '$routeParams', function ($scope, $filter, $firebaseObject, $routeParams) {

            $scope.works = 'Angular is here';

        }]);

})();