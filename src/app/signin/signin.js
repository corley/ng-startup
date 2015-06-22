angular.module( 'ng-startup.signin', ['ui.router.state'])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'signin', {
		url: '/signin',
		views: {
			"blank": {
				controller: 'SigninCtrl',
				templateUrl: 'signin/signin.tpl.html'
			}
		},
		data:{ pageTitle: 'Signin' }
	});

})
/**
 * Home controller
 */
.controller( 'SigninCtrl', ['$rootScope', '$scope', '$stateParams', function SigninController( $rootScope, $scope, $stateParams ) {
	$scope.doLogin = function(username, password) {
		$rootScope.$broadcast("auth:login:success", {'role': 'ROLE_USER', 'provider': 'fakelogin', 'auth': {'username': username, 'password': password}});
	};

}]);
