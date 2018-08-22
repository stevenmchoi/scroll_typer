export default function calcScore() {
    let lastKey;
    let lastIdx;

    if (window.typedKeys) {
        lastKey = window.typedKeys[window.typedKeys.length - 1];
        lastIdx = window.typedKeys.length - 1;
    } else {
        lastKey = undefined;
        lastIdx = undefined;
    }

    switch (lastKey) {
        case undefined:
            window.userScore += 0;
            break;
        case window.randWord[lastIdx]:
            window.userScore += 2;
            break;
        default:
            window.userScore += -1;
            break;
    }
}
