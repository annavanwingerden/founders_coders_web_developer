document.addEventListener('DOMContentLoaded', function() {
    var loadingBar = document.getElementById('loading-bar');
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');

    // Text to be displayed
    var text = "A. N. N. A";
    var loadingText = document.getElementById('loading-text');
    var index = 0;

    // Typing effect
    function typeText() {
        if (index < text.length) {
            loadingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 200);
        } else {
            // Stop the blinking cursor when the text is fully typed
            loadingText.style.borderRight = 'none';
        }
    }

    // Start typing effect
    typeText();

    // Simulate loading progress
    var progress = 0;
    var interval = setInterval(function() {
        progress += 3;
        loadingBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100); // Adjust this value to control the speed of the loading bar

    // Hide the loading screen after 10 seconds
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 4000); // 10000 milliseconds = 10 seconds
});

document.querySelector('.inner-circle').addEventListener('click', function() {
    alert('Reveal action here!');
});