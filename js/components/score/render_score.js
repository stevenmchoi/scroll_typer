export default function renderScore() {
	ctx.clearRect(900.5, 600.5, canvas.width, canvas.height);

	if (!window.userScore) {
		window.userScore = 0;
	}

	// Button text
	ctx.font = '50px Roboto Mono';
	ctx.textAlign = 'right';
	ctx.fillText('Score:', 1100.5, 700.5);
	ctx.fillText(userScore, 1100.5, 750.5);
	ctx.textAlign = 'start';
}
