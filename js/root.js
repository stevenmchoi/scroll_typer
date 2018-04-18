import { text_field } from './components/text_field';
import { keyboard } from './components/keyboard';

let canvas;
let ctx;

function refresh() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	text_field(ctx);

	keyboard(ctx);

	canvas.removeEventListener('click', refresh);
}

export const root = () => {
	canvas = document.getElementById('game-layer');
	ctx = canvas.getContext('2d');

	canvas.addEventListener('click', refresh);
};
