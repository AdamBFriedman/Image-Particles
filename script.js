const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// Mouse
let mouse = {
	x: null,
	y: null,
	radius: 100,
};

// Mouse movement
window.addEventListener('mousemove', (event) => {
	mouse.x = event.x + canvas.clientLeft / 2;
	mouse.y = event.y + canvas.clientLeft / 2;
});
