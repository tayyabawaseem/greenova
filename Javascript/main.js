function validateName() {
  const name = document.getElementById('contact-name');
  if (name.value.length <= 8) {
      document.getElementById('name-error').innerText = 'Name must be at least 8 characters';
      name.classList.add('invalid');
      name.classList.remove('valid');
      return false;
  } else {
      document.getElementById('name-error').innerText = '';
      name.classList.add('valid');
      name.classList.remove('invalid');
      return true;
  }
}

function validateEmail() {
  const email = document.getElementById('contact-email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
      document.getElementById('email-error').innerText = 'Please enter a valid email';
      email.classList.add('invalid');
      email.classList.remove('valid');
      return false;
  } else {
      document.getElementById('email-error').innerText = '';
      email.classList.add('valid');
      email.classList.remove('invalid');
      return true;
  }
}

function validatePhone() {
  const phone = document.getElementById('contact-phone');
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(phone.value)) {
      document.getElementById('phone-error').innerText = 'Please enter a valid phone number';
      phone.classList.add('invalid');
      phone.classList.remove('valid');
      return false;
  } else {
      document.getElementById('phone-error').innerText = '';
      phone.classList.add('valid');
      phone.classList.remove('invalid');
      return true;
  }
}

function validateMessage() {
  const message = document.getElementById('contact-message');
  if (message.value.length < 10) {
      document.getElementById('message-error').innerText = 'Message at least 10 characters';
      message.classList.add('invalid');
      message.classList.remove('valid');
      return false;
  } else {
      document.getElementById('message-error').innerText = '';
      message.classList.add('valid');
      message.classList.remove('invalid');
      return true;
  }
}

function validateForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    saveToLocalStorage();
    alert('Form submitted successfully!');
    setTimeout(resetFormFields, 0); // Delay the form reset until after the alert is acknowledged
    return true;
  } else {
    const submitError = document.getElementById('submit-error');
    submitError.innerText = 'All fields are required';
    submitError.style.display = 'block';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 5000);
    return false;
  }
}

function saveToLocalStorage() {
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const phone = document.getElementById('contact-phone').value;
  const message = document.getElementById('contact-message').value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };

  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function resetFormFields() {
  document.getElementById('contact-name').value = '';
  document.getElementById('contact-email').value = '';
  document.getElementById('contact-phone').value = '';
  document.getElementById('contact-message').value = '';

  document.getElementById('contact-name').classList.remove('valid', 'invalid');
  document.getElementById('contact-email').classList.remove('valid', 'invalid');
  document.getElementById('contact-phone').classList.remove('valid', 'invalid');
  document.getElementById('contact-message').classList.remove('valid', 'invalid');
}



// Attach event listener to the form
document.getElementById('contact-form').addEventListener('submit', validateForm);


