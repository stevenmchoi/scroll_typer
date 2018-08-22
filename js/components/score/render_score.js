function calcScore() {
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

export default function renderScore() {
    ctx.clearRect(900.5, 600.5, canvas.width, canvas.height);

    if (!window.userScore) {
        window.userScore = 0;
    }

    calcScore();

    // Button text
    ctx.font = "50px Roboto Mono";
    ctx.textAlign = "right";
    ctx.fillText("Score:", 1100.5, 700.5);
    ctx.fillText(userScore, 1100.5, 750.5);
    ctx.textAlign = "start";
}
