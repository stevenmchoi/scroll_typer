import renderButton from "../../buttons/render_button";
import startSong from "../song_page/start_song";
import resetScreen from "../../../actions/reset_screen";
import renderText from "../../util/render_text";

export default function gameOverPage() {
    resetScreen();

    // Endgame text
    renderText(50, "Great job!", 600.5, 150.5, "center");

    // Render score
    renderText(30, "Your score was:", 600.5, 250.5, "center");
    renderText(100, window.userScore, 600.5, 420.5, "center");

    renderButton([500.5, 600.5, 400, 125], ["Try again", 520.5, 680.5], startSong);
}
