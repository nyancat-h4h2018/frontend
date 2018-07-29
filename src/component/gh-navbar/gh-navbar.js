angular.module('giveHub').component('ghNavbar', {
  templateUrl: './component/gh-navbar.html',
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
