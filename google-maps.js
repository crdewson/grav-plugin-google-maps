jQuery(document).ready(function () {
    var $mapDivs = $('.google-map');
    $mapDivs.each(function (index) {
        var lat = parseFloat($(this).data('lat'));
        var lng = parseFloat($(this).data('lng'));
        var zoom = parseInt($(this).data('zoom'));
        var scrollwheel = Boolean($(this).data('scrollwheel'));
        var draggable = Boolean($(this).data('draggable'));
        var pancontrol = Boolean($(this).data('pancontrol'));
        var icon = $(this).data('iconurl');
        var window = $(this).data('infowindow');
        var radius = parseInt($(this).data('radius'));




        var map = new google.maps.Map(this, {
            center: {lat: lat, lng: lng},
            zoom: zoom,
            scrollwheel: scrollwheel,
            draggable: draggable,
            panControl: pancontrol
        });

        var marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            icon: icon,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        });
  
        var circle = new google.maps.Circle({
            map: map,
            center: {lat: lat, lng: lng},
            radius: radius
        });

        if (window) {
            var infowindow = new google.maps.InfoWindow({
                content: window
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            infowindow.open(map, marker);
        }
    });
});
