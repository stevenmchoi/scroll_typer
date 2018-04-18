import { dict } from '../dicts/dict';
import { common_more_than_2 } from '../dicts/filtered';
import { handleTyping } from '../actions/type_handling';

export const text_field = (ctx) => {
	const rand_word =
		common_more_than_2[
			Math.floor(Math.random() * common_more_than_2.length)
		];
	const start_location = 480;

	ctx.beginPath();
	ctx.lineWidth = 1.0;
	ctx.strokeRect(start_location, 300, 1200, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
	ctx.closePath();

	(ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
	ctx.fillText(rand_word, start_location, 400);

	document.addEventListener('keypress', (event) =>
		handleTyping(event, rand_word)
	);

	for (let location = start_location; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}

	return rand_word;
};
