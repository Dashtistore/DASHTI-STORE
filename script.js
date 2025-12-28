document.getElementById('pubgForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real website, you would send this data to a database here.
    
    alert("Details submitted! Redirecting to WhatsApp Group for verification...");
    
    // Redirect to your WhatsApp link
    window.location.href = "https://chat.whatsapp.com/G9gZmmICpUC4Kq5tPCw8AH";
});