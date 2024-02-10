// 2-form.js
document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');

  // Подія input
  feedbackForm.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
      // Зчитування поточних значень полів форми
      const email = feedbackForm.elements['email'].value.trim();
      const message = feedbackForm.elements['message'].value.trim();

      // Збереження у локальне сховище
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({ email, message })
      );
    }
  });

  // Перевірка та відновлення стану під час завантаження сторінки
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    feedbackForm.elements['email'].value = email;
    feedbackForm.elements['message'].value = message;
  }

  // Подія submit
  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Перевірка обов'язкових полів перед відправленням
    const email = feedbackForm.elements['email'].value.trim();
    const message = feedbackForm.elements['message'].value.trim();

    if (email && message) {
      // Вивід у консоль та очищення сховища та полів форми
      console.log({ email, message });
      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();
    }
  });
});
