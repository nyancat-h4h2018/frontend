angular.module('orPortal').component('orNavbar', {
  templateUrl: './component/or-navbar.html',
  controller: ghNavbarController,
  bindings: {
    route: '='
  }
});

function ghNavbarController($scope) {
  this.$onInit = function() {
    console.log(this.route);
  };

  this.changePage = (newRoute) => {
    this.route = newRoute;
  }
}
