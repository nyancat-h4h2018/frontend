angular.module('voPortal').component('voPageDonate', {
  templateUrl: './component/vo-page-donate.html',
  controller: voPageDonateController
});

function voPageDonateController($scope) {
  this.$onInit = () => {
    var test_items = [{item: 'Coats', quantity_needed: 60, current_status: 'active', item_category_id: 1, organization_id: 2}, {item: 'Books', quantity_needed: 100, current_status: 'almost full', item_category_id: 3, organization_id: 2 }];

    var test_org = {
      "org_name":"St. Anthony's",
      "email":"sta@gmail.com",
      "password":"password",
      "phone":"23533",
      "address":"150 Golden Gate Avenue San Francisco, CA 94102",
      "description":"Providing essential support to San Franciscans living in poverty since 1950.",
      "items_neededs": test_items
    }

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 12
    });

    // Get organizations
    $.get('localhost:3000/api/v1/organizations/')
     .done((data) => {
       data.forEach((org) => {
         var orgInfo = MakeInfo(org);
         AddressToMarker(org.address, orgInfo);
       })
     });

    // var newInfo = MakeInfo(test_org);
    // AddressToMarker(test_org.address, newInfo);

    // Helper functions
    function MakeInfo(org) {
      var items = org.items_neededs;

      var contentString = '';
      contentString += '<div class="">';
      contentString += '<h4><b>' + org.org_name + '</b></h4>';
      contentString += '<p>' + org.description + '</p>';

      contentString += '<b>Want:</b>';
      contentString += '<ul>'
      items.forEach((item) => {
        contentString += '<li>' + item.item + ' x' + item.quantity_needed + '</li>';
      });
      contentString += '</ul>'

      contentString += '</div>'

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
      });
      return infowindow;
    }

    function AddressToMarker(address, info) {
      $.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + address + '&inputtype=textquery&fields=formatted_address,name,geometry&key=AIzaSyBQFTruDSetYdtTgGAnVrFS4dWOiPKjn7w')
       .done((data) => {
         var pos = data.candidates[0].geometry.location;
         var marker = new google.maps.Marker({
           position: new google.maps.LatLng(pos.lat, pos.lng),
           title: "Org Marker"
         });
         marker.setMap(map);
         marker.addListener('click', () => {
           info.open(map, marker)
         })
       });
    }
  }
}
