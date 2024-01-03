document.addEventListener('DOMContentLoaded', function(){
    const slider = document.querySelector('.room-slyder');
    const slides = Array.from(slider.querySelectorAll('.room-discription-item'));

    const slider2 = document.querySelector('.room-img-slyder');
    const slides2 = Array.from(slider2.querySelectorAll('img'));

    const prevButton = document.querySelector('.slyder-arrow-prev');
    const nextButton = document.querySelector('.slyder-arrow-next');

    const roomNav = document.querySelector('.navigation');
    const roomNavItem = Array.from(roomNav.querySelectorAll('.navigation-room'));

    const dotNav = document.querySelector('.slyder-dots');
    const dotNavItem = Array.from(dotNav.querySelectorAll('.dot'));

    const slideCount = slides.length;
    let slideIndex = 0;

    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    dotNavItem.forEach((navItem, navIndex) => {
        navItem.addEventListener('click', function() {
            slideIndex = navIndex;
            navItemClick(slideIndex);
        });

    })

    roomNavItem.forEach((roomItem, roomIndex) => {
        roomItem.addEventListener('click', function() {
            slideIndex = roomIndex;
            roomItemClick(slideIndex);
        });

    })



    function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    updateRoomNav();
    updateDotNav();
    }


    function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    updateRoomNav();
    updateDotNav();
    }
    function roomItemClick(){
        updateSlider();
        updateRoomNav();
        updateDotNav(); 
    }
    function navItemClick (){
        updateSlider();
        updateRoomNav();
        updateDotNav();
    }

    function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
    slides2.forEach((slide2, index2) => {
        if (index2 === slideIndex) {
        slide2.style.display = 'block';
        } else {
        slide2.style.display = 'none';
        }
    });
    }

    function updateRoomNav() {
        roomNavItem.forEach((item, index3) => {
            if (index3 === slideIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        }); 
    }

    function updateDotNav() {
        dotNavItem.forEach((item2, index4) => {
            if (index4 === slideIndex) {
                item2.classList.add("active");
            } else {
                item2.classList.remove("active");
            }
        }); 
    }
    updateSlider();
    updateRoomNav();
    updateDotNav();
})