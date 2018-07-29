var orPortal = angular.module('orPortal', ["orUploadCsv.directive.dropzone"]);

orPortal.controller('mainController', ($scope) => {
  $scope.route = 'dashboard';
});
