
const playIcon = document.querySelector("#playIcon");
const music = document.querySelector("#music");

playIcon.addEventListener("click", function() {
    if(music.paused) {
        music.play();
        playIcon.src = "images/pauseicon.png"; 
    } else {
        music.pause();
        playIcon.src = "images/playicon.png";
    }
});