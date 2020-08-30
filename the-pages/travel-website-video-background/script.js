let backgroundVideo = document.getElementById('backgroundVideo');

let icon = document.getElementById('icon');

function playpause() {
    backgroundVideo.style.display = "block";

    if (backgroundVideo.paused) {
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
        backgroundVideo.play();
    }
    else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        backgroundVideo.pause();
    }
}

