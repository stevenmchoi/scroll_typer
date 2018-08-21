export default function renderScore() {
    if (!window.userScore) {
        window.userScore = 0;
    }

    // // Button box
    // ctx.strokeStyle = "black";
    // ctx.strokeRect(400.5, 300.5, 170, 100);
    // ctx.fillStyle = "#000";
    // ctx.fill();

    // Button text
    ctx.font = "50px Roboto Mono";
    ctx.textAlign = "right";
    ctx.fillText("Score:", 1100.5, 700.5);
    ctx.textAlign = "right";
    ctx.fillText(userScore, 1100.5, 750.5);
    ctx.textAlign = "start";
}
