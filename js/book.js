let count = 0;
// If add to cart button is clicked
$(document).on('click', '.cart-btn', function() {
  let cart = $('.cart-nav');
  // Find the img of the card whose button was clicked by the user
  let imgtodrag = $(this).closest('.cards').find("img").eq(0);
  if (imgtodrag.length) {
    // Duplicate the img
    let imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');

    setTimeout(function() {
      count++;
      $(".cart-nav .item-count").text(count);
    }, 1500);

    imgclone.animate({
      'width': 0,
      'height': 0
    }, function() {
      $(this).detach();
    });
  }
});

// document.addEventListener('DOMContentLoaded', function () {
//   let cartCount = 0;
//   const itemCountElement = document.querySelector('.item-count');
//   const cartItemsElement = document.querySelector('.cart-items');

//   function updateCartCount() {
//     itemCountElement.textContent = cartCount;
//   }

//   function addItemToCart(item) {
//     cartCount++;
//     updateCartCount();

//     const cartItem = document.createElement('li');
//     cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//     cartItem.innerHTML = `
//       ${item.name} - $${item.price}
//       <button class="btn btn-danger btn-sm remove-btn">Remove</button>
//     `;
//     cartItemsElement.appendChild(cartItem);

//     cartItem.querySelector('.remove-btn').addEventListener('click', function () {
//       cartItem.remove();
//       cartCount--;
//       updateCartCount();
//     });
//   }

//   document.querySelectorAll('.cart-btn').forEach(button => {
//     button.addEventListener('click', function () {
//       const card = button.closest('.cards');
//       const itemName = card.querySelector('.details span').textContent;
//       const itemPrice = card.querySelector('.price').textContent.replace('$', '');
//       const itemImage = card.querySelector('img').src;

//       addItemToCart({ name: itemName, price: itemPrice, image: itemImage });
//     });
//   });
// });
// document.addEventListener('DOMContentLoaded', function () {
//   let cartCount = 0;
//   const itemCountElement = document.querySelector('.item-count');
//   const cartItemsElement = document.querySelector('.cart-items');

//   function updateCartCount() {
//       itemCountElement.textContent = cartCount;
//   }

//   function addItemToCart(item) {
//       cartCount++;
//       updateCartCount();

//       const cartItem = document.createElement('li');
//       cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//       cartItem.innerHTML = `
//         <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
//         ${item.name} - $${item.price}
//         <button class="btn btn-danger btn-sm remove-btn">Remove</button>
//       `;
//       cartItemsElement.appendChild(cartItem);

//       cartItem.querySelector('.remove-btn').addEventListener('click', function () {
//           cartItem.remove();
//           cartCount--;
//           updateCartCount();
//       });
//   }

//   document.querySelectorAll('.cart-btn').forEach(button => {
//       button.addEventListener('click', function () {
//           const card = button.closest('.cards');
//           const itemName = card.querySelector('.details span').textContent;
//           const itemPrice = card.querySelector('.price').textContent.replace('$', '');
//           const itemImage = card.querySelector('img').src;

//           addItemToCart({ name: itemName, price: itemPrice, image: itemImage });
//       });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let cartCount = 0;
//   const itemCountElement = document.querySelector('.item-count');
//   const cartItemsElement = document.querySelector('.cart-items');

//   function updateCartCount() {
//       itemCountElement.textContent = cartCount;
//   }

//   function addItemToCart(item) {
//       cartCount++;
//       updateCartCount();

//       const cartItem = document.createElement('li');
//       cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//       cartItem.innerHTML = `
//         <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
//         ${item.name} - $${item.price}
//         <button class="btn btn-danger btn-sm remove-btn">Remove</button>
//       `;
//       cartItemsElement.appendChild(cartItem);

//       cartItem.querySelector('.remove-btn').addEventListener('click', function () {
//           cartItem.remove();
//           cartCount--;
//           updateCartCount();
//       });
//   }

//   document.querySelectorAll('.cart-btn').forEach(button => {
//       button.addEventListener('click', function () {
//           const card = button.closest('.cards');
//           const itemName = card.querySelector('.details span').textContent;
//           const itemPrice = card.querySelector('.price').textContent.replace('$', '');
//           const itemImage = card.querySelector('img').src;

