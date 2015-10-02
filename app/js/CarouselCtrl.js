(function () {
    "use strict";

    angular
        .module('carouselApp')
        .controller('carouselCtrl',['$scope', '$filter', '$state', 'carouselSvc', function ($scope, $filter, $state, carouselSvc) {

            $scope.works = 'CarouselCtrl is here';

            var carouselHtml = carouselSvc.carouselHtml

            // Set Initial Options
            $scope.options = carouselSvc.options;

            // Set up Standard Options for reference
            $scope.standardOptions = carouselSvc.standardOptions;

            // Clean options from HTML ready to JS ready
            $scope.cleanOptions = carouselSvc.cleanOptions;

            // Gets code ready to print
            $scope.printOptions = carouselSvc.printOptions;
            // $scope.printOptions = function(x, y) {
            //   return 'poop';
            // }

            //Show Options
            // console.log('options')
            // console.log($scope.options);

            // Initialize Swiper
            $scope.mySwiper = new Swiper ('.swiper-container', $scope.cleanOptions($scope.options));
            // Show Swiper Params
            // console.log($scope.mySwiper.params);

            // Form Functions
            $scope.change = function () {
                // console.log('change');
                pending('.swiper-outer-container', $scope.options);
            };
            $scope.lazyChange = function (bool, key) {
                // console.log('lazy change');
                $scope.options[key] = !bool ? '1': $scope.options[key];
                pending('.swiper-outer-container', $scope.options);
            };
            var pending = function (location, options) {
                // console.log('pending');
                $('.swiper-outer-container').html('<div class=\'pending\'><img id=\'pending\' src=\'images/pending.gif\' alt=\'pending\'/></div>');
                destory(options, start);
            }
            var destory = function (options) {
                // console.log('destroy');
                $scope.mySwiper.destroy();
                if(options.lazyLoading) {
                  $('.swiper-outer-container').html(carouselHtml.getLazyHtml());
                }
                else {
                  $('.swiper-outer-container').html(carouselHtml.getHtml());
                }
                start(options);
            }
            var start = function (options) {
                // console.log('start');
                $scope.mySwiper = new Swiper ('.swiper-container', $scope.cleanOptions(options));
                console.log($scope.mySwiper.params)
                $('.pending').detach();
                carouselSvc.setNewOptions(options);
            }
            //Event Listeners

        }]);

})();
