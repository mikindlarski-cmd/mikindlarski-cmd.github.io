// Select the video element and the text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");// JavaScript Document

// Array of video sources for toggling
const videoSources = ["videos/tru1.mp4",
					  "videos/tru2.mp4",
					  "videos/tru3.mp4",
					  "videos/tru4.mp4",
					  "videos/tru5.mp4",
					  "videos/tru6.mp4",
					  "videos/tru7.mp4"
					 ];

// Current video index, starting with the first video
let currentVideoIndex = 0;

// Array to store the playback time for each video
const videoTimes = [0,
					0,
					0,
					0,
					0,
					0,
					0];

// MUST be muted for autoplay
videoPlayer.muted = true;

window.addEventListener("load", () => {
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
});

function toggleVideo() {
	videoTimes[currentVideoIndex] = videoPlayer.currentTime;
	currentVideoIndex = getRandomIndex();
	
	videoPlayer.src = videoSources[currentVideoIndex];
	videoPlayer.load();
	videoPlayer.currentTime = videoTimes[currentVideoIndex];
	videoPlayer.play();
}

function getRandomIndex() {
	let newIndex;
	do {
		newIndex = Math.floor(Math.random() * videoSources.length);
	} while (newIndex === currentVideoIndex);
	return newIndex;
}
// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);