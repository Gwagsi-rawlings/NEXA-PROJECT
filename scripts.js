// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Simple Slider Script
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function startSlider() {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', startSlider);

// Handle form submission and simulate file upload
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const videoFile = document.getElementById('video-file').files[0];
    const mediaFile = document.getElementById('media-file').files[0];
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (videoFile || mediaFile) {
        // Simulate file upload and add media to gallery
        addMediaToGallery(videoFile, mediaFile, title, description);
        updateStatistics(); // Update statistics after upload
        alert('Media uploaded successfully!');
    } else {
        alert('Please select a video or media file.');
    }
});

function addMediaToGallery(videoFile, mediaFile, title, description) {
    const mediaList = document.getElementById('media-list');
    
    const mediaItem = document.createElement('div');
    mediaItem.className = 'media-item';

    if (videoFile) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(videoFile);
        video.controls = true;
        mediaItem.appendChild(video);
    } else if (mediaFile) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(mediaFile);
        mediaItem.appendChild(img);
    }

    const mediaTitle = document.createElement('h3');
    mediaTitle.textContent = title;
    mediaItem.appendChild(mediaTitle);

    const mediaDescription = document.createElement('p');
    mediaDescription.textContent = description;
    mediaItem.appendChild(mediaDescription);

    mediaList.appendChild(mediaItem);
}

function updateStatistics() {
    // Simulate fetching and updating statistics
    document.getElementById('total-likes').textContent = Math.floor(Math.random() * 1000);
    document.getElementById('total-comments').textContent = Math.floor(Math.random() * 500);
    document.getElementById('total-shares').textContent = Math.floor(Math.random() * 300);
}

