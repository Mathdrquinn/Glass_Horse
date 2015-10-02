console.log('service')
angular.module('carouselApp').factory('carouselSvc', function() {
  var options,
      standardOptions,
      cleanOptions,
      carouselHtml;
  standardOptions = {
      initialSlide: 0,
      direction: 'horizontal',
      speed: 300,
      loop: '1',
      paginationClickable: '1',
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
      grabCursor: '',
      touchRatio: 1,
      touchAngle: 45,
      stimulateTouch: '1',
      shortSwipes: '1',
      longSwipes: '1',
      longSwipesRatio: 0.5,
      followFinger: '1',
      onlyExternal: '',
      threshold: 0,
      touchMoveStopPropagation: '1',
      resistance: '1',
      resistanceRatio: 0.85,
      preventClicks: '1',
      preventClicksPropagation: '1',
      slideToClickedSlide: '',
      allowSwipeToPrev: '1',
      allowSwipeToNext: '1',
      noSwiping: '1',
      // Disable preloading of all images
      preloadImages: '1',
      // Enable lazy loading
      lazyLoading: ''
  };

  options = {
      initialSlide: 0,
      direction: 'vertical',
      speed: 300,
      loop: '1',
      paginationClickable: '1',
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
      grabCursor: '',
      touchRatio: 1,
      touchAngle: 45,
      stimulateTouch: '1',
      shortSwipes: '1',
      longSwipes: '1',
      longSwipesRatio: 0.5,
      followFinger: '1',
      onlyExternal: '',
      threshold: 0,
      touchMoveStopPropagation: '1',
      resistance: '1',
      resistanceRatio: 0.85,
      preventClicks: '1',
      preventClicksPropagation: '1',
      slideToClickedSlide: '',
      allowSwipeToPrev: '1',
      allowSwipeToNext: '1',
      noSwiping: '1',
      // Disable preloading of all images
      preloadImages: '1',
      // Enable lazy loading
      lazyLoading: ''
  };

  cleanOptions = function (options) {
    return {
        initialSlide: options.initialSlide,
        direction: options.direction,
        speed: options.speed,
        loop: Boolean(options.loop),
        //setWrapperSize: options.setWrapperSize,
        //width: options.width,
        //height: options.height,
        autoplay: options.autoplay,
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
        touchRatio: Boolean(options.touchRatio),
        touchAngle: options.touchAngle,
        stimulateTouch: Boolean(options.stimulateTouch),
        shortSwipes: Boolean(options.shortSwipes),
        longSwipes: Boolean(options.longSwipes),
        longSwipesRatio: options.longSwipesRatio,
        followFinger: Boolean(options.followFinger),
        onlyExternal: Boolean(options.onlyExternal),
        threshold: options.threshold,
        touchMoveStopPropagation: Boolean(options.touchMoveStopPropagation),
        resistance: Boolean(options.resistance),
        resistanceRatio: options.resistanceRatio,
        preventClicks: Boolean(options.preventClicks),
        preventClicksPropagation: Boolean(options.ClicksPropagation),
        slideToClickedSlide: Boolean(options.slideToClickedSlide),
        allowSwipeToPrev: Boolean(options.allowSwipeToPrev),
        allowSwipeToNext: Boolean(options.allowSwipeToNext),
        noSwiping: Boolean(options.noSwiping),
        // Disable preloading of all images
        preloadImages: Boolean(options.preloadImages),
        // Enable lazy loading
        lazyLoading: Boolean(options.lazyLoading),

        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: Boolean(options.paginationClickable),

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'

        // And if we need scrollbar
        //scrollbar: '.swiper-scrollbar',
    };
  };
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
      lazySlidesHtml: [
          '<!-- Begin Slides -->',
          '<div class=\'swiper-slide\'>',
              '<span class=\'slide-title\'>Slide 1</span>',
              '<img class="swiper-lazy" data-src=\'images/300_1.jpg\' alt=\'Placebear\' />',
              '<div class="swiper-lazy-preloader"></div>',
          '</div>',
          '<div class=\'swiper-slide\'>',
              '<span class=\'slide-title\'>Slide 2</span>',
              '<img class="swiper-lazy"  data-src=\'images/red.jpg\' alt=\'Placebear\' />',
              '<div class="swiper-lazy-preloader"></div>',
          '</div>',
          '<div class=\'swiper-slide\'>',
              '<span class=\'slide-title\'>Slide 3</span>',
              '<img class="swiper-lazy" data-src=\'images/301.jpeg\' alt=\'Placebear\' />',
              '<div class="swiper-lazy-preloader"></div>',
          '</div>',
          '<div class=\'swiper-slide\'>',
              '<span class=\'slide-title\'>Slide 4</span>',
              '<img class="swiper-lazy" data-src=\'images/300.jpeg\' alt=\'Placebear\' />',
              '<div class="swiper-lazy-preloader"></div>',
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
      },
      getLazyHtml: function () {
          return this.outerTopHtml + this.lazySlidesHtml + this.getAdditionalSlideHtml() + this.outerBottomHtlm;
      }
  };

  printOptions = function (standard, options) {
    var newProps = {};
    console.log(options)
    for (key in options) {
      console.log(key)
      console.log(options[key])
      if (options[key] !== standard[key]) {
        newProps[key] = options[key];
      }
    }
    return JSON.stringify(newProps, null, 4);
  };

  return {
    options: options,
    standardOptions: standardOptions,
    setNewOptions: function (newOpts) {
      options = newOpts;
    },
    printOptions: printOptions,
    cleanOptions: cleanOptions,
    carouselHtml: carouselHtml
  }

})