//           addItemToCart({ name: itemName, price: itemPrice, image: itemImage });
//       });
//   });

//   // Checkout button functionality
//   const checkoutButton = document.getElementById('checkout-btn');
//   checkoutButton.addEventListener('click', function () {
//       const cartItems = cartItemsElement.querySelectorAll('li');
//       if (cartItems.length > 0) {
//           alert('Thank you for your purchase!');
//           cartItems.forEach(item => item.remove());
//           cartCount = 0;
//           updateCartCount();
//       } else {
//           alert('Your cart is empty!');
//       }
//   });
// });




// document.addEventListener('DOMContentLoaded', function () {
//   let cartCount = 0;
//   const itemCountElement = document.querySelector('.item-count');
//   const cartItemsElement = document.querySelector('.cart-items');
//   const billingModal = $('#billingModal');
//   const billingForm = document.getElementById('billing-form');

//   function updateCartCount() {
//       itemCountElement.textContent = cartCount;
//   }

//   function addItemToCart(item) {
//       cartCount++;
//       updateCartCount();

//       const cartItem = document.createElement('li');
//       cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//       cartItem.innerHTML = `
//         <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
//         <div>${item.name} &nbsp; &nbsp;    $${item.price} x <span class="item-quantity">1</span></div>
//         <div>
//           <button class="btn btn-sm btn-secondary increase-btn">+</button>
//           <button class="btn btn-sm btn-secondary decrease-btn">-</button>
//           <button class="btn btn-danger btn-sm remove-btn">Remove</button>
//         </div>
//       `;
//       cartItemsElement.appendChild(cartItem);

//       const quantityElement = cartItem.querySelector('.item-quantity');
//       let itemQuantity = 1;

//       cartItem.querySelector('.increase-btn').addEventListener('click', function () {
//           itemQuantity++;
//           cartCount++;
//           quantityElement.textContent = itemQuantity;
//           updateCartCount();
//       });

//       cartItem.querySelector('.decrease-btn').addEventListener('click', function () {
//           if (itemQuantity > 1) {
//               itemQuantity--;
//               cartCount--;
//               quantityElement.textContent = itemQuantity;
//               updateCartCount();
//           }
//       });

//       cartItem.querySelector('.remove-btn').addEventListener('click', function () {
//           cartCount -= itemQuantity;
//           cartItem.remove();
//           updateCartCount();
//       });
//   }

//   document.querySelectorAll('.cart-btn').forEach(button => {
//       button.addEventListener('click', function () {
//           const card = button.closest('.cards');
//           const itemName = card.querySelector('.details span').textContent;
//           const itemPrice = card.querySelector('.price').textContent.replace('$', '');
//           const itemImage = card.querySelector('img').src;

//           addItemToCart({ name: itemName, price: itemPrice, image: itemImage });
//       });
//   });

//   // Checkout button functionality
//   const checkoutButton = document.getElementById('checkout-btn');
//   checkoutButton.addEventListener('click', function () {
//       if (cartCount > 0) {
//           billingModal.modal('show');
//       } else {
//           alert('Your cart is empty!');
//       }
//   });

//   billingForm.addEventListener('submit', function (e) {
//       e.preventDefault();
      
//       // Validate form fields
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const address = document.getElementById('address').value;
//       const creditCard = document.getElementById('credit-card').value;
//       let isValid = true;

//       // Simple email regex for validation
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
//       if (name.trim() === '') {
//           isValid = false;
//           alert('Name is required');
//       } else if (!emailPattern.test(email)) {
//           isValid = false;
//           alert('Please enter a valid email address');
//       } else if (address.trim() === '') {
//           isValid = false;
//           alert('Address is required');
//       } else if (creditCard.trim() === '' || creditCard.length !== 16 || isNaN(creditCard)) {
//           isValid = false;
//           alert('Please enter a valid 16-digit credit card number');
//       }

//       if (isValid) {
//           // Save billing information in local storage
//           const billingInfo = {
//               name: name,
//               email: email,
//               address: address,
//               creditCard: creditCard
//           };
//           localStorage.setItem('billingInfo', JSON.stringify(billingInfo));

