

var button = document.querySelector(".write_us-btn");
var popup = document.querySelector(".modal-write_us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var na_me = popup.querySelector("[name=fullname]");
var ma_il = popup.querySelector("[name=mail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem(na_me);
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
popup.classList.add("modal-show");
if (storage) {
  na_me.value = storage;
  ma_il.focus();
} else {
  na_me.focus();
}
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
popup.classList.remove("modal-show");
});


form.addEventListener("submit", function (evt) {
  if (!na_me.value || !ma_il.value) {
  evt.preventDefault();
  console.log("Введите Ваше имя и адрес электронной почты");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("fullname", na_me.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});