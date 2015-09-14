(function () {
    "use strict";

    carouselApp.controller('homeCtrl',['$scope', '$filter', '$firebaseArray', 
      function ($scope, $filter, $firebaseArray) {

        $scope.works = 'Home Ctrl is here';
        $scope.test = 'working';

      }]);


})();
