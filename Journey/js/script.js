        // Bootstrap validation
        (function () {
            'use strict';
            window.addEventListener('load', function () {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            });
        })();

        // Load saved gallery items from local storage
        function loadGallery() {
            const gallery = document.getElementById('gallery');
            const items = JSON.parse(localStorage.getItem('galleryItems')) || [];

            items.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                const userInfo = document.createElement('p');
                userInfo.textContent = `Name: ${item.name} | Type: ${item.type}`;

                const userContent = document.createElement('p');
                userContent.textContent = `Content: ${item.content}`;

                if (item.fileType.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = item.fileData;
                    img.alt = 'User-submitted photo';
                    galleryItem.appendChild(img);
                } else if (item.fileType.startsWith('video/')) {
                    const video = document.createElement('video');
                    video.src = item.fileData;
                    video.controls = true;
                    galleryItem.appendChild(video);
                }

                galleryItem.appendChild(userInfo);
                galleryItem.appendChild(userContent);

                gallery.appendChild(galleryItem);
            });
        }

        // Save gallery items to local storage
        function saveGallery(name, type, content, fileData, fileType) {
            const items = JSON.parse(localStorage.getItem('galleryItems')) || [];
            items.push({ name, type, content, fileData, fileType });
            localStorage.setItem('galleryItems', JSON.stringify(items));
        }

        document.getElementById('submissionForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const type = document.getElementById('type').value;
            const content = document.getElementById('content').value;
            const fileInput = document.getElementById('file');

            if (!name || !email || !type || !content || !fileInput.files.length) {
                alert('Please fill out all fields and select a file.');
                return;
            }

            if ((type === 'videos' && !fileInput.files[0].type.startsWith('video/')) ||
                (type !== 'videos' && fileInput.files[0].type.startsWith('video/'))) {
                alert('Please upload a valid file type for the selected content type.');
                return;
            }

            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                saveGallery(name, type, content, e.target.result, file.type);

                const gallery = document.getElementById('gallery');
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                const userInfo = document.createElement('p');
                userInfo.textContent = `Name: ${name} | Type: ${type}`;

                const userContent = document.createElement('p');
                userContent.textContent = `Content: ${content}`;

                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = 'User-submitted photo';
                    galleryItem.appendChild(img);
                } else if (file.type.startsWith('video/')) {
                    const video = document.createElement('video');
                    video.src = e.target.result;
                    video.controls = true;
                    galleryItem.appendChild(video);
                }

                galleryItem.appendChild(userInfo);
                galleryItem.appendChild(userContent);

                gallery.appendChild(galleryItem);
            };

            reader.readAsDataURL(file);
            alert('Your content has been submitted!');
            document.getElementById('submissionForm').reset();
        });

        // Initial load of gallery items
        loadGallery();
