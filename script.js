const scriptURL = 'https://script.google.com/macros/s/AKfycbxlplxWt1d_hHSX2tocq-Ks4n9zFZ5HhC4RAganjMP42eTQuKXTiT1Tk_J9_wtpV9jsnw/exec';
const form = document.getElementById("memberForm");
const messageDiv = document.getElementById("formMessage");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {

    // SUCCESS MESSAGE (YOUR EXACT REQUEST)
    messageDiv.textContent = 
      "Thank you for updating your Membership Profile with us. Wait for our email to the email address you provided regarding the success of your profile updating.";

    messageDiv.className = "form-message success";
    messageDiv.style.display = "block";

    form.reset();

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: "smooth" });

  })
  .catch(error => {
    console.error(error);

    messageDiv.textContent = "Submission failed. Please try again.";
    messageDiv.className = "form-message error";
    messageDiv.style.display = "block";
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  });
});
