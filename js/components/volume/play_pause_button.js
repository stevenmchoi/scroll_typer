import renderButton from "../buttons/render_button";

export default function playPauseButton(event) {
    ctx.clearRect(190.5, 320.5, 79.5, 79.5);

    console.log(event);


    console.log(window.currentSong.playing);

    ctx.fillStyle = "black";
    ctx.strokeRect(190.5, 320.5, 80, 80);

    if (window.currentSong.playing) {
        ctx.fillRect(208.5, 335.5, 15, 50);
        ctx.fillRect(238.5, 335.5, 15, 50);

        window.currentSong.pause();
    } else {
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(208.5, 335.5);
        ctx.lineTo(253.5, 360.5);
        ctx.lineTo(208.5, 385.5);
        ctx.lineTo(208.5, 335.5);
        ctx.stroke();
        ctx.fill();

        window.currentSong.play();
    }

    renderButton([190.5, 320.5, 80, 80], ["||", 200.5, 373.5], playPauseButton);
}
