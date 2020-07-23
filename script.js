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

// Draw function
function drawPic() {
	let imageWidth = png.width;
	let imageHeight = png.height;
	const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	class Particle {
		constructor(x, y, color, size) {
			(this.x = x + canvas.width / 2 - png.width * 2),
				(this.y = y + canvas.height / 2 - png.height * 2),
				(this.color = color),
				(this.size = 2),
				(this.baseX = x + canvas.width / 2 - png.width * 2),
				(this.baseY = y + canvas.height / 2 - png.height * 2),
				(this.density = Math.random() * 10 + 2);
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
		}

		update() {
			ctx.fillStyle = this.color;

			// Collision detection
			let dx = mouse.x - this.x;
			let dy = mouse.y - this.y;
			let distance = Math.sqrt(dx * dx + dy * dy);
			let forceDirectionX = dx / distance;
			let forceDirectionY = dy / distance;
		}
	}
}
