angular.module('ng-startup.remote', [])
/**
  an example of service that works with RESTful resourse
*/
.service('NewsRest', ['crRemoteHttp', function(crRemoteHttp){
  var service = crRemoteHttp.createService("news");
  return service;
}])
;
