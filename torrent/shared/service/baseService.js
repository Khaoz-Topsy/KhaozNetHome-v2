angular.module('torrent.ResourceManager')
    .service('baseService', function ($http) {
        var $baseResource = this;
		
        var URL = 'http://api.khaoznet.xyz';

        $baseResource.getURL = function() {

            console.log("global? " + URL);
            return URL; 
        }

        $baseResource.getCelsiusToFahrenheit = function ($ctrl) {
            filter = {Celsius: 3};

            $ctrl.loading = true;

            $http
                .get(URL + '/MyTestService.asmx/CelsiusToFahrenheit', {
                    params: filter
                })
                .then(function (response) {
                    $ctrl.response = response.data;
                    $ctrl.loading = false;
                    console.log($ctrl.response);
                })
                .catch(function (data, status) {
                    $ctrl.response = [];
                    $ctrl.loading = false;
                    console.log("Base resource manager error on Connection");
                });
        };

        

        console.log("Base resource manager created created");
    });