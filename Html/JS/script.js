document.addEventListener('DOMContentLoaded', function () {
    let cartCount = 0;
    let totalPrice = 0;
    const itemCountElement = document.querySelector('.item-count');
    const totalPriceElement = document.querySelector('.total-price');
    const cartItemsElement = document.querySelector('.cart-items');
    const billingModal = new bootstrap.Modal(document.getElementById('billingModal'));
    const billingForm = document.getElementById('billing-form');
  
    function isLoggedIn() {
      return !!localStorage.getItem('isLoggedIn');
    }
  
    function updateCartCount() {
      itemCountElement.textContent = cartCount;
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
  
    function addItemToCart(item) {
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
  
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', function () {
      if (!isLoggedIn()) {
        // Mock login success for demonstration
        // Replace this with actual login logic
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful! Now you can proceed to checkout.');
      } else {
        if (cartCount > 0) {
          billingModal.show(); // Open the billing modal
        } else {
          alert('Your cart is empty!');
        }
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
        billingModal.hide(); // Close the billing modal
  
        billingForm.reset();
        billingForm.classList.remove('was-validated');
        cartItemsElement.innerHTML = '';
        cartCount = 0;
        totalPrice = 0;
        updateCartCount();
      } else {
        billingForm.classList.add('was-validated');
      }
    });
  });
  