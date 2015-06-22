angular.module( 'ng-startup.signin', ['ui.router.state'])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'signin', {
		url: '/signin',
		views: {
			"main": {
				controller: 'SigninCtrl',
				templateUrl: 'signin/signin.tpl.html'
			}
		},
		data:{ pageTitle: 'Signin' }
	});
	$stateProvider.state( 'signout', {
		url: '/signout',
		views: {
			"main": {
				controller: 'SignoutCtrl'
			}
		},
		data:{ pageTitle: 'Signout' }
	});

})
/**
 * Signin controller
 */
.controller( 'SigninCtrl', ['$rootScope', '$scope', '$stateParams', function SigninController( $rootScope, $scope, $stateParams ) {
	$scope.doLogin = function(username, password) {
		$rootScope.$broadcast("auth:login:success", {'role': 'ROLE_USER', 'provider': 'fakelogin', 'auth': {'username': username, 'password': password}});
	};

}])
/**
 * Signout controller
 */
.controller( 'SignoutCtrl', ['$rootScope', '$scope', '$state', function SigninController( $rootScope, $scope, $state ) {
	$rootScope.$broadcast("auth:logout:success");

}])
;
