// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (10 images)
const slides = [
{ src: 'images/image_01.jpg',
 alt: 'mangos', 
 caption: 'That smoothies got me gurglin...'
},
{ src: 'images/image_02.jpg',
 alt: 'tower',
 caption: 'I wonder if they can see me changing in here'
},
{ src: 'images/image_03.jpg',
 alt: 'macaws',
 caption: 'please, shut up already'
},
{ src: 'images/image_04.jpg',
 alt: 'bus',
 caption: 'They strapped my stuff to the side, not the top'
},
{ src: 'images/image_05.jpg',
 alt: 'beer',
 caption: 'I think Im landsick'
},
{ src: 'images/image_06.jpg',
 alt: 'ladies',
 caption: 'Well you didnt need to give me that look'
},
{ src: 'images/image_07.jpg',
 alt: 'bike',
 caption: 'Did I leave my car unlocked at home?'
},
{ src: 'images/image_08.jpg',
 alt: 'lizard',
 caption: 'it bit me.'
},
{ src: 'images/image_09.jpg',
 alt: 'club',
 caption: 'Move, I gotta piss'
},
{ src: 'images/image_10.jpg',
 alt: 'plane',
 caption: 'oh its over?'
}
];
	
let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
	const i = new Image();
	i.src = src;
});

// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption; //updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);