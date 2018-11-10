const volList = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

// TODO: merge into changeVol
export const incrVol = () => {
	ctx.clearRect(0, 355, 200, 40);

	if (window.volIdx < 10) {
		window.volIdx += 1;
	}

	window.currentSong.volume = volList[window.volIdx];

	let volume = window.currentSong.volume * 100;

	ctx.font = '30px Roboto Mono';
	ctx.textAlign = 'right';
	ctx.fillText(volume, 120.5, 380.5);
	ctx.textAlign = 'start';
};

export const decrVol = () => {
	ctx.clearRect(0, 355, 200, 40);

	if (window.volIdx > 0) {
		window.volIdx -= 1;
	}

	window.currentSong.volume = volList[window.volIdx];

	let volume = window.currentSong.volume * 100;

	ctx.font = '30px Roboto Mono';
	ctx.textAlign = 'right';
	ctx.fillText(volume, 120.5, 380.5);
	ctx.textAlign = 'start';
};

// TODO: Can't use creating callbacks with changeVol makes it difficult to remove listeners
//       Use "window.listeners" dictionary in "root.js"

// export default function changeVol(dir) {
//     ctx.clearRect(0, 355, 200, 40);

//     if (dir === "up") {
//         incrVol();
//     } else if (dir === "down") {
//         decrVol();
//     } else {
//         return new Error("bad volume direction");
//     }

//     let volume = window.currentSong.volume * 100;

//     ctx.font = "30px Roboto Mono";
//     ctx.textAlign = "right";
//     ctx.fillText(volume, 120.5, 380.5);
//     ctx.textAlign = "start";
// }
