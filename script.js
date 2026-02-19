const scriptURL = "https://script.google.com/macros/s/AKfycbwUSnQTD6xzsBoDWtBCMAWe4GrGK4k-NUC-coeWM3vjjmuIm3MgmU7j5lzeFuO9V70-vw/exec";

document.getElementById("memberForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const msg = document.getElementById("formMessage");
  msg.innerText = "Submitting... Please wait.";
  msg.style.color = "blue";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.result === "success") {
      msg.innerText = "✅ Membership successfully submitted! Please wait for confirmation via email.";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.innerText = "❌ Submission failed. Please try again.";
      msg.style.color = "red";
    }
  } catch (error) {
    msg.innerText = "❌ Error submitting form. Check internet connection.";
    msg.style.color = "red";
  }
});
