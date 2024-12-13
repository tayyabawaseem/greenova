// // document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('loginForm');
//     const signupForm = document.getElementById('signupForm');
//     const forms = document.querySelector(".forms");
//     const pwShowHide = document.querySelectorAll(".eye-icon");
//     const links = document.querySelectorAll(".link");

//     // Handle form submission and local storage
//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         if (loginForm.checkValidity()) {
//             const email = document.getElementById('loginEmail').value;
//             const password = document.getElementById('loginPassword').value;
//             const storedEmail = localStorage.getItem('signupEmail');
//             const storedPassword = localStorage.getItem('signupPassword');

//             if (email === storedEmail && password === storedPassword) {
//                 alert('Login successful!');
//                 loginForm.reset(); // Reset the form fields
//                 loginForm.classList.remove('was-validated'); // Remove validation class
//             } else {
//                 alert('Invalid email or password!');
//                 loginForm.classList.add('was-validated');
//             }
//         } else {
//             loginForm.classList.add('was-validated');
//         }
//     });

//     signupForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         if (signupForm.checkValidity() && document.getElementById('signupPassword').value === document.getElementById('confirmPassword').value) {
//             const email = document.getElementById('signupEmail').value;
//             const password = document.getElementById('signupPassword').value;
//             localStorage.setItem('signupEmail', email);
//             localStorage.setItem('signupPassword', password);
//             alert('Signup information saved! You can now log in.');
//             signupForm.reset(); // Reset the form fields
//             signupForm.classList.remove('was-validated'); // Remove validation class
//         } else {
//             if (document.getElementById('signupPassword').value !== document.getElementById('confirmPassword').value) {
//                 alert('Passwords do not match!');
//             }
//             signupForm.classList.add('was-validated');
//         }
//     });

//     // Handle password visibility toggle
//     pwShowHide.forEach(eyeIcon => {
//         eyeIcon.addEventListener("click", () => {
//             const passwordField = eyeIcon.previousElementSibling;

//             if (passwordField.type === "password") {
//                 passwordField.type = "text";
//                 eyeIcon.classList.remove("bx-hide");
//                 eyeIcon.classList.add("bx-show");
//             } else {
//                 passwordField.type = "password";
//                 eyeIcon.classList.remove("bx-show");
//                 eyeIcon.classList.add("bx-hide");
//             }
//         });
//     });

//     // Toggle between login and signup forms
//     links.forEach(link => {
//         link.addEventListener("click", e => {
//             e.preventDefault(); // Prevent form submit
//             forms.classList.toggle("show-signup");
//         });
//     });






document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forms = document.querySelector(".forms");
    const pwShowHide = document.querySelectorAll(".eye-icon");
    const links = document.querySelectorAll(".link");

    // Handle form submission and local storage
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (loginForm.checkValidity()) {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const storedEmail = localStorage.getItem('signupEmail');
            const storedPassword = localStorage.getItem('signupPassword');

            if (email === storedEmail && password === storedPassword) {
                alert('Login successful!');
                loginForm.reset(); // Reset the form fields
                loginForm.classList.remove('was-validated'); // Remove validation class
            } else if (email === storedEmail) {
                alert('Invalid password!');
                loginForm.classList.add('was-validated');
            } else if (password === storedPassword) {
                alert('Invalid email!');
                loginForm.classList.add('was-validated');
            } else {
                alert('Invalid email and password!');
                loginForm.classList.add('was-validated');
            }
        } else {
            loginForm.classList.add('was-validated');
        }
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (signupForm.checkValidity() && document.getElementById('signupPassword').value === document.getElementById('confirmPassword').value) {
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            localStorage.setItem('signupEmail', email);
            localStorage.setItem('signupPassword', password);
            alert('Signup information saved! You can now log in.');
            signupForm.reset(); // Reset the form fields
            signupForm.classList.remove('was-validated'); // Remove validation class
        } else {
            if (document.getElementById('signupPassword').value !== document.getElementById('confirmPassword').value) {
                alert('Passwords do not match!');
            }
            signupForm.classList.add('was-validated');
        }
    });

    // Handle password visibility toggle
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            const passwordField = eyeIcon.previousElementSibling;

            if (passwordField.type === "password") {
                passwordField.type = "text";
                eyeIcon.classList.remove("bx-hide");
                eyeIcon.classList.add("bx-show");
            } else {
                passwordField.type = "password";
                eyeIcon.classList.remove("bx-show");
                eyeIcon.classList.add("bx-hide");
            }
        });
    });

    // Toggle between login and signup forms
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // Prevent form submit
            forms.classList.toggle("show-signup");
        });
    });
});




