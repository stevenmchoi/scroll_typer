import { text_field } from './components/text_field';
import { keyboard } from './components/keyboard';

export const root = () => {
	const canvas = document.getElementById('game-layer');
	const ctx = canvas.getContext('2d');

	text_field(ctx);

	keyboard(ctx);
};
