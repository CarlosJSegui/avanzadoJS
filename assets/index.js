import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/Autoplay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButon = document.querySelector("#muteButton");
muteButon.onclick = () => {
    if(player.media.muted){
        player.unmuted();
    } else {
        player.muted();
    }
};

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message);
    });
}