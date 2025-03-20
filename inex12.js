document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    document.getElementById('message').style.display = 'block'; // Show the message
  });