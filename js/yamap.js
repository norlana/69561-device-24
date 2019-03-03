// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("yamap", {
            center: [55.686980, 37.529654],
            zoom: 17,
            controls: ["zoomControl", "fullscreenControl", "routeButtonControl"]
        }, {
            fullscreenControlFloat : 'left'
        }),

        myPlacemark = new ymaps.Placemark([55.686980, 37.529654], {
            balloonContent: 'офис магазина Device '
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/mapmark.png',
            iconImageSize: [148, 51],
            iconImageOffset: [-10, -50]
        });
      
      myMap.geoObjects.add(myPlacemark);
    }