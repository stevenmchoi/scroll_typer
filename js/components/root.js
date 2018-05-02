import mainGame from "./main_game/main_game";
import removeAllListeners from "../actions/remove_all_listeners";

export default function root() {
	window.canvas = document.getElementById("game-layer");
	window.ctx = canvas.getContext("2d");
	removeAllListeners();

	// Render start button
	const start_dimens = [400.5, 300.5, 400, 125];
	ctx.strokeStyle = "black";
	ctx.strokeRect(...start_dimens);
	ctx.fillStyle = "#000";
	ctx.fill();

	document.body.style.cursor = "wait";

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load("50px Roboto Mono").then(() => mainGame(start_dimens));
}
