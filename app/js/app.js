console.log('brendan');

angular
  .module('carouselApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
  ])
  .config(($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('markup', {
      url: '/markup',
      views: {
        'page': {
          templateUrl: 'views/markup.html',
          controller: 'carouselCtrl'
        }
      }
    })
    .state('main', {
      url: '',
      views: {
        'page': {
          templateUrl: 'views/carousel/carousel.html',
          controller: 'carouselCtrl'
        }
      },
      abstract: true
    })
    .state('main.general', {
      parent: 'main',
      url: '/',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/general.html'
        }
      }
    })
    .state('main.freemode', {
      parent: 'main',
      url: '',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/freeMode.html'
        }
      }
    })
    .state('main.effect', {
      parent: 'main',
      url: '',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/effect.html'
        }
      }
    })
    .state('main.spacing', {
      parent: 'main',
      url: '',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/spacing.html'
        }
      }
    })
    .state('main.touch', {
      parent: 'main',
      url: '',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/touch.html'
        }
      }
    })
    .state('main.other', {
      parent: 'main',
      url: '',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/other.html'
        }
      }
    })
});
