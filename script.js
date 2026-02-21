const scriptURL = 'https://script.google.com/macros/s/AKfycbxlplxWt1d_hHSX2tocq-Ks4n9zFZ5HhC4RAganjMP42eTQuKXTiT1Tk_J9_wtpV9jsnw/exec';
const form = document.getElementById("memberForm");
const messageDiv = document.getElementById("formMessage");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Disable button
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  // SHOW MESSAGE IMMEDIATELY (no waiting for Google)
  messageDiv.textContent =
    "Thank you for updating your Membership Profile with us. Wait for our email to the email address you provided regarding the success of your profile updating.";

  messageDiv.className = "form-message success";
  messageDiv.style.display = "block";

  messageDiv.scrollIntoView({ behavior: "smooth" });

  const formData = new FormData(form);

  // Send in background
  fetch(scriptURL, {
    method: "POST",
    body: formData,
    mode: "no-cors"   // VERY IMPORTANT
  })
  .then(() => {
    form.reset();
  })
  .catch(() => {
    console.log("Background submit failed but message already shown.");
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  });
});
