const scriptURL = 'https://script.google.com/macros/s/AKfycbxxTTqqnZmcOeJLFDV0kFIWk5JHn_Kcrix1z0O2vQBI45e7BmbbKoKWhECwegUwUyI7Xw/exec';
const form = document.getElementById("memberForm");
const messageDiv = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    messageDiv.textContent = "Thank you for filling out the form. Please wait for our response to the email you provided. Rest assured that we will carefully review all the information you submitted. If anything is missing or needs clarification, we will reach out to you as soon as possible.";
    messageDiv.className = "form-message success";
    messageDiv.style.display = "block";
    form.reset();

    // Auto-hide after 10 seconds
    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 10000);
  })
  .catch(error => {
    console.error(error);
    messageDiv.textContent = "Submission failed. Please try again.";
    messageDiv.className = "form-message error";
    messageDiv.style.display = "block";

    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 10000);
  });
});
