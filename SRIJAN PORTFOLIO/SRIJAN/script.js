let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 5000); // Change image every 5 seconds

document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);

showImage(currentIndex);
