import {
    addButtonListener
} from '../../actions/in_button_listener';

export default function renderButton(
    btnDimens, fillText, btnCb, color = "black", fillColor = "#000", font = "50px Roboto Mono"
) {
    // Button box
    ctx.strokeStyle = color;
    ctx.strokeRect(...btnDimens);
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Button text
    ctx.font = font;
    ctx.fillText(...fillText);

    // Button listener
    addButtonListener(btnDimens, btnCb);
}
