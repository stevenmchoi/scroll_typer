import { dict } from '../dicts/dict';
import { common_more_than_2 } from '../dicts/filtered';
import { handleTyping } from '../actions/type_handling';

function render_text_box(ctx, start_location) {
	for (let location = start_location; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}

	ctx.strokeStyle = 'black';
	ctx.strokeRect(start_location, 300.5, 1200, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
}

export const text_field = (ctx) => {
	const rand_common_word = () => {
		return common_more_than_2[
			Math.floor(Math.random() * common_more_than_2.length)
		];
	};

	const start_location = 480 + 0.5;

	render_text_box(ctx, start_location);

	document.addEventListener('keypress', (event) => {
		ctx.clearRect(start_location, 0, 1200, 425 + 0.5);

		render_text_box(ctx, start_location);

		let rand_word = rand_common_word();

		(ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
		ctx.fillText(rand_word, start_location, 400);

		handleTyping(event, rand_word, rand_common_word);
	});

	// return rand_word;
};
