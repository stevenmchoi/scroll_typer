import resetScreen from "../../actions/reset_screen";
import renderButton from "../buttons/render_button";
import songsPage from "./songs_page";
import renderText from "../util/render_text";

export default function introPage() {
    resetScreen();

    // Title of game
    renderText(100, "Rhythm Typer (WIP)", 600.5, 100.5, "center");

    // Instructions
    let instructions = [
        "Welcome to Rhythm Typer!",
        "",
        "This is a rhythm game combined with a typing game,",
        "where you have to type to the rhythm of a song.",
        "",
        "NOTE: not yet implemented; temporary solution below",
        "",
        "As the words drop down the screen, type them before",
        "they reach the box.",
        "",
        "Try to get as many points as you can within the",
        "time limit!"
    ];

    for (let i = 0; i < instructions.length; i++) {
        renderText(30, instructions[i], 200.5, 180 + 40 * i);
    }

    renderButton([500.5, 640.5, 200, 125], ["START", 527.5, 720.5], songsPage);
}
