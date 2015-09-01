angular.module('ng-startup.layout', [])
.directive('header', [function() {
  return {
    restrict: "AE",
    replace: true,
    scope: {
      username: "="
    },
    templateUrl: "layout/header.tpl.html"
  };
}])
;
