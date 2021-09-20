$(document).ready(function () {
  let currentFloor = 02,
      counterNumber = $(".counter-number"),
      counterUp = $(".counter-up"),
      counterDown = $(".counter-down"),
      floorPath = $(".home-image path"),
      modal = $(".modal"),
      modalDialog = $(".modal-dialog");

  $(".flats path").on("mouseover", function() {
    currentFlat = $(this).attr("data-flat");

    $(".flat-list a").removeClass("current-link");
    $(".flats path").removeClass("current-flat");

    $(`[data-flat=${currentFlat}]`).addClass("current-flat");
    $(`[data-link=${currentFlat}]`).addClass("current-link");
  });

  $(".flat-list a").on("mouseover", function() {
    currentLink = $(this).attr("data-link");

    $(".flat-list a").removeClass("current-link");
    $(".flats path").removeClass("current-flat");

    $(`[data-flat=${currentLink}]`).addClass("current-flat");
    $(`[data-link=${currentLink}]`).addClass("current-link");
  });

  // выбор этажа при наведении мышкой
  floorPath.on("mouseover", function() {
    currentFloor = $(this).attr("data-floor");
    toggleFloor();
  });

  // смена этажа при клике на стрелку вверх
  counterUp.on("click", function() {
    if (currentFloor < 18) {
      currentFloor++;
      toggleFloor();
    }
  });

  // смена этажа при клике на стрелку вниз
  counterDown.on("click", function() {
    if (currentFloor > 2) {
      currentFloor--;
      toggleFloor();
    }
  });

  // открытие и закрытие модального окна по клику на кнопку и этаж
  $(".modal-close-button").on("click", toggleModal);
  $(".modal-show").on("click", toggleModal);
  floorPath.on("click", toggleModal);
  modal.on("click", toggleModal);
  modalDialog.on("click", modalClick);

  $(document).keydown(function(e) {
    if (e.keyCode === 27 && modal.hasClass("modal-open")) {
      toggleModal();
    }
  });

  function toggleFloor() {
    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false})
    counterNumber.text(usCurrentFloor);

    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  };

  function toggleModal(e) {
    modal.toggleClass("modal-open");
  };

  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

});
