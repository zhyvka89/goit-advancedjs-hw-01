import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.css';

const formData = {
  email: '',
  message: '',
};

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

checkLocalStorage();

inputRef.addEventListener('input', e => inputHandler(e, 'email'));

textareaRef.addEventListener('input', e => inputHandler(e, 'message'));

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const isValid = Object.values(formData).some(value => value === '');

  if (!isValid) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formRef.reset();
    formData.email = '';
    formData.message = '';
  } else {
    showNotification();
  }
});

function showNotification() {
  new Notify({
    title: 'Empty Field',
    text: 'Please Fill All Fields',
    status: 'error'
  });
}

function checkLocalStorage() {
  const data = localStorage.getItem('feedback-form-state');

  if (data) {
    const parsedData = JSON.parse(data);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    inputRef.value = parsedData.email;
    textareaRef.value = parsedData.message;
  }
}

function inputHandler(event, key) {
  formData[key] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
