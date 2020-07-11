var formButton = document.querySelector(".form-button");
var formModal = document.querySelector(".modal-feedback");
var formClose = document.querySelector(".modal-close");
var formForm = document.querySelector(".feedback-form");
var formName = document.querySelector(".feedback-field-name");
var formEmail = document.querySelector(".feedback-field-email");
var formComment = document.querySelector(".feedback-field-comment");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formModal.classList.add("modal-show");

  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
    formName.focus();
  }
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formModal.classList.remove("modal-show");
  formModal.classList.remove("modal-error");
});

formForm.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value || !formComment.value) {
    evt.preventDefault();
    formModal.classList.remove("modal-error");
    formModal.offsetWidth = formModal.offsetWidth;
    formModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", formName.value);
    localStorage.setItem("email", formEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formModal.classList.contains("modal-show")) {
      evt.preventDefault();
      formModal.classList.remove("modal-show");
      formModal.classList.remove("modal-error");
    }
  }
});
