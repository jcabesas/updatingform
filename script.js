const scriptURL = "https://script.google.com/macros/s/AKfycbxgcHk1ah92ttOc_sJB6qpm9TV5C-dOy_aa8t6tfI8xwq04Dku7Bm5ov551RvJ3apisEw/exec";

document.getElementById("memberForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    if (result === "success") {
      alert("Membership Successful! Thank you for submitting your application.");
      this.reset();
    } else {
      alert("Error submitting form.");
    }
  })
  .catch(error => {
    console.error("Error!", error);
    alert("Submission failed.");
  });
});
