
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const LOCALSTORAGE_KEY = 'feedback-form-state';

populateFormFields();

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

function populateFormFields() {
  const savedFormState = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedFormState) {
    const { email, message } = JSON.parse(savedFormState);
    emailInput.value = email;
    messageInput.value = message;
  }
}

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
