import resetScreen from "../../actions/reset_screen";
import renderButton from "../buttons/render_button";
import songPage from "./song_page/song_page";

export default function introPage() {
    resetScreen();

    renderButton([500.5, 600.5, 200, 125], ["START", 520.5, 680.5], songPage)
}
