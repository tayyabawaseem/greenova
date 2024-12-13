  // document.addEventListener('DOMContentLoaded', function() {
  //   const form = document.getElementById('billing-form');
    
  //   form.addEventListener('submit', function(event) {
  //     event.preventDefault(); // Prevent form submission
      
  //     // Check if form is valid
  //     if (form.checkValidity() === false) {
  //       event.stopPropagation();
  //       form.classList.add('was-validated');
  //       return;
  //     }
      
  //     // Get form data
  //     const formData = {
  //       name: document.getElementById('name').value,
  //       email: document.getElementById('email').value,
  //       address: document.getElementById('address').value,
  //       creditCard: document.getElementById('credit-card').value
  //     };
      
  //     // Save to local storage
  //     localStorage.setItem('billingInfo', JSON.stringify(formData));
      
  //     // Optionally, clear the form
  //     form.reset();
  //     form.classList.remove('was-validated');
      
  //     // Optionally, hide the modal
  //     const modal = bootstrap.Modal.getInstance(document.getElementById('billingModal'));
  //     modal.hide();
  //   }, false);
  // });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('billing-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Check if form is valid
      if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        creditCard: document.getElementById('credit-card').value
      };
      
      // Save to local storage
      localStorage.setItem('billingInfo', JSON.stringify(formData));
      
      // Show thank you alert
      alert('Thank you for your purchase!');
      
      // Optionally, clear the form
      form.reset();
      form.classList.remove('was-validated');
      
      // Optionally, hide the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('billingModal'));
      modal.hide();
      
      // Redirect to index page
      window.location.href = '../About.html';
    }, false);
  });
  