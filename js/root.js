import { text_field } from './components/text_field';
import { keyboard } from './components/keyboard';
import { sample_song } from './actions/music_handling';

let canvas;
let ctx;

function refresh(event) {
	const x_coord = event.offsetX;
	const y_coord = event.offsetY;

	if (x_coord > 400 && x_coord < 800 && y_coord > 300 && y_coord < 425) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		(ctx.font = '50px Roboto Mono'), '50px Courier', 'monospace';
		ctx.fillText('Back', 25, 70);
		ctx.strokeStyle = 'black';
		ctx.strokeRect(0.5, 0.5, 170, 100);

		text_field(ctx);

		sample_song.play();

		keyboard(ctx);

		canvas.removeEventListener('click', refresh);

		canvas.addEventListener('click', (event) => {
			const x_coord = event.offsetX;
			const y_coord = event.offsetY;

			if (x_coord > 0 && x_coord < 200 && y_coord > 0 && y_coord < 200) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				sample_song.stop();

				root();
			}
		});
	}
}

export const root = () => {
	canvas = document.getElementById('game-layer');
	ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.strokeRect(400.5, 300.5, 400, 125);
	ctx.fillStyle = '#000';
	ctx.fill();

	(ctx.font = '50px Roboto Mono'), '50px Courier', 'monospace';
	ctx.fillText('Future Retro', 420.5, 380.5);

	canvas.addEventListener('click', refresh);
};
