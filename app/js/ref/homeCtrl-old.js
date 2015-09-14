(function () {
    "use strict";

    angular
        .module('CarouselApp')
        .controller('homeCtrl',['$scope', '$filter', 'homeSvc', function ($scope, $filter, homeSvc) {

            $scope.works = 'Angular is here';

            //$scope.teamInfo = homeSvc.getTeamInfo();
            //$scope.acquisition = homeSvc.getAcquisition();
            //$scope.creative = homeSvc.getCreative();
            //
            //console.log(homeSvc.getTeamInfo());

            var ref = new Firebase("https://ocdirectory.firebaseio.com/");

            function getTeamInfo() {

                ref.child("info").on("value", function(snapshot) {

                    var info = snapshot.val();
                    return info;

                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                    return 0;
                })
            }

            function getAcquisition() {

                ref.child("Disciplines/Acquisition").on("value", function(snapshot) {

                    var acquisition = snapshot.val();
                    console.log(acquisition);
                    return acquisition;

                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                    return 0;
                })
            }

            function getCreative() {

                ref.child("Disciplines/Creative").on("value", function(snapshot) {

                    var creative = snapshot.val();
                    console.log(creative);
                    return creative;

                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                    return 0;
                })
            }

        }]);

})();