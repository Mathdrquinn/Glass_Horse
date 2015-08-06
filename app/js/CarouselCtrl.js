(function () {
    "use strict";

    angular
        .module('CarouselApp')
        .controller('carouselCtrl',['$scope', '$filter', '$routeParams', function ($scope, $filter, $routeParams) {

            $scope.works = 'CarouselCtrl is here';

            var carouselHtml = {
                outerTopHtml: [
                    '<div class=\'swiper-container\'>',
                    '<!-- Additional required wrapper -->',
                        '<div class=\'swiper-wrapper\'>'
                ].join(''),
                standardSlidesHtml: [
                    '<!-- Begin Slides -->',
                    '<div class=\'swiper-slide\'>',
                        '<span class=\'slide-title\'>Slide 1</span>',
                        '<img src=\'images/300_1.jpg\' alt=\'Placebear\' />',
                    '</div>',
                    '<div class=\'swiper-slide\'>',
                        '<span class=\'slide-title\'>Slide 2</span>',
                        '<img src=\'images/red.jpg\' alt=\'Placebear\' />',
                    '</div>',
                    '<div class=\'swiper-slide\'>',
                        '<span class=\'slide-title\'>Slide 3</span>',
                        '<img src=\'images/301.jpeg\' alt=\'Placebear\' />',
                    '</div>',
                    '<div class=\'swiper-slide\'>',
                        '<span class=\'slide-title\'>Slide 4</span>',
                        '<img src=\'images/300.jpeg\' alt=\'Placebear\' />',
                    '</div>',
                    '<!-- End Standard Slides-->'
                ].join(''),
                additionalSlidesHtml: [],
                outerBottomHtlm: [
                        '</div>',
                        '<!-- If we need pagination -->',
                        '<div class=\'swiper-pagination\'></div>',
                        '<!-- If we need navigation buttons -->',
                        '<div class=\'swiper-button-prev\'></div>',
                        '<div class=\'swiper-button-next\'></div>',
                        '<!-- If we need scrollbar -->',
                        '<div class=\'swiper-scrollbar\'></div>',
                    '</div>'
                ].join(''),
                getAdditionalSlideHtml: function () {
                    return this.additionalSlidesHtml;
                },
                getHtml: function () {
                    return this.outerTopHtml + this.standardSlidesHtml + this.getAdditionalSlideHtml() + this.outerBottomHtlm;
                }
            };

            // Set Initial Options
            $scope.options = {
                initialSlide: 0,
                direction: 'horizontal',
                speed: 300,
                loop: '1',
                setWrapperSize: false,
                //width: 500,
                height: 315,
                autoplay: 0,
                autoplayDisableOnInteraction: '1',
                watchSlidesProgress: '1',
                freeMode: '',
                freeModeMomentum: '1',
                freeModeMomentumBounce: '1',
                freeModeSticky: '',
                // Int
                freeModeMomentumRatio: 1,
                freeModeMomentumBounceRatio: 1,
                effect: 'slide',
                fade: {
                    crossFade: ''
                },
                cube: {
                    slideShadows: '1',
                    shadow: '1',
                    shadowOffset: 20,
                    shadowScale: 0.94
                },
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShows: '1'
                },
                parallax: '',
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'column',
                slidesPerGroup: 1,
                centeredSlides: '',
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                grabCursor: ''

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
                // Boolean deafult: true
                autoplayDisableOnInteraction: Boolean($scope.options.autoplayDisableOnInteraction),
                watchSlidesProgress: Boolean($scope.options.watchSlidesProgress),
                freeMode: Boolean($scope.options.freeMode),
                freeModeMomentum: Boolean($scope.options.freeModeMomentum),
                freeModeMomentumBounce: Boolean($scope.options.freeModeMomentumBounce),
                freeModeSticky: Boolean($scope.options.freeModeSticky),
                // Int
                freeModeMomentumRatio: $scope.options.freeModeMomentumRatio,
                freeModeMomentumBounceRatio: $scope.options.freeModeMomentumBounceRatio,
                // String "fade", "slide", "cube", "coverflow"; deafult:"slide"
                effect: $scope.options.effect,
                // Effect Object
                fade: {
                    crossFade: Boolean($scope.options.fade.crossFade)
                },
                cube: {
                    slideShadows: Boolean($scope.options.cube.slideShadows),
                    shadow: Boolean($scope.options.cube.shadow),
                    shadowOffset: $scope.options.cube.shadowOffset,
                    shadowScale: $scope.options.cube.shadowScale
                },
                coverflow: {
                    rotate: $scope.options.coverflow.rotate,
                    stretch: $scope.options.coverflow.stretch,
                    depth: $scope.options.coverflow.depth,
                    modifier: $scope.options.coverflow.modifier,
                    slideShows: Boolean($scope.options.coverflow.slideShows)
                },
                parallax: Boolean($scope.options.parallax),
                spaceBetween: $scope.options.spaceBetween,
                slidesPerView: $scope.options.slidesPerView,
                slidesPerColumn: $scope.options.slidesPerColumn,
                slidesPerColumnFill: $scope.options.slidesPerColumnFill,
                slidesPerGroup: $scope.options.slidesPerGroup,
                centeredSlides: Boolean($scope.options.centeredSlides),
                slidesOffsetBefore: $scope.options.slidesOffsetBefore,
                slidesOffsetAfter: $scope.options.slidesOffsetAfter,
                grabCursor: Boolean($scope.options.grabCursor),
                // If we need pagination
                pagination: '.swiper-pagination',

                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',

                // And if we need scrollbar
                scrollbar: '.swiper-scrollbar'
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
                $('.swiper-outer-container').html('<div class=\'pending\'><img id=\'pending\' src=\'images/pending.gif\' alt=\'pending\'/></div>');
                destroy(options, start);
            }
            function destroy(options, start) {
                console.log('destroy');
                $scope.mySwiper.destroy();
                $('.swiper-outer-container').html(carouselHtml.getHtml());
                start(options);
            }
            function start(options) {
                console.log('start');
                $scope.mySwiper = new Swiper ('.swiper-container', {
                    initialSlide: options.initialSlide,
                    direction: options.direction,
                    speed: options.speed,
                    loop: Boolean(options.loop),
                    //setWrapperSize: options.setWrapperSize,
                    //width: options.width,
                    //height: options.height,
                    // Boolean deafult: true
                    autoplayDisableOnInteraction: Boolean(options.autoplayDisableOnInteraction),
                    watchSlidesProgress: Boolean(options.watchSlidesProgress),
                    freeMode: Boolean(options.freeMode),
                    freeModeMomentum: Boolean(options.freeModeMomentum),
                    freeModeMomentumBounce: Boolean(options.freeModeMomentumBounce),
                    freeModeSticky: Boolean(options.freeModeSticky),
                    freeModeMomentumRatio: options.freeModeMomentumRatio,
                    freeModeMomentumBounceRatio: options.freeModeMomentumBounceRatio,
                    effect: options.effect,
                    fade: {
                        crossFade: Boolean(options.fade.crossFade)
                    },
                    cube: {
                        slideShadows: Boolean(options.cube.slideShadows),
                        shadow: Boolean(options.cube.shadow),
                        shadowOffset: options.cube.shadowOffset,
                        shadowScale: options.cube.shadowScale
                    },
                    coverflow: {
                        rotate: options.coverflow.rotate,
                        stretch: options.coverflow.stretch,
                        depth: options.coverflow.depth,
                        modifier: options.coverflow.modifier,
                        slideShows: Boolean(options.coverflow.slideShows)
                    },
                    parallax: Boolean(options.parallax),
                    spaceBetween: options.spaceBetween,
                    slidesPerView: options.slidesPerView,
                    slidesPerColumn: options.slidesPerColumn,
                    slidesPerColumnFill: options.slidesPerColumnFill,
                    slidesPerGroup: options.slidesPerGroup,
                    centeredSlides: Boolean(options.centeredSlides),
                    slidesOffsetBefore: options.slidesOffsetBefore,
                    slidesOffsetAfter: options.slidesOffsetAfter,
                    grabCursor: Boolean(options.grabCursor),

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

            //Event Listeners
            $('#sub-nav').on('click', 'a', function(e) {
                e.preventDefault();
                console.log('nav click')
                var $this = $(this);
                var group = $this.data('group');
                $('.sub-nav-item a').removeClass('active');
                $this.addClass('active');
                $('.show-group').removeClass('show-group');
                $('#' + group).addClass('show-group')

            })

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