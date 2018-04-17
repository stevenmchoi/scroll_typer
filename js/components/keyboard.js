export const keyboard = (ctx) => {
	let mac_keys_img = new Image();
	mac_keys_img.onload = () => {
		ctx.drawImage(mac_keys_img, 80, 70, 1300, 360, 0, 480, 1195, 319);
	};
	mac_keys_img.src = 'app/assets/images/mackeys.png';
};
