function getCanvasAndContext() {
	const canvas = document.getElementById('game-layer');
	const ctx = canvas.getContext('2d');

	// return { canvas, ctx };

	module.exports = exports = { canvas, ctx };
}

document.addEventListener('DOMContentLoaded', getCanvasAndContext);
