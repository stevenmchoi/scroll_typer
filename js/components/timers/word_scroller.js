import renderWord from "../word_field/render_word";

export default function wordScroller() {
  let currentYPos = 0.5;
  window.wordScrollerInterval = setInterval(() => {
    renderWord(currentYPos);

    if (currentYPos === 425.5) {
      clearInterval(wordScrollerInterval);
    }

    currentYPos += 5;
  }, 1);
}
