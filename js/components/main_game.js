import { text_field } from './text_field';
import { keyboard } from './keyboard';
import { sample_song } from '../actions/music_handling';
import { root } from './root';

export function main_game(event) {
	const canvas = document.getElementById('game-layer');
	const ctx = canvas.getContext('2d');

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

		canvas.removeEventListener('click', main_game);

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
