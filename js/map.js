

var mapButton = document.querySelector('.button-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});