angular.module( 'ng-startup.dashboard', ['ui.router.state', 'cr.remote'])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard?page',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/dashboard.tpl.html'
			}
		},
		data:{ pageTitle: 'Dashboard', is_granted:['ROLE_USER'] }
	});

})
/**
 * Dashboard controller, reserved by Acl
 */
.controller( 'DashboardCtrl', ['$scope', '$stateParams', 'NewsRest', function DashboardCtrl( $scope, $stateParams, NewsRest ) {
  if ($stateParams.page === undefined) {
    $stateParams.page = 1;
  }

	NewsRest.get({params: {"page": $stateParams.page}}).then(function(res) {
		$scope.results = res.data;
    $scope.pager = res.pager;
	});

  $scope.state = "dashboard";

  $scope.chartConfig = {
    options: {
        chart: {
            type: 'bar'
        }
    },
    series: [{
        data: [10, 15, 12, 8, 7]
    }],
    title: {text: 'Hello'},
    loading: false
  };

}])
.service('NewsRest', ['crRemoteHttp', function(crRemoteHttp){
	var service = crRemoteHttp.createService("news", {
    responseInterceptorSuccess: 'paginator',
    auth: true
  });

	return service;
}]);
