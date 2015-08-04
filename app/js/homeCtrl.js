(function () {
    "use strict";

    angular
        .module('CarouselApp')
        .controller('homeCtrl',['$scope', '$filter', '$firebaseObject', '$firebaseArray', 'homeSvc', function ($scope, $filter, $firebaseObject, $firebaseArray, homeSvc) {

            $scope.works = 'Angular is here';
            $scope.test = 'working';

            // Set Initial Options
            $scope.options = {
                initialSlide: 0,
                direction: 'horizontal',
                speed: 300,
                loop: '1',
                setWrapperSize: false,
                width: 500,
                height: 315,
                autoplay: 0
            };

            //Show Options
            console.log('options')
            console.log($scope.options);

            // Initialize Swiper
            $scope.mySwiper = new Swiper ('.swiper-container', {
                // Int default: 0
                initialSlide: $scope.options.initialSlide,
                // String: ''vertical' 'horizontal'; default:0
                direction: $scope.options.direction,
                // Int in miliseconds; default: 300
                speed: $scope.options.speed,
                // Boolean default: true
                loop: Boolean($scope.options.loop),
                // Int: default false
                setWrapperSize: $scope.options.setWrapperSize,
                // Int
                width: $scope.options.width,
                // Int
                height: $scope.options.height,
                autoplay: $scope.options.autoplay,


                // If we need pagination
                pagination: '.swiper-pagination',

                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'

                // And if we need scrollbar
                //scrollbar: '.swiper-scrollbar',
            });
            // Show Swiper Params
            console.log($scope.mySwiper.params);



            // Form Functions
            $scope.change = function (location, options) {
                console.log('change');
                pending('.swiper-outer-container', $scope.options, destroy);
            };
            function pending(location, options, callback) {
                console.log('pending');
                $(location).prepend('<div class=\'pending\'><img id=\'pending\' src=\'images/pending.gif\' alt=\'pending\'/></div>');
                destroy(options, start);
            }
            function destroy(options, start) {
                console.log('destroy');
                $scope.mySwiper.destroy();
                start(options);
            }
            function start(options) {
                console.log('start');
                $scope.mySwiper = new Swiper ('.swiper-container', {
                    // Int default: 0
                    initialSlide: options.initialSlide,
                    // String: ''vertical' 'horizontal'; default:0
                    direction: options.direction,
                    // Int in miliseconds; default: 300
                    speed: options.speed,
                    // Boolean default: true
                    loop: Boolean(options.loop),
                    // Int: default false
                    //setWrapperSize: options.setWrapperSize,
                    //// Int
                    //width: options.width,
                    //// Int
                    //height: options.height,


                    // If we need pagination
                    pagination: '.swiper-pagination',

                    // Navigation arrows
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',

                    // And if we need scrollbar
                    //scrollbar: '.swiper-scrollbar',
                });
                console.log($scope.mySwiper.params)
                $('.pending').detach();

            }

            ////Broadcasting Filters
            //$scope.search = {name:''};
            //$scope.yell = function (word) {
            //    $scope.$broadcast('word', word);
            //};
            //$scope.$on('word', function (event, data) {
            //    console.log(data); // 'Some data'
            //    $scope.search.name = data;
            //});

        }]);


})();