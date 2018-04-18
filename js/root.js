import { text_field } from './components/text_field';
import { keyboard } from './components/keyboard';

export const root = () => {
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	const rand_word = text_field(ctx);

	keyboard(ctx);
};
