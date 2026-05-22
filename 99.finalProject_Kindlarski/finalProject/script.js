// JavaScript Document
const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

const videoPart1 = [
	{src: "videos/3R1A.mp4", caption: "YOU GOT A GIFT FROM SOMEONE! IT'S A QUICK WAY TO THE HEART!"},
	{src: "videos/3R1B.mp4", caption: "YOU GOT A GIFT FROM SOMEONE! IT'S ONE OF YOUR LONGEST RELATIONSHIPS!"},
	{src: "videos/3R1C.mp4", caption: "YOU GOT A GIFT FROM SOMEONE! A CHEAP DATE IS STILL A DATE!"},
	{src: "videos/3R1D.mp4", caption: "YOU GOT A GIFT FROM SOMEONE! LOOKS LIKE YOU SENT ONE BACK!"},
	{src: "videos/3R1E.mp4", caption: "YOU GOT A GIFT FROM SOMEONE! THEY PAID EXTRA FOR DELIVERY!"},
	{src: "videos/3R1F.mp4", caption: "YOU GOT A GIFT FROM SOMEONE! BETTER HOPE ITS NOT FROM THE MAILMAN!"}
	
				];
					
const videoPart2 = [
	{src: "videos/3R2A.mp4", caption: "Aren't they too old for you?"},
	{src: "videos/3R2B.mp4", caption: "Love next door?"},
	{src: "videos/3R2C.mp4", caption: "Man's best friend wants to be more?"},
	{src: "videos/3R2D.mp4", caption: "It's your day off after all."},
	{src: "videos/3R2E.mp4", caption: "A greek classic."},
	{src: "videos/3R2F.mp4", caption: "While we're being hopeful..."}
			  ];

const videoPart3 = [
	{src: "videos/3R3A.mp4", caption: "We all know where this is going, anyhow."},
	{src: "videos/3R3B.mp4", caption: "I'll rest my eyes to look my best aaaand ZZZZZZZZZzzzzzzzzzzzzzzzzz.........."},
	{src: "videos/3R3C.mp4", caption: "NO."},
	{src: "videos/3R3D.mp4", caption: "If only we could be together..."},
	{src: "videos/3R3E.mp4", caption: "When duty calls..."},
	{src: "videos/3R3F.mp4", caption: "Who am I kidding..."}
			  ];

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex]	
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	//titleOverlay.style.display = "none";
// REMOVED
	titleOverlay.classList.add("playing");
// NEW
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3),
	];
	
currentIndex = 0;
playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
	console.log("All three parts finished.");
	replayBtn.style.display = "block";
	}
});