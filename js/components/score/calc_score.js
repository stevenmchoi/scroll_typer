import popScore from "./pop_score";

export default function calcScore() {
    let lastKey;
    let lastIdx;
    let score;

    if (window.typedKeys) {
        lastKey = window.typedKeys[window.typedKeys.length - 1];
        lastIdx = window.typedKeys.length - 1;
    } else {
        lastKey = undefined;
        lastIdx = undefined;
    }

    switch (lastKey) {
        case undefined:
            score = 0;
            break;
        case window.randWord[lastIdx]:
            score = "+2";
            break;
        default:
            score = "-1";
            break;
    }

    if (score !== 0) {
        popScore(score, lastIdx);
    }

    window.userScore += parseInt(score);
}
