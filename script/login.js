const loginButton = document.querySelector('#login-form-button');
const registerButton = document.querySelector('#register-form-button');
const emailLabel = document.querySelector('#email-label');
const inputs = document.querySelectorAll('.login__input');
const showPasswordButton = document.querySelector('.show-password-button');
const showPasswordIcon = document.querySelector('.show-password-icon')
const submitButton = document.querySelector('.login__submit-button');
const emailInput = document.querySelector('#email-input');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const emailErrorMessage = document.querySelector('#email-error-message');
const usernameErrorMessage = document.querySelector('#username-error-message');
const passwordErrorMessage = document.querySelector('#password-error-message');
const errorMessages = document.querySelectorAll('.login__error-message');
const loginModal = document.querySelector('#login-modal');
const loginModalCloseButton = document.querySelector('.login-modal__close-button');
const loginMessage = document.querySelector('.login-message');

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

loginButton.addEventListener('click', () => {
  loginButton.classList.add('login__button-active');
  registerButton.classList.remove('login__button-active');
  emailLabel.classList.add('login__none');
  submitButton.innerHTML = 'Login';
  inputs.forEach(input => {
    input.value = '';
    input.style.border = '.1rem solid var(--black)';
  });
  errorMessages.forEach(message => message.classList.remove('show-error-message'));
});

registerButton.addEventListener('click', () => {
  registerButton.classList.add('login__button-active');
  loginButton.classList.remove('login__button-active');
  emailLabel.classList.remove('login__none');
  submitButton.innerHTML = 'Register';
  inputs.forEach(input => {
    input.value = '';
    input.style.border = '.1rem solid var(--black)';
  });
  errorMessages.forEach(message => message.classList.remove('show-error-message'));
});

showPasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordIcon.src = '../assets/eye-fill.svg';
  } 
  else {
    passwordInput.type = 'password';
    showPasswordIcon.src = '../assets/eye-slash-fill.svg';
  }
});

submitButton.addEventListener('click', e => {
  e.preventDefault();
  
  if (!emailLabel.classList.contains('login__none')) {
    if (emailInput.value === '') {
      emailInput.style.border = '.1rem solid var(--red)';
      emailErrorMessage.innerHTML = 'This field must be filled out.';
      emailErrorMessage.classList.add('show-error-message');
    }
    if (emailInput.value && !validateEmail(emailInput.value)) {
      emailInput.style.border = '.1rem solid var(--red)';
      emailErrorMessage.innerHTML = 'Invalid Email.';
      emailErrorMessage.classList.add('show-error-message');
    }
  }

  if (usernameInput.value === '') {
    usernameInput.style.border = '.1rem solid var(--red)';
    usernameErrorMessage.classList.add('show-error-message');
  }

  if (passwordInput.value === '') {
    passwordInput.style.border = '.1rem solid var(--red)';
    passwordErrorMessage.classList.add('show-error-message');
  }

  if (!emailLabel.classList.contains('login__none')) {
    if (emailInput.value && validateEmail(emailInput.value) && usernameInput.value && passwordInput.value) {
      loginMessage.innerHTML = 'Successful register!';
      loginModal.classList.add('modal-open');
      inputs.forEach(input => {
        input.value = '';
        input.style.border = '.1rem solid var(--black)';
      });
      errorMessages.forEach(message => message.classList.remove('show-error-message'));
    }
  }
  else {
    if (usernameInput.value && passwordInput.value) {
      loginMessage.innerHTML = 'Successful login!';
      loginModal.classList.add('modal-open');
      inputs.forEach(input => {
        input.value = '';
        input.style.border = '.1rem solid var(--black)';
      });
      errorMessages.forEach(message => message.classList.remove('show-error-message'));
    }
  }
});

loginModalCloseButton.addEventListener('click', () => {
  loginModal.classList.remove('modal-open');
});

emailInput.addEventListener('focus', () => {
  emailInput.style.border = '.1rem solid var(--black)';
  emailErrorMessage.classList.remove('show-error-message');
});

usernameInput.addEventListener('focus', () => {
  usernameInput.style.border = '.1rem solid var(--black)';
  usernameErrorMessage.classList.remove('show-error-message');
});

passwordInput.addEventListener('focus', () => {
  passwordInput.style.border = '.1rem solid var(--black)';
  passwordErrorMessage.classList.remove('show-error-message');
});