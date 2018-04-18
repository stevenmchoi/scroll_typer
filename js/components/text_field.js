import { dict } from '../dicts/dict';

export const text_field = (ctx) => {
	const start_location = 0;

	ctx.beginPath();
	ctx.lineWidth = 1.0;
	ctx.strokeRect(start_location, 300, 1200, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
	ctx.closePath();

	(ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
	ctx.fillText(dict[0], start_location, 400);

	for (let location = start_location; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}
};
