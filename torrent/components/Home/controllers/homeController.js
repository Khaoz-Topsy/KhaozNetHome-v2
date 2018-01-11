angular.module('torrent.Home')
    .controller('HomeController', [
        '$rootScope',  
        '$window',
        '$location',
		'mediaService',
        HomeController
        ]);

function HomeController($rootScope, $window, $location, mediaService) {
    var $ctrl = this;
    $ctrl.Movie = "Dashboard";
	$ctrl.Movies = [];
	$ctrl.Shows = [];
	$ctrl.AnimeD = [];
	$ctrl.AnimeS = [];
    $ctrl.searchText = "";
	$ctrl.showMovies = false;
	$ctrl.showSeries = false;
	$ctrl.showAnimeD = false;
	$ctrl.showAnimeS = false;
	$ctrl.selectedItem = false;
	$ctrl.NoResult = false;
	
	
	$ctrl.hideAll = function(){
		$ctrl.showMovies = false;
		$ctrl.showSeries = false;
		$ctrl.showAnimeD = false;
		$ctrl.showAnimeS = false;
		$ctrl.selectedItem = true;
		$ctrl.NoResult = false;
		$ctrl.searchText = "";
		
		var myDiv = document.getElementById('content');
		myDiv.scrollTop = 0;
    };
	
	$ctrl.filterShow = function () {
        var result = [];
		if($ctrl.showMovies)
		{
			angular.forEach($ctrl.Movies, function(data){
				if(data.toLowerCase().indexOf($ctrl.searchText.toLowerCase()) != -1)
				{
					result.push(data);
				}
			});
		}
		if($ctrl.showSeries)
		{
			angular.forEach($ctrl.Shows, function(data){
				if(data.rootFolder.toLowerCase().indexOf($ctrl.searchText.toLowerCase()) != -1)
				{
					result.push(data);
				}
			});
		}
		if($ctrl.showAnimeD)
		{
			angular.forEach($ctrl.AnimeD, function(data){
				if(data.rootFolder.toLowerCase().indexOf($ctrl.searchText.toLowerCase()) != -1)
				{
					result.push(data);
				}
			});
		}
		if($ctrl.showAnimeS)
		{
			angular.forEach($ctrl.AnimeS, function(data){
				if(data.rootFolder.toLowerCase().indexOf($ctrl.searchText.toLowerCase()) != -1)
				{
					result.push(data);
				}
			});
		}
		
		if(result.length < 1)
		{
			$ctrl.NoResult = true;
		}
		else 
		{
			$ctrl.NoResult = false;
		}
		
        return result;

    };

	$ctrl.MovieClick = function(){
		if($ctrl.Movies.length < 1)
		{
			mediaService.getMovies($ctrl);
		}
		$ctrl.hideAll();
		$ctrl.showMovies = true;
    };
	
	$ctrl.ShowClick = function(){
		if($ctrl.Shows.length < 1)
		{
			mediaService.getShows($ctrl);
		}
		$ctrl.hideAll();
		$ctrl.showSeries = true;
    };

	$ctrl.AnimeDClick = function(){
		if($ctrl.AnimeD.length < 1)
		{
			mediaService.getAnimeD($ctrl);
		}
		$ctrl.hideAll();
		$ctrl.showAnimeD = true;
    };

	$ctrl.AnimeSClick = function(){
		if($ctrl.AnimeS.length < 1)
		{
			mediaService.getAnimeS($ctrl);
		}
		$ctrl.hideAll();
		$ctrl.showAnimeS = true;
    };
	
}