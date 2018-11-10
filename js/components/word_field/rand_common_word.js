import { commonMoreThan_5 } from '../../dicts/filtered';

export default function randCommonWord() {
	return commonMoreThan_5[Math.floor(Math.random() * commonMoreThan_5.length)];
}
