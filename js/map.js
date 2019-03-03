    var linkMap = document.querySelector(".map-link");
    var popupMap = document.querySelector(".map-overlay");
    var closeMap = popupMap.querySelector(".map-close");

  
    linkMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMap.classList.add("modal-show-map");
    });

    closeMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMap.classList.add("modal-close-map");
      setTimeout(function(){
        popupMap.classList.remove("modal-show-map");
        popupMap.classList.remove("modal-close-map");
      }, 600);
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show-map")) {
          popupMap.classList.add("modal-close-map");
          setTimeout(function(){$(popupMap).removeClass("modal-show-map");},600);
          setTimeout(function(){$(popupMap).removeClass("modal-close-map");},600);
        }
      }
    });
