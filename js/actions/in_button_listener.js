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

function buttonMousemoveListener(dimens, event) {
	if (inButton(dimens, event)) {
		document.body.style.cursor = "pointer";
	} else {
		document.body.style.cursor = "default";
	}
}

function buttonClickListener(dimens, btn_fn, event) {
	if (inButton(dimens, event)) {
		btn_fn();
	}
}

const btnDict = {}

export const addButtonListener = (dimens, btn_fn) => {
	btnDict[btn_fn] = {
		mousemove: event => buttonMousemoveListener(dimens, event),
		click: event => buttonClickListener(dimens, btn_fn, event)
	}

	// TODO: Let inButton handle multiple dimensions with global mousemove dimens
	canvas.addEventListener("mousemove", btnDict[btn_fn].mousemove);
	canvas.addEventListener("click", btnDict[btn_fn].click);
}

export const removeButtonListeners = (btn_fn) => {
	if (btnDict[btn_fn]) {
		canvas.removeEventListener("mousemove", btnDict[btn_fn].mousemove);
		canvas.removeEventListener("click", btnDict[btn_fn].click);
	}
}
