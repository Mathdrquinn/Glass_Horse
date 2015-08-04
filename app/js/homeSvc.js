(function () {
    "use strict";

    angular
        .module('CarouselApp')
        .factory('homeSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                //getTeamInfo: getTeamInfo,
                //getAcquisition: getAcquisition,
                //getCreative: getCreative
            };

            //var ref = new Firebase("https://ocdirectory.firebaseio.com/");
            //
            //function getTeamInfo() {
            //
            //    ref.child("ocdirectory/info/Team").on("value", function(snapshot) {
            //
            //        var teamInfo = snapshot.val();
            //        console.log(teamInfo);
            //        return teamInfo;
            //
            //    }, function (errorObject) {
            //        console.log("The read failed: " + errorObject.code);
            //        return 0;
            //    })
            //}
            //
            //function getAcquisition() {
            //
            //    ref.child("Disciplines/Acquisition").on("value", function(snapshot) {
            //
            //        var acquisition = snapshot.val();
            //        console.log(acquisition);
            //        return acquisition;
            //
            //    }, function (errorObject) {
            //        console.log("The read failed: " + errorObject.code);
            //        return 0;
            //    })
            //}
            //
            //function getCreative() {
            //
            //    ref.child("Disciplines/Creative").on("value", function(snapshot) {
            //
            //        var creative = snapshot.val();
            //        console.log(creative);
            //        return creative;
            //
            //    }, function (errorObject) {
            //        console.log("The read failed: " + errorObject.code);
            //        return 0;
            //    })
            //}

            //function getPeople(PeopleId) {
            //    return $http.get("api/collections/featuredDishes/" + PeopleId);
            //}
            //
            //function createPeople(newPeople) {
            //    $http.People("api/collections/featuredDishes", newPeople).then(function (res) {
            //        $rootScope.$broadcast("People:added");
            //    });
            //}
            //
            //function editPeople(People) {
            //    $http.put("api/collections/featuredDishes/" + People._id, People).then(function (res) {
            //        $rootScope.$broadcast("People:updated");
            //    });
            //
            //}
            //
            //function deletePeople(PeopleId) {
            //    $http.delete("api/collections/featuredDishes/" + PeopleId).then(function (res) {
            //        $rootScope.$broadcast("People:deleted");
            //    });
            //}



        }]);
})();