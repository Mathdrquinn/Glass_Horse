(function () {
    "use strict";

    angular
    .module('carouselApp')
      .controller('homeCtrl',['$scope', '$filter', '$firebaseArray',
        function ($scope, $filter, $firebaseArray) {

          $scope.works = 'Home Ctrl is here';
          $scope.test = 'working';

        }]);

        angular
        .module('carouselApp')
          .controller('optionsCtrl',['$scope', '$filter', '$state',
            function ($scope, $filter, $state) {
              $state.go('main.home.general');
            }]);


})();
