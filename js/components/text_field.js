import { dict } from '../dicts/dict';
import { common_more_than_2 } from '../dicts/filtered';
import { handleTyping } from '../actions/type_handling';

export const text_field = (ctx) => {
	const rand_common_word = () => {
		return common_more_than_2[
			Math.floor(Math.random() * common_more_than_2.length)
		];
	};
	const start_location = 480;

	document.addEventListener('keypress', (event) => {
		ctx.clearRect(start_location, 0, 1200, 425);

		ctx.beginPath();
		ctx.lineWidth = 1.0;
		ctx.strokeRect(start_location, 300, 1200, 125);
		ctx.fillStyle = '#000';
		ctx.fill();
		ctx.closePath();

		let rand_word = rand_common_word();

		(ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
		ctx.fillText(rand_word, start_location, 400);

		handleTyping(event, rand_word, rand_common_word);

		for (let location = start_location; location < 1200; location += 60) {
			ctx.beginPath();
			ctx.moveTo(location, 0);
			ctx.lineTo(location, 425);
			ctx.strokeStyle = '#ccc';
			ctx.stroke();
		}
	});

	return rand_word;
};
