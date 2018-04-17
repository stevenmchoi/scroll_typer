const render = () => {
	console.log('hello');

	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.lineWidth = 1.0;
	ctx.strokeRect(450, 300, 750, 125);
	ctx.font = '100px Roboto Mono';
	ctx.fillStyle = '#000';
	ctx.fill();
	ctx.fillText('Hello World!', 460, 400);
	ctx.closePath();

	// keyboard_img = new Image();}
};

module.exports = render;
