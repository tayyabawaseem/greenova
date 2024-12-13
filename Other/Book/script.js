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

document.addEventListener('DOMContentLoaded', function () {
  let cartCount = 0;
  let totalPrice = 0; // Initialize total price variable
  const itemCountElement = document.querySelector('.item-count');
  const totalPriceElement = document.querySelector('.total-price'); // Select the element to display total price
  const cartItemsElement = document.querySelector('.cart-items');
  const billingModal = $('#billingModal');
  const billingForm = document.getElementById('billing-form');

  // Mock function to check if the user is logged in
  function isLoggedIn() {
    // Replace with actual login check logic
    return !!localStorage.getItem('isLoggedIn');
  }

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
        <button class="btn btn-sm btn-outline-success increase-btn">+</button>
        <button class="btn btn-sm btn-outline-warning decrease-btn">-</button>
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
    if (!isLoggedIn()) {
      // Redirect to login/signup page if not logged in
      window.location.href = '../../Login/index.html'; // Replace with your login/signup page URL
      return;
    }
    
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

    if (name.trim() === '' || name.trim().length < 8) {
      isValid = false;
    } else if (!emailPattern.test(email)) {
      isValid = false;
    } else if (address.trim() === '') {
      isValid = false;
    } else if (creditCard.trim() === '' || creditCard.length !== 16 || isNaN(creditCard)) {
      isValid = false;
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
      const formFields = billingForm.querySelectorAll('.form-control');
      formFields.forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
      });
    }
  });

  billingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (billingForm.checkValidity()) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const creditCard = document.getElementById('credit-card').value;

      const billingInfo = {
        name: name,
        email: email,
        address: address,
        creditCard: creditCard
      };
      localStorage.setItem('billingInfo', JSON.stringify(billingInfo));

      alert('Thank you for your purchase!');
      $('#billingModal').modal('hide');

      billingForm.reset();
      billingForm.classList.remove('was-validated');
      
    } else {
      billingForm.classList.add('was-validated');
    }
  });
});
