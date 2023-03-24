import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/Autoplay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector ("video")
const playPause = document.querySelector ("#playPause")
const muteUnmute = document.querySelector ("#muteUnmute")
const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()],
});

playPause.onclick = () => player.togglePlay();

muteUnmute.onclick  = () => player.unmuteMute();
