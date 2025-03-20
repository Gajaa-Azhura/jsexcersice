document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const input = document.getElementById('inputText').value;
    const messageElement = document.getElementById('message');
  
    messageElement.textContent = `You submitted: "${input}"`;
  
  });