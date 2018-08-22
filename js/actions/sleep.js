export default function sleep(milliseconds) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, milliseconds);
	});
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
// export default function sleep(milliseconds) {
// 	var start = new Date().getTime();
// 	for (var i = 0; i < 1e7; i++) {
// 		if (new Date().getTime() - start > milliseconds) {
// 			break;
// 		}
// 	}
// }
