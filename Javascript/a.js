document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('appointmentForm');
  
    // Form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Check if user is logged in
      if (!isUserLoggedIn()) {
        window.location.href = '../Login/index.html'; // Redirect to the login page
        return;
      }
  
      // Check if all fields are filled and at least one checkbox is checked
      if (!areAllFieldsFilled() || !isAtLeastOneCheckboxChecked()) {
        alert('Please fill out all fields and select at least one service to book your appointment.🙂');
        return;
      }
  
      // Collect form data
      var formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        appointmentDate: document.getElementById('appointmentDate').value,
        appointmentTime: document.getElementById('appointmentTime').value,
        services: getSelectedServices()
      };
  
      // Show confirmation message
      alert('Congratulations! Your appointment is booked. Thank you for choosing our services🙂');
  
      // Optionally, reset the form after showing the alert
      form.reset();
  
      // Show modal after booking (assuming modal is on the current page)
      showModal();
    });
  
    // Function to check if all fields are filled
    function areAllFieldsFilled() {
      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var appointmentDate = document.getElementById('appointmentDate').value;
      var appointmentTime = document.getElementById('appointmentTime').value;
  
      // Check if any field is empty
      if (fullName === '' || email === '' || phone === '' || appointmentDate === '' || appointmentTime === '') {
        return false;
      }
  
      return true;
    }
  
    // Function to check if at least one checkbox is checked
    function isAtLeastOneCheckboxChecked() {
      var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
      return checkboxes.length > 0;
    }
  
    // Helper function to get selected services
    function getSelectedServices() {
      var services = [];
      var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
      checkboxes.forEach(function(checkbox) {
        services.push(checkbox.nextElementSibling.textContent.trim());
      });
  
      return services.join(', ');
    }
  
    // Check if user is logged in (implement your own logic here)
    function isUserLoggedIn() {
      // Replace with actual check, e.g., checking a cookie or localStorage
      return false; // Default to false for demonstration
    }
  
    // Show modal (implement your own modal logic here)
    function showModal() {
      var modal = document.getElementById('confirmationModal');
      if (modal) {
        modal.style.display = 'block'; // Show the modal
      }
    }
  });
  