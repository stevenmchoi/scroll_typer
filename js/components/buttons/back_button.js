import resetScreen from "../../actions/reset_screen";
import songsPage from "../pages/songs_page";

export default function backButton() {
  resetScreen();

  document.removeEventListener(
    "keyup",
    window.listeners.backButtonKeyupListener
  );

  window.currentSong.pause();
  window.currentSong.currentTime = 0;

  songsPage();
}
