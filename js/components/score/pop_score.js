export default function popScore(score, charIdx) {
    let counter = 0,
        opacity = 0;
    let popScoreInterval = {};

    let scoreColor = {
        "-1": [255, 0, 0],
        "+2": [0, 80, 0]
    }

    popScoreInterval[charIdx] = setInterval(() => {
        ctx.clearRect(textStartLocation + 60 * charIdx, 430, 60, 60);

        if (counter > 200) {
            opacity -= 4;

            clearInterval(popScoreInterval[charIdx]);
        } else if (counter > 100) {
            opacity -= 4;
        } else {
            opacity += 4;
        }

        ctx.font = "40px Roboto Mono";
        ctx.textAlign = "right";
        ctx.fillStyle = "rgba(" + scoreColor[score].join(',') + "," + opacity / 100.0 + ")";
        ctx.fillText(score, textStartLocation + 50 + 60 * charIdx, 480.5);
        ctx.textAlign = "start";
        ctx.fillStyle = "black";

        counter += 4;
    }, 1);
}
