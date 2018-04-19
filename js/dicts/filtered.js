const common_5000Words = require('./common_5000_words');
const leftHanded = require('./left_handed');
const rightHandedWords = require('./right_handed');

function moreThan_2(wordsArr) {
	return wordsArr.filter((word) => {
		return word.length > 2;
	});
}

function moreThan(wordsArr, num) {
	return wordsArr.filter((word) => {
		return word.length > num;
	});
}

const commonMoreThan_2 = moreThan_2(common_5000Words);

const leftMoreThan_2 = moreThan_2(leftHanded.leftHandedWords);

const rightMoreThan_2 = moreThan_2(rightHandedWords);

const oneHandedWords = leftMoreThan_2.concat(rightMoreThan_2);

const oneHandedMoreThan_3 = moreThan(oneHandedWords, 3);

module.exports = exports = {
	commonMoreThan_2,
	leftMoreThan_2,
	rightMoreThan_2,
	oneHandedWords,
	oneHandedMoreThan_3,
};
