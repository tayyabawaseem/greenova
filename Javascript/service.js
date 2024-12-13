
 
 // Get today's date
var today = new Date().toISOString().split('T')[0];
// Set the minimum value for the appointment date input
document.getElementById("appointmentDate").min = today;

var appointmentTimeInput = document.getElementById("appointmentTime");

appointmentTimeInput.addEventListener('input', function() {
    var selectedTime = appointmentTimeInput.value;
    var selectedHour = parseInt(selectedTime.split(':')[0]);

    if (selectedHour < 9 || selectedHour > 17) {
        appointmentTimeInput.setCustomValidity('Please select a time between 9am and 5pm.');
    } else {
        appointmentTimeInput.setCustomValidity('');
    }
});

var appointmentForm = document.querySelector('form');

appointmentForm.addEventListener('submit', function(event) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checked = Array.prototype.slice.call(checkboxes).some(function(checkbox) {
        return checkbox.checked;
    });

    if (!checked) {
        // alert('Please select at least one service.');
        event.preventDefault();
    }
});
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('appointmentForm');

  // Form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

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
});




