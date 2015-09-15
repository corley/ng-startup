angular.module('ng-startup.paginator', [
    "cr.remote"
])
.config(['crRemoteProvider', function paginatorConf(crRemoteProvider) {
  crRemoteProvider.addResponseInterceptorSuccess("paginator", function(data){
      var limit = 10;
      var headers = data.headers();
      var pager = false;
      if(headers && headers['x-count']) {
        pager = {
          pages: 0,
          page: 1,
          last: false
        };
        pager.count = parseInt(headers['x-quantity']);
        pager.total = parseInt(headers['x-count']);
        pager.from = parseInt(headers['x-from']);
        pager.params = data.config.params;
        pager.to = parseInt(headers['x-to']);
        pager.page = parseInt(headers['x-page']);
        pager.next = parseInt(headers['x-next']);
        pager.prev = parseInt(headers['x-prev']);
      }
      return {
        "data": data.data,
        "headers": data.headers(),
        "status": data.status,
        "pager": pager
      };
    });
}])
.directive('paginator', ['$state', function($state){
    return {
        restrict: "E",
        templateUrl: 'paginator/paginator.tpl.html',
        replace: true,
        scope: {
          state: "=",
          stateParams: "=",
          pageInfo: "="
        },
        link: function (scope) {
            scope.$watch('headers', function (headers) {
              scope.go = function(page) {
                if(!scope.stateParams) {
                  scope.stateParams = {};
                }
                scope.stateParams.page = page;
                scope.pageInfo.page = page;
                $state.go(scope.state, scope.stateParams);
              };
            });
        }
    };
}]);