//           alert('Thank you for your purchase!');
//           billingModal.modal('hide');
//           cartItemsElement.innerHTML = '';  // Clear the cart
//           cartCount = 0;
//           updateCartCount();
//       }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  let cartCount = 0;
  let totalPrice = 0; // Initialize total price variable
  const itemCountElement = document.querySelector('.item-count');
  const totalPriceElement = document.querySelector('.total-price'); // Select the element to display total price
  const cartItemsElement = document.querySelector('.cart-items');
  const billingModal = $('#billingModal');
  const billingForm = document.getElementById('billing-form');

  function updateCartCount() {
    itemCountElement.textContent = cartCount;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`; // Update total price display
  }

  function addItemToCart(item) {
    cartCount++;
    totalPrice += parseFloat(item.price); // Add item price to total price
    updateCartCount();

    const cartItem = document.createElement('li');
    cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
      <div>${item.name} &nbsp; &nbsp; $${item.price} x <span class="item-quantity">1</span></div>
      <div>
        <button class="btn btn-sm btn-secondary increase-btn">+</button>
        <button class="btn btn-sm btn-secondary decrease-btn">-</button>
        <button class="btn btn-danger btn-sm remove-btn">Remove</button>
      </div>
    `;
    cartItemsElement.appendChild(cartItem);

    const quantityElement = cartItem.querySelector('.item-quantity');
    let itemQuantity = 1;

    cartItem.querySelector('.increase-btn').addEventListener('click', function () {
      itemQuantity++;
      cartCount++;
      totalPrice += parseFloat(item.price); // Increment total price
      quantityElement.textContent = itemQuantity;
      updateCartCount();
    });

    cartItem.querySelector('.decrease-btn').addEventListener('click', function () {
      if (itemQuantity > 1) {
        itemQuantity--;
        cartCount--;
        totalPrice -= parseFloat(item.price); // Decrement total price
        quantityElement.textContent = itemQuantity;
        updateCartCount();
      }
    });

    cartItem.querySelector('.remove-btn').addEventListener('click', function () {
      cartCount -= itemQuantity;
      totalPrice -= parseFloat(item.price) * itemQuantity; // Adjust total price for removed item
      cartItem.remove();
      updateCartCount();
    });
  }

  document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = button.closest('.cards');
      const itemName = card.querySelector('.details span').textContent;
      const itemPrice = card.querySelector('.price').textContent.replace('$', '');
      const itemImage = card.querySelector('img').src;

      addItemToCart({ name: itemName, price: itemPrice, image: itemImage });
    });
  });

  // Checkout button functionality
  const checkoutButton = document.getElementById('checkout-btn');
  checkoutButton.addEventListener('click', function () {
    if (cartCount > 0) {
      billingModal.modal('show');
    } else {
      alert('Your cart is empty!');
    }
  });

  billingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const creditCard = document.getElementById('credit-card').value;
    let isValid = true;

    // Simple email regex for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
      isValid = false;
      alert('Name is required');
    } else if (!emailPattern.test(email)) {
      isValid = false;
      alert('Please enter a valid email address');
    } else if (address.trim() === '') {
      isValid = false;
      alert('Address is required');
    } else if (creditCard.trim() === '' || creditCard.length !== 16 || isNaN(creditCard)) {
      isValid = false;
      alert('Please enter a valid 16-digit credit card number');
    }

    if (isValid) {
      // Save billing information in local storage
      const billingInfo = {
        name: name,
        email: email,
        address: address,
        creditCard: creditCard
      };
      localStorage.setItem('billingInfo', JSON.stringify(billingInfo));

      alert('Thank you for your purchase!');
      billingModal.modal('hide');
      cartItemsElement.innerHTML = '';  // Clear the cart
      cartCount = 0;
      totalPrice = 0; // Reset total price
      updateCartCount(); 
      
      // Reset form fields
    billingForm.reset();
    // Reset validation classes
    name.classList.remove('is-valid', 'is-invalid');
    email.classList.remove('is-valid', 'is-invalid');
    address.classList.remove('is-valid', 'is-invalid');
    creditCard.classList.remove('is-valid', 'is-invalid');
    }

    
  });
  
});