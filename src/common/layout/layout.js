angular.module('ng-startup.layout', [])
.directive('header', [function() {
  return {
    restrict: "AE",
    replace: true,
    scope: {
      identity: "=",
      state: "="
    },
    templateUrl: "layout/header.tpl.html"
  };
}])
.directive('left', [function() {
  return {
    restrict: "AE",
    replace: true,
    scope: {
      identity: "=",
      state: "="
    },
    templateUrl: "layout/left.tpl.html"
  };
}])
.directive('right', [function() {
  return {
    restrict: "AE",
    replace: true,
    scope: {
      identity: "=",
      state: "="
    },
    templateUrl: "layout/right.tpl.html"
  };
}])
.directive('footer', [function() {
  return {
    restrict: "AE",
    replace: true,
    scope: {
      identity: "=",
      state: "="
    },
    templateUrl: "layout/footer.tpl.html"
  };
}])
;
