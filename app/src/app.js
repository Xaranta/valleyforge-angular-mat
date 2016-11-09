// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-route';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

//import Controller from 'src/AppController';


export default angular.module( 'starter-app', ['ngRoute', 'ngAnimate','ngMaterial', Users.name ] )
  .config(($routeProvider, $mdIconProvider, $mdThemingProvider) => {
    
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("search", "./assets/svg/search.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);

    /*$mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('light-blue');
      */
     $mdThemingProvider.definePalette('greyscale', {
    '50':  'ffffff',
    '100': 'e5e5e5',
    '200': 'cccccc',
    '300': 'b2b2b2',
    '400': '999999',
    '500': '7f7f7f',
    '600': '666666',
    '700': '4c4c4c',
    '800': '333333',
    '900': '191919',
    'A100': '000000',
    'A200': '000000',
    'A400': '000000',
    'A700': 'ffffff',
         
    '50':  'ffffff',
    '100': 'e5e5e5',
    '200': 'cccccc',
    '300': 'b2b2b2',
    '400': '999999',
    '500': 'ffffff',
    '600': '666666',
    '700': '4c4c4c',
    '800': '333333',
    '900': '191919',
    'A100': '000000',
    'A200': '000000',
    'A400': '000000',
    'A700': 'ffffff',     
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
    
    $routeProvider
    	.when('/', {
    		templateUrl: 'welcome-home.html',
            controller: 'mainController'
    	})
    	.when('/home', {
    		templateUrl: 'grid-home.html',
            controller: 'gridController'
    	});

  $mdThemingProvider.theme('default')
    .primaryPalette('greyscale')
  })


  .controller('AppController', AppController)
    .controller('BasicDemoCtrl', BasicDemoCtrl)
    .controller('PanelDialogCtrl', PanelDialogCtrl)
    .controller('mainController', mainController)
    .controller('gridController', gridController);

function mainController($scope){
    $scope.pageClass = 'welcome-home';
}

function gridController($scope){
    $scope.pageClass = 'grid-home';
}

  //.controller('GridMenuController', GridMenuController);

function BasicDemoCtrl($mdPanel) {
  this._mdPanel = $mdPanel;

  this.disableParentScroll = false;
}

BasicDemoCtrl.prototype.showDialog = function() {
  var position = this._mdPanel.newPanelPosition()
      .absolute()
      .center();

  var config = {
    attachTo: angular.element(document.body),
    controller: PanelDialogCtrl,
    controllerAs: 'ctrl',
    disableParentScroll: this.disableParentScroll,
    templateUrl: 'panel.tmpl.html',
    hasBackdrop: true,
    panelClass: 'demo-dialog-example',
    position: position,
    trapFocus: true,
    zIndex: 150,
    clickOutsideToClose: true,
    escapeToClose: true,
    focusOnOpen: true
  };

  this._mdPanel.open(config);
};


function PanelDialogCtrl(mdPanelRef) {
  this._mdPanelRef = mdPanelRef;
}

PanelDialogCtrl.prototype.closeDialog = function() {
  var panelRef = this._mdPanelRef;

  panelRef && panelRef.close().then(function() {
    angular.element(document.querySelector('.demo-dialog-open-button')).focus();
    panelRef.destroy();
  });
};




