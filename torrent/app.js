angular.module('torrent', [
    'torrent.Home',
	'torrent.ResourceManager',
    'ngRoute'
])

    // .value('remoteURL', 'http://topsy.net/MyTestService.asmx')

    // .constant('remoteURL', 'http://topsy.net/MyTestService.asmx')
    // //$rootScope

    .config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('');
        // $locationProvider.html5Mode(true).hashPrefix('!');
        
        $httpProvider.defaults.headers.post = {};
    }]);
    // .controller('HomeController', ['$rootScope', HomeController]);
