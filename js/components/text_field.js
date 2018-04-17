export const text_field = (ctx) => {
	ctx.beginPath();
	ctx.lineWidth = 1.0;
	ctx.strokeRect(480, 300, 750, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
	ctx.closePath();

	// (ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
	ctx.fillText('Hello World!', 480, 400);

	for (let location = 480; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}
};
