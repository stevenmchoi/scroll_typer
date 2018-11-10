import introPage from './pages/intro';

export default function root() {
	window.canvas = document.getElementById('game-layer');
	window.ctx = canvas.getContext('2d');
	window.canvasClone = canvas.cloneNode(true);

	document.body.style.cursor = 'wait';

	// Keep track of listeners
	window.listeners = {};

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load('50px Roboto Mono').then(() => introPage());
}
