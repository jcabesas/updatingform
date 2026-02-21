const scriptURL = "https://script.google.com/macros/s/AKfycbwdceIMEQMJwHLOHECppSg_2Tt7sNoOqG967D5QH0IAs4AgcHqIfS4fWEloDelKltm9mQ/exec";
const form = document.getElementById("memberForm");
const messageDiv = document.getElementById("formMessage");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
    mode: "no-cors"   // 🔥 THIS FIXES YOUR PROBLEM
  })
  .then(() => {

    // SHOW SUCCESS MESSAGE
    messageDiv.textContent =
      "Thank you for updating your Membership Profile with us. Wait for our email to the email address you provided regarding the success of your profile updating.";

    messageDiv.className = "form-message success";
    messageDiv.style.display = "block";

    form.reset();

    messageDiv.scrollIntoView({ behavior: "smooth" });
  })
  .catch(() => {
    messageDiv.textContent = "Submission failed. Please try again.";
    messageDiv.className = "form-message error";
    messageDiv.style.display = "block";
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  });
});
