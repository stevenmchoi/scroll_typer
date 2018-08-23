import resetScreen from "../../actions/reset_screen";
import renderButton from "../buttons/render_button";
import songPage from "./song_page/song_page";

export default function introPage() {
    resetScreen();

    renderButton([400.5, 300.5, 200, 125], ["Songs", 420.5, 380.5], songPage)
}
