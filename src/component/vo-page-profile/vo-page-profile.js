angular.module('voPortal').component('voPageProfile', {
  templateUrl: './component/vo-page-profile.html',
  controller: voPageProfileController,
});

function voPageProfileController($scope) {
  this.$onInit = () => {
    $.get('http://localhost:3000/api/v1/users/1').done((user) => {
      this.showUser(user);
    });
  }

  this.showUser = (user) => {
    $scope.name = user.first_name + ' ' + user.last_name;
    $scope.email = user.email;
    $scope.phone = user.phone;
  }
}