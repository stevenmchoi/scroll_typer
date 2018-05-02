import mainGame from "./main_game/main_game";

export default function root() {
	window.canvas = document.getElementById("game-layer");
	window.ctx = canvas.getContext("2d");

	ctx.strokeStyle = "black";
	ctx.strokeRect(400.5, 300.5, 400, 125);
	ctx.fillStyle = "#000";
	ctx.fill();

	document.body.style.cursor = "wait";

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load("50px Roboto Mono").then(mainGame);
}
