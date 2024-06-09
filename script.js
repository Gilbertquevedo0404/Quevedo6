document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = dropdown.querySelector('.dropbtn');

    // Toggle dropdown on click
    dropbtn.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const gallerySections = document.querySelectorAll('[id^="gallery"]'); // Select all sections with IDs starting with 'gallery'

    // Array of random image URLs
    const randomImages = [
        'T.PNG',
        'F.PNG',
        'image3.jpg',
        // Add more image URLs here as needed
    ];

    // Function to get a random image URL
    function getRandomImage() {
        return randomImages[Math.floor(Math.random() * randomImages.length)];
    }

    // Loop through each gallery section and set a random background image
    gallerySections.forEach(section => {
        const randomImage = getRandomImage();
        section.style.backgroundImage = `url('${randomImage}')`;
        section.style.backgroundSize = 'cover';
        section.style.backgroundPosition = 'center';
        section.style.color = '#fff'; // Set text color to white for better readability
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.profile-section, .home, .About-info, .contact-info');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
});
