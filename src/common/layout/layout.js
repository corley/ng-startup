angular.module('ng-startup.layout', [])
.directive('header', [function() {
  return {
    restrict: "AE",
    replace: true,
    templateUrl: "layout/header.tpl.html"
  };
}])
;
