//TODO remainingView (name doesn't make sense?) will be used to update "inner html" on the div next to the text area

const textArea = document.getElementById('story');
const remainingView = document.getElementById('letter-count');
const maxLength = 160;
// init var to track remaining chars
let remaining;

remainingView.innerHTML = remaining ? remaining : 160;

textArea.addEventListener('input', function (event) {
  remaining = maxLength - textArea.textLength;
});
