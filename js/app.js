angular.module('app', [])

.controller('AppCtrl', function($scope) {
  $scope.tweets = [];
  $scope.searchTerm = '';

  $scope.safeApply = function( fn ) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
