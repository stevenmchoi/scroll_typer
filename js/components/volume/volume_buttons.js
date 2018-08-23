const volList = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1.0];

export const incrVol = () => {
    window.volIdx += 1;
    console.log("incrVol");
}

export const decrVol = () => {
    window.volIdx -= 1;
    console.log("decrVol");
}
