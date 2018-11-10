export default function songTimer() {
	window.songTimerInterval = setInterval(() => {
		ctx.clearRect(0, 700, 300, canvas.height);

		ctx.font = '50px Roboto Mono';
		ctx.fillText('Timer:', 100.5, 700.5);
		ctx.fillText(
			(
				Math.floor((window.currentSong.duration - window.currentSong.currentTime) * 10) / 10.0
			).toFixed(1),
			100.5,
			750.5
		);
	}, 1);
}
