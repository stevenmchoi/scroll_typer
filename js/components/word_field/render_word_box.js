export default function renderWordBox() {
	for (let location = textXPos; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}

	ctx.strokeStyle = 'black';
	ctx.strokeRect(textXPos, 300.5, 1200, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
}
