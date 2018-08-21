function inButton([button_x, button_y, button_len, button_height], event) {
	const x_coord = event.offsetX;
	const y_coord = event.offsetY;

	return (
		x_coord > button_x &&
		x_coord < button_x + button_len &&
		y_coord > button_y &&
		y_coord < button_y + button_height
	);
}

export default function inButtonListener(dimens, btn_fn) {
	canvas.addEventListener("mousemove", event => {
		if (inButton(dimens, event)) {
			document.body.style.cursor = "pointer";
		} else {
			document.body.style.cursor = "default";
		}
	});

	canvas.addEventListener("click", event => {
		if (inButton(dimens, event)) {
			btn_fn();
		}
	});
}
