import { commonMoreThan_2 } from '../../dicts/filtered';

export default function randCommonWord() {
	return commonMoreThan_2[
		Math.floor(Math.random() * commonMoreThan_2.length)
	];
}
