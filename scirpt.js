const video = document.getElementById("video");

// Falls Autoplay blockiert wird
video.play().catch(() => {
    console.log("Autoplay wurde blockiert.");
});