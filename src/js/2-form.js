const form = document.querySelector('.feedback-form');
let input = document.getElementsByName('email')[0];
const message = document.getElementsByName('message')[0];
const button = document.getElementsByTagName('button')[0];
const session = sessionStorage.getItem('feedback-form-state');

input.value = session;
message.value = session;

form.addEventListener('click', evt => {
  evt.preventDefault;
  const value = input.value;
  sessionStorage.setItem('feedback-form-state', value);
  sessionStorage.setItem('feedback-form-state', value);
  form.reset();
});
