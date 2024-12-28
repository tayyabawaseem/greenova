
// document.addEventListener('DOMContentLoaded', function () {


//     const billingForm = document.getElementById('billing-form');
  
//     billingForm.addEventListener('submit', function (e) {
//       e.preventDefault();
//       e.stopPropagation();
  
//       if (billingForm.checkValidity()) {
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const address = document.getElementById('address').value;
//         const creditCard = document.getElementById('credit-card').value;
  
//         const billingInfo = {
//           name: name,
//           email: email,
//           address: address,
//           creditCard: creditCard
//         };
//         localStorage.setItem('billingInfo', JSON.stringify(billingInfo));
  
//         alert('Thank you for your purchase!');
//         $('#billingModal').modal('hide');
  
//         billingForm.reset();
//         billingForm.classList.remove('was-validated');
        
//       } else {
//         billingForm.classList.add('was-validated');
//       }
//     });
//   });
  