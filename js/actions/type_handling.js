let typedKeys = [];

exports.handleTyping = (event, rand_word, rand_common_word) => {
	typedKeys.push(event.key);

	console.log(typedKeys.join(''));
	console.log(rand_word);

	if (typedKeys.length === rand_word.length) {
		sleep(1);

		typedKeys = [];
		rand_word = rand_common_word();
	}

	return rand_word;
};

module.exports = exports;
