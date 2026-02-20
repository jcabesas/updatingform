const scriptURL = 'https://script.google.com/macros/s/AKfycbxppUuj7TYhcuTl-wr_yr-GAJw8x_JqyZprGUR0m-oVsehlNSiz4_8_kn70_7DKxc4Cmg/exec';
const form = document.getElementById("memberForm");
const messageDiv = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text()) // <-- convert response to text first
  .then(data => {
    // Show success message regardless of Apps Script returning JSON
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
