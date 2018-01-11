angular.module('torrent.ResourceManager')
    .service('mediaService', function ($http, baseService) {
        var $mediaResource = this;

        $mediaResource.getMovies = function ($ctrl) {

            $ctrl.loading = true;

            $http
                .get(baseService.getURL() + '/api/Media/Movies', {
                })
                .then(function (response) {
                    $ctrl.Movies = response.data;  
                    $ctrl.loading = false;
                })
                .catch(function (data, status) {
                    $ctrl.Movies = [];
                    $ctrl.loading = false;
					$ctrl.NoResult = true;
                    console.log("Movies resource manager error on Connection");
                });
        };

        $mediaResource.getShows = function ($ctrl) {

            $ctrl.loading = true;

            $http
                .get(baseService.getURL() + '/api/Media/Shows', {
                })
                .then(function (response) {
                    $ctrl.Shows = response.data;  
					$ctrl.ShowsSearch = $ctrl.Shows;
					console.log($ctrl.Shows);
                    $ctrl.loading = false;
                })
                .catch(function (data, status) {
                    $ctrl.Shows = [];
					$ctrl.ShowsSearch = $ctrl.Shows;
                    $ctrl.loading = false;
					$ctrl.NoResult = true;
                    console.log("Movies resource manager error on Connection");
                });
        };

        $mediaResource.getAnimeD = function ($ctrl) {

            $ctrl.loading = true;

            $http
                .get(baseService.getURL() + '/api/Media/Anime/engDub', {
                })
                .then(function (response) {
                    $ctrl.AnimeD = response.data;  
					$ctrl.AnimeDSearch = $ctrl.AnimeD;
					console.log($ctrl.AnimeD);
                    $ctrl.loading = false;
                })
                .catch(function (data, status) {
                    $ctrl.AnimeD = []; 
					$ctrl.AnimeDSearch = $ctrl.AnimeD;
                    $ctrl.loading = false;
					$ctrl.NoResult = true;
                    console.log("AnimeD resource manager error on Connection");
                });
        };

        $mediaResource.getAnimeS = function ($ctrl) {

            $ctrl.loading = true;

            $http
                .get(baseService.getURL() + '/api/Media/Anime/engSub', {
                })
                .then(function (response) {
                    $ctrl.AnimeS = response.data;  
					$ctrl.AnimeSSearch = $ctrl.AnimeS;
					console.log($ctrl.AnimeS);
                    $ctrl.loading = false;
                })
                .catch(function (data, status) {
                    $ctrl.AnimeS = []; 
					$ctrl.AnimeSSearch = $ctrl.AnimeS;
                    $ctrl.loading = false;
					$ctrl.NoResult = true;
                    console.log("AnimeS resource manager error on Connection");
                });
        };

        console.log("Warframe Chart resource manager created created");
    });