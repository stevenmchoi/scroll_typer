export const text_field = (ctx) => {
	ctx.beginPath();
	ctx.lineWidth = 1.0;
	ctx.strokeRect(450, 300, 750, 125);
	(ctx.font = '100px Roboto Mono'), 'monospace';
	ctx.fillStyle = '#000';
	ctx.fill();
	ctx.fillText('Hello World!', 460, 400);
	ctx.closePath();
};
