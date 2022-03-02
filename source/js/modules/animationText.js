export default () => {
  function animationText(anyTextObject, insertText, animDur, animName, animTimeFunc, animDelay, animDir) {
    let anyText = anyTextObject.textContent;

    let span = document.createElement('span');
    span.classList.add('spanner');
    insertText.appendChild(span);

    let textArray = anyText.split('');
    span.style = 'animation: ' + animDur + ' ' + animName + ' ' + animDelay;

    for (let i = 0; i < textArray.length; i++) {
      let spanWrapper = document.createElement('span');
      spanWrapper.innerText = textArray[i];
      document.querySelector('.spanner').appendChild(spanWrapper);
    }
  }
}
