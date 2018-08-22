import mainPage from './pages/main_page/main_page';

export default function root() {
	window.canvas = document.getElementById("game-layer");
	window.ctx = canvas.getContext("2d");
	window.canvasClone = canvas.cloneNode(true);

	document.body.style.cursor = "wait";

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load("50px Roboto Mono").then(() => mainPage());
}
