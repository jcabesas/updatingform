const form = document.getElementById('memberForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const msg = document.getElementById('formMessage');
  
  // Prepare form data
  const formData = new FormData(form);
  const url = "https://script.google.com/macros/s/AKfycbxRJuoxpcGci_075hmYKmhl5mNQCPCZcJPbCRzZZdX18OEFJtpR58k50vV4rqcYJdvQVw/exec"; // paste your deployed web app URL

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData)
    });
    const result = await response.json();

    if(result.result === "success"){
      msg.innerText = "Thank you! Your information has been submitted successfully.";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.innerText = "Error submitting form: " + result.message;
      msg.style.color = "red";
    }

  } catch (error) {
    msg.innerText = "Network error: " + error.message;
    msg.style.color = "red";
  }
});
