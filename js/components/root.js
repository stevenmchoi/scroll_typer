import mainGame from "./main_game/main_game";
import removeAllListeners from "../actions/remove_all_listeners";

export default function root() {
	window.canvas = document.getElementById("game-layer");
	window.ctx = canvas.getContext("2d");
	window.canvasClone = canvas.cloneNode(true);
	removeAllListeners();

	document.body.style.cursor = "wait";

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load("50px Roboto Mono").then(() => mainGame());
}
