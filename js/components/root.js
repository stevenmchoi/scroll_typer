// import mainPage from "./main_page/main_page";
import mainPage from './pages/main_page/main_page';
import removeAllListeners from "../actions/remove_all_listeners";

export default function root() {
	window.canvas = document.getElementById("game-layer");
	window.ctx = canvas.getContext("2d");
	window.canvasClone = canvas.cloneNode(true);
	removeAllListeners();

	document.body.style.cursor = "wait";

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load("50px Roboto Mono").then(() => mainPage());
}
