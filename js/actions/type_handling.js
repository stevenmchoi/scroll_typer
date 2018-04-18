let typedKeys = [];

exports.handleTyping = (event, rand_word, rand_common_word) => {
	typedKeys.push(event.key);

	console.log(typedKeys.join(''));
	console.log(rand_word);

	if (typedKeys.length === rand_word.length) {
		typedKeys = [];
		rand_word = rand_common_word();
	}
};

module.exports = exports;
