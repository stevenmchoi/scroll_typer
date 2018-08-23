import renderButton from "../buttons/render_button";
import {
    incrVol,
    decrVol
} from "./volume_buttons";

export default function renderVolumeControl() {
    if (!window.volIdx) {
        window.volIdx = 5;
        song1.volume = 0.5;
    }

    let volume = song1.volume * 100;

    ctx.font = "30px Roboto Mono";
    ctx.textAlign = "right";
    ctx.fillText("Volume:", 150.5, 340.5);
    ctx.fillText(volume, 120.5, 380.5);
    ctx.textAlign = "start";

    // "+" and "-" buttons
    renderButton([90.5, 240.5, 50, 50], ["+", 100.5, 280.5], incrVol);
    renderButton([90.5, 420.5, 50, 50], ["-", 100.5, 460.5], decrVol);
}
