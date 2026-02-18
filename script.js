const scriptURL = 'https://script.google.com/macros/s/AKfycbw-czqbqdgA3m2Npm5cMGSu52a0Dp1Jm1ZiDDvJAwewUPXzT7PMltR-mq0Dx66cHeF4Iw/exec';

document.getElementById("memberForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    if (response.result === "success") {
      alert("Membership Successful!
Thank you for submitting your application. Please wait for our confirmation email as we double-check all the information you provided. Kindly monitor the email address you used for registration.

Thank you! 😊");
      this.reset();
    } else {
      alert("Error submitting form.");
    }
  })
  .catch(error => {
    console.error(error);
    alert("Submission failed.");
  });
});
