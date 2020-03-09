

var button = document.querySelector('.write_us-btn');
var popup = document.querySelector('.modal-write_us');
var close = popup.querySelector('.modal-close');
var form = popup.querySelector('form');
var na_me = popup.querySelector('[name=fullname]');
var mail = popup.querySelector('[name=mail]');
var message = popup.querySelector('[name=message]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem(na_me);
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');

if (storage) {
  na_me.value = storage;
  mail.focus();
} else {
  na_me.focus();
} 

if (storage) {
  mail.value = storage;
  message.focus();
} else {
  mail.focus();
}
});


close.addEventListener('click', function (evt) {
  evt.preventDefault();
popup.classList.remove('modal-show');
popup.classList.remove('modal-error');
});


form.addEventListener('submit', function (evt) {
  if (!na_me.value || !mail.value) {
  evt.preventDefault();
  popup.classList.remove('modal-error');
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add('modal-error');
  } else {
      if (isStorageSupport) {
        localStorage.setItem('na_me', na_me.value);
    }
  }
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});