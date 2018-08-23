import resetScreen from "../../actions/reset_screen";
import renderButton from "../buttons/render_button";

export default function introPage() {
    resetScreen();

    renderButton([400.5, 300.5, 400, 125], ["Future Retro", 420.5, 380.5])
}
