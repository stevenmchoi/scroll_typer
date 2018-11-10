import resetScreen from '../../actions/reset_screen';
import renderButton from '../buttons/render_button';
import songsPage from './songs_page';
import renderText from '../util/render_text';

export default function introPage() {
	resetScreen();

	// Title of game
	renderText(100, 'Scroll Typer', 600.5, 100.5, 'center');

	// Instructions
	let instructions = [
		'Welcome to Scroll Typer!',
		'',
		'This is a scrolling typing game set to music.',
		'',
		'As the words drop down the screen, type them before',
		'they reach the box.',
		'',
		'Try to get as many points as you can within the',
		'time limit!',
	];

	for (let i = 0; i < instructions.length; i++) {
		renderText(30, instructions[i], 200.5, 180 + 40 * i);
	}

	renderButton([500.5, 640.5, 200, 125], ['START', 527.5, 720.5], songsPage);
}
