    var link = document.querySelector(".contacts-button");
    var popup = document.querySelector(".feedback-overlay");
    var close = popup.querySelector(".feedback-close");
    var feedback = popup.querySelector(".feedback");
    var form = popup.querySelector(".feedback-form");
    var userName = popup.querySelector("[name=name]");
    var userEmail = popup.querySelector("[name=email]");
    var userMessage = popup.querySelector("[name=message]");
    var isStorageSupport = true;
    var storageName = "";
    var storageEmail = "";

    try {
      storageName = localStorage.getItem("userName");
      storageEmail = localStorage.getItem("userEmail");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show-form");

      if (storageName && storageEmail) {
        userName.value = storageName;
        userEmail.value = storageEmail;
        userMessage.focus();
      } else {
        userName.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-close-form");
      setTimeout(function () {
        popup.classList.remove("modal-show-form");
        popup.classList.remove("modal-close-form");
        feedback.classList.remove("modal-error-form");
      }, 600);
    });

    userEmail.addEventListener("input", function (event) {
      if (userEmail.validity.patternMismatch) {
        userEmail.setCustomValidity("Неверный формат! Верный: email@example.com");
      } else {
        userEmail.setCustomValidity("");
      }
    });

    userName.addEventListener("input", function (event) {
      if (userName.validity.patternMismatch) {
        userName.setCustomValidity("Допустимо использовать только буквы!");
      } else {
        userName.setCustomValidity("");
      }
    });

    form.addEventListener("submit", function (evt) {
      if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error-form");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error-form");
      } else if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show-form")) {
          popup.classList.add("modal-close-form");
          setTimeout(function () {
            popup.classList.remove("modal-show-form");
            popup.classList.remove("modal-close-form");
            feedback.classList.remove("modal-error-form");
          }, 600);
        }
      }
    });
