export default function setSongNum(dimens, songIdx) {
	if (inButton(dimens, event)) {
		window.songNum = songIdx;
	} else {
		window.songNum = undefined;
	}
}
