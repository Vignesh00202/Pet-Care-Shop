document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name === '' || email === '' || message === '') {
      alert("Please fill in all fields");
      return;
    }
  
    fetch("/your-server-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("Message sent successfully");
        document.getElementById("contactForm").reset();
      } else {
        alert("Failed to send message");
      }
    })
    .catch(function(error) {
      console.log(error);
      alert("An error occurred while sending the message");
    });
  });
  