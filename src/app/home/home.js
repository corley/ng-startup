angular.module( 'ng-startup.home', ['ui.router.state'])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/home',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/home.tpl.html'
			}
		},
		data:{ pageTitle: 'Home' }
	});
	$stateProvider.state( 'page', {
		url: '/page/:pageId',
		views: {
			"main": {
				controller: 'PageCtrl',
				templateUrl: 'home/page.tpl.html'
			}
		},
		data:{ pageTitle: 'Info'}
	});

})
/**
 * Home controller
 */
.controller( 'HomeCtrl', ['$scope', '$stateParams', function HomeController( $scope, $stateParams ) {


}])
/**
 * Page controller to read static infos
 */
.controller( 'PageCtrl', ['$scope', '$stateParams', function HomeController( $scope, $stateParams ) {

	$scope.pageId = $stateParams.pageId;

}])
;
