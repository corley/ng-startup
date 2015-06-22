angular.module('ng-startup.remote', [])
/**
  an example of service that works with RESTful resourse
*/
.service('NasaSatellitesRest', ['crRemoteHttp', function(crRemoteHttp){
  var service = crRemoteHttp.createService("satellites");
  return service;
}])
/**
  an example of customized service that works with RESTful resourse
*/
.service('NasaIssRest', ['crRemoteHttp', '$q', function(crRemoteHttp, $q){
  var service = crRemoteHttp.createService("satellites");
  /**
    custom method with overwritten reseource endpoint to get where ISS  is flying on
  */
  service.getFlyingOn = function(latitude, longitude) {
    return service.get({'resourceName': 'coordinates/' + latitude + ',' + longitude});
  };
  /**
    custom method works with promise to return latitude and longitude of iss
  */
  service.getCoords = function() {
    var d = $q.defer();
    service.get({'id': 25544}).then(function(res) {
      d.resolve({'latitude': res.latitude, 'longitude': res.longiture});
    }, function() {
      d.reject();
    });
    return d;
  };
  return service;
}])
;
