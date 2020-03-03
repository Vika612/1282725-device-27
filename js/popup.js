

var button = document.querySelector(".write_us-btn");
var popup = document.querySelector(".modal-write_us");
var close = popup.querySelector(".modal-close");
var na_me = popup.querySelector("[name=fullname]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
popup.classList.add("modal-show");
na_me.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});