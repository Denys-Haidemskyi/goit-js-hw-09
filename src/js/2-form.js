document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');

  feedbackForm.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const email = feedbackForm.elements['email'].value.trim();
      const message = feedbackForm.elements['message'].value.trim();

      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({ email, message })
      );
    }
  });

  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    feedbackForm.elements['email'].value = email;
    feedbackForm.elements['message'].value = message;
  }

  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = feedbackForm.elements['email'].value.trim();
    const message = feedbackForm.elements['message'].value.trim();

    if (email && message) {
      console.log({ email, message });
      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();
    }
  });
});
// DOne //
