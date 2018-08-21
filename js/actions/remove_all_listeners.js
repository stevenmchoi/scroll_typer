import mainPage from '../components/pages/main_page/main_page';
import backButton from '../components/buttons/back_button';
import handleKeypress from './keypress_handling';

export default function removeAllListeners() {
	// canvas.parentNode.replaceChild(canvasClone, canvas);
	// window.ctx = canvas.getContext("2d");
	// canvasClone.parentNode.replaceChild(window.canvas.cloneNode(true), canvasClone);

	// var el = document.getElementById('game-layer'),
	// 	elClone = el.cloneNode(true);

	// el.parentNode.replaceChild(elClone, el);

	canvas.removeEventListener('click', mainPage);
	canvas.removeEventListener('click', backButton);
	document.removeEventListener('keypress', handleKeypress);
}
