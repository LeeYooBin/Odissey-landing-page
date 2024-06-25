const validateEmail = email => {
  const parts = email.split('@');

  if (parts.length !== 2) return false;

  const user = parts[0];
  const domain = parts[1];

  if (user.length === 0 || domain.length === 0) return false;
  if (!domain.includes('.')) return false;
  if (domain.includes('..')) return false;

  return true;
}

const input = document.querySelector('.community__input');
const submitButton = document.querySelector('.community__button');
const successModal = document.querySelector('#success-modal');
const errorModal = document.querySelector('#error-modal');
const errorModalCloseButton = document.querySelector('.error-modal__close-button');
const successModalCloseButton = document.querySelector('.success-modal__close-button');
const body = document.querySelector('body');


submitButton.addEventListener('click', e => {
  if (input.value) {
    if (validateEmail(input.value)) {
      successModal.classList.add('modal-open');
    }
    else {
      errorModal.classList.add('modal-open');
    }
    body.classList.add('no-overflow');
    input.value = '';
  }
  e.preventDefault();
});

errorModalCloseButton.addEventListener('click', () => {
  errorModal.classList.remove('modal-open');
  body.classList.remove('no-overflow');
});

successModalCloseButton.addEventListener('click', () => {
  successModal.classList.remove('modal-open');
  body.classList.remove('no-overflow');
});