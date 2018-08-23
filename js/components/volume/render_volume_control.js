export default function renderVolumeControl(song) {
    let volume = song.volume * 100;
    console.log(volume);

    ctx.font = "20px Roboto Mono";
    ctx.fillText(volume, 200.5, 400.5);
}
