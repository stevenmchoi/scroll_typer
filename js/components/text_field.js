import { dict } from '../dicts/dict';
import { common_more_than_2 } from '../dicts/filtered';

const start_location = 480 + 0.5;

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}

let typedKeys = [];

// common_more_than_2
function rand_common_word() {
	return common_more_than_2[
		Math.floor(Math.random() * common_more_than_2.length)
	];
}

// sleep, typedKeys, rand_common_word
function handleTyping(event, rand_word) {
	typedKeys.push(event.key);

	if (typedKeys.length === rand_word.length) {
		sleep(200);

		typedKeys = [];
		rand_word = rand_common_word();
	}

	return rand_word;
}

function render_text_box(ctx) {
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

// fill text
function render_text(ctx, rand_word) {
	(ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
	ctx.fillText(rand_word, start_location, 400);
}

// rand_common_word, handleTyping
function render_rand_word(ctx) {
	let rand_word = rand_common_word();

	render_text(ctx, rand_word);

	document.addEventListener('keypress', (event) => {
		ctx.clearRect(start_location, 0, 1200, 425 + 0.5);

		render_text_box(ctx);

		rand_word = handleTyping(event, rand_word);

		render_text(ctx, rand_word);
	});
}

export const text_field = (ctx) => {
	// (null on initial step; need rand_word)
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong
	render_text_box(ctx);
	render_rand_word(ctx);
};
