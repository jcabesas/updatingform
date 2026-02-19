const scriptURL = "https://script.google.com/macros/s/AKfycbzeX1IHpviMt__OtAYohjHkCtggXtODXxGlz3VVu-zAj_QUfg5QbLz1k-c9eoM9zlF9lg/exec";

document.getElementById("memberForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const message = document.getElementById("formMessage");
  message.innerHTML = "Submitting... Please wait.";
  message.style.color = "blue";

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    message.innerHTML = "✅ Membership submitted successfully!";
    message.style.color = "green";
    form.reset();
  })
  .catch(error => {
    message.innerHTML = "❌ Error submitting form. Please try again.";
    message.style.color = "red";
  });
});
