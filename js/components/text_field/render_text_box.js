export default function renderTextBox(startLocation) {
	for (let location = startLocation; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}

	ctx.strokeStyle = 'black';
	ctx.strokeRect(startLocation, 300.5, 1200, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
}
