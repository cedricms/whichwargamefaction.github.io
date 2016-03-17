var app = angular.module("wargameApp", ['pascalprecht.translate']);

// i18n
app.config(function($translateProvider) {
  $translateProvider.translations('en', {
    WHICH_WARGAME_FACTION_IS_FOR_YOU: 'Which wargame faction is for you?',
    SEARCH_INPUT: 'Search ...',
    CONTRIBUTE: 'Contribute',
    ABOUT: 'About',
    ABOUT_TEXT: 'This is a tool to help people choose their wargame faction and get started out in the hobby. The aim is to reference starter boxes in order to help futur players choose what best suits them.',
    MANUFACTURER: 'Manufacturer',
    UNIVERS: 'Univers',
    FACTION: 'Faction',
    NAME: 'Name',
    PRICE: 'Price',
    NUMBER_OF_MINIATURES: 'Number of Miniatures',
    PRICE_PER_MINIATURES: 'Price per Miniature',
    STRATEGY_TYPE: 'Strategy Type',
    THEME: 'Theme',
    ARMY_COLOURS: 'Faction Colours',
    UPDATE_DATE: 'Update date'
  })
  .translations('fr', {
    WHICH_WARGAME_FACTION_IS_FOR_YOU: 'Quelle faction de jeu de stratégie est pour vous?',
    SEARCH_INPUT: 'Rechercher ...',
    CONTRIBUTE: 'Contribuer',
    ABOUT: 'A propos',
    ABOUT_TEXT: 'Ceci est un outil pouvant vous aider à choisir votre faction dans votre jeu de stratégie et débuter dans ce loisir. Le but est de référencer les kits de démarage afin d\'aider les futures joueurs à trouver ce qui leur correspond le plus.',
    MANUFACTURER: 'Fabricant',
    UNIVERS: 'Univers',
    FACTION: 'Faction',
    NAME: 'Nom',
    PRICE: 'Prix',
    NUMBER_OF_MINIATURES: 'Nombre de Figures',
    PRICE_PER_MINIATURES: 'Prix par Figurine',
    STRATEGY_TYPE: 'Type de Strategie',
    THEME: 'Thème',
    ARMY_COLOURS: 'Couleurs de la Faction',
    UPDATE_DATE: 'Date de mise à jour'
  });
  
  // Security disabled. Check documentation for further changes : http://angular-translate.github.io/docs/#/guide/19_security
  $translateProvider.useSanitizeValueStrategy(null);
  
  // Documentation : http://www.ng-newsletter.com/posts/angular-translate.html
  $translateProvider.determinePreferredLanguage(function () {
    var userLanguage = navigator.language;
    if (userLanguage === 'fr') {
    	return userLanguage;
    }
    else {
    	return 'en';
    }
  });
});

app.controller("ArmyController", function($scope, $http) {
  $http.get('./js/json/armies.json')
       .then(function(response){
    $scope.armies = response.data;
  });
});