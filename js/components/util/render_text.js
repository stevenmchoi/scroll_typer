export default function renderText(fontSize, fillText) {
    // Render text
    ctx.font = `${fontSize}px Roboto Mono`;
    ctx.fillText(...fillText);
}
