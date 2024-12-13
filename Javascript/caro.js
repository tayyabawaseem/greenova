let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider1 = document.querySelector('.slider-1');
let sliderList = slider1.querySelector('.slider-1 .list-1');
let thumbnail = document.querySelector('.slider-1 .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item-1');

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
};

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item-1');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item-1');
    
    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider1.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider1.classList.add('prev');
    }

    // Reset animation classes after the animation is done
    slider1.addEventListener('animationend', function() {
        slider1.classList.remove('next');
        slider1.classList.remove('prev');
    }, { once: true }); // Remove the event listener after it's triggered once
}
