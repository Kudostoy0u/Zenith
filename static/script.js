document.addEventListener("DOMContentLoaded", function() {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const formObject = {};
    
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Data sent successfully:", data);
      successMessage.style.display = "block";
    })
    .catch(error => {
      console.error("Error sending data:", error);
    });
  });
});