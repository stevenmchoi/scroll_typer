export const render = () => {
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.lineWidth = 1.0;
	ctx.strokeRect(450, 300, 750, 125);
	ctx.font = '100px Roboto Mono';
	ctx.fillStyle = '#000';
	ctx.fill();
	ctx.fillText('Hello World!', 460, 400);
	ctx.closePath();

	let mac_keys_img = new Image();
	mac_keys_img.onload = () => {
		ctx.drawImage(mac_keys_img, 80, 70, 1300, 360, 0, 480, 1195, 319);
	};
	mac_keys_img.src = 'app/assets/images/mackeys.png';
};
