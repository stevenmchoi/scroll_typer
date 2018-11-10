export default function renderText(fontSize, fillWords, x_pos, y_pos, textAlign = 'start') {
	// Render text
	ctx.font = `${fontSize}px Roboto Mono`;
	ctx.textAlign = textAlign;
	ctx.fillText(fillWords, x_pos, y_pos);
	ctx.textAlign = 'start';
}
