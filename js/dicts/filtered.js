const common_5000_words = require('./common_5000_words');
const left_handed = require('./left_handed');
const right_handed_words = require('./right_handed');

function more_than_2(wordsArr) {
	return wordsArr.filter((word) => {
		return word.length > 2;
	});
}

function more_than(wordsArr, num) {
	return wordsArr.filter((word) => {
		return word.length > num;
	});
}

const common_more_than_2 = more_than_2(common_5000_words);

const left_more_than_2 = more_than_2(left_handed.left_handed_words);

const right_more_than_2 = more_than_2(right_handed_words);

const one_handed_words = left_more_than_2.concat(right_more_than_2);

const one_handed_more_than_3 = more_than(one_handed_words, 3);

module.exports = exports = {
	common_more_than_2,
	left_more_than_2,
	right_more_than_2,
	one_handed_words,
	one_handed_more_than_3,
};
