document.addEventListener('DOMContentLoaded', function () {
    let cartCount = 0;
    let totalPrice = 0;
    let cartItems = [];
  
    const itemCountElement = document.querySelector('.item-count');
    const totalPriceElement = document.querySelector('.total-price');
    const cartItemsElement = document.querySelector('.cart-items');
    const billingModal = $('#billingModal');
    const billingForm = document.getElementById('billing-form');
  
    // Function to save cart data to localStorage
    function saveCartToLocalStorage() {
      const cartData = {
        cartCount: cartCount,
        totalPrice: totalPrice,
        cartItems: cartItems
      };
      localStorage.setItem('cartData', JSON.stringify(cartData));
    }
  
    // Function to load cart data from localStorage
    function loadCartFromLocalStorage() {
      const savedCartData = localStorage.getItem('cartData');
      if (savedCartData) {
        const { cartCount: savedCartCount, totalPrice: savedTotalPrice, cartItems: savedCartItems } = JSON.parse(savedCartData);
        cartCount = savedCartCount || 0;
        totalPrice = savedTotalPrice || 0;
        cartItems = savedCartItems || [];
  
        // Update the UI with the loaded cart data
        updateCartCount();
        cartItems.forEach(item => {
          addItemToCart(item, false); // Add items to cart without triggering save
        });
      }
    }
  
    function updateCartCount() {
      itemCountElement.textContent = cartCount;
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
      saveCartToLocalStorage(); // Save cart state whenever it changes
    }
  
    function addItemToCart(item, save = true) {
      cartCount++;
      totalPrice += parseFloat(item.price);
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
        totalPrice += parseFloat(item.price);
        quantityElement.textContent = itemQuantity;
        updateCartCount();
      });
  
      cartItem.querySelector('.decrease-btn').addEventListener('click', function () {
        if (itemQuantity > 1) {
          itemQuantity--;
          cartCount--;
          totalPrice -= parseFloat(item.price);
          quantityElement.textContent = itemQuantity;
          updateCartCount();
        }
      });
  
      cartItem.querySelector('.remove-btn').addEventListener('click', function () {
        cartCount -= itemQuantity;
        totalPrice -= parseFloat(item.price) * itemQuantity;
        cartItem.remove();
        cartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
        updateCartCount();
      });
  
      // Add to cartItems array for localStorage
      if (save) {
        cartItems.push(item);
        saveCartToLocalStorage();
      }
    }
  
    // Load cart data from localStorage when the page loads
    loadCartFromLocalStorage();
  
    // Event listener for adding items to the cart
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
        window.location.href = '../../Login/index.html';
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
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const creditCard = document.getElementById('credit-card').value;
      let isValid = true;
  
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
        const billingInfo = {
          name: name,
          email: email,
          address: address,
          creditCard: creditCard
        };
        localStorage.setItem('billingInfo', JSON.stringify(billingInfo));
  
        alert('Thank you for your purchase!');
        billingModal.modal('hide');
        cartItemsElement.innerHTML = '';
        cartCount = 0;
        totalPrice = 0;
        cartItems = [];
        updateCartCount();
        billingForm.reset();
      }
    });
    
    // Mock function to check if the user is logged in
    function isLoggedIn() {
      return !!localStorage.getItem('isLoggedIn');
    }
  });
  