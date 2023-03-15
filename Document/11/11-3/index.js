// Покажите заметку рядом с элементом


function positionAt(anchor, position, elem) {
  const pos = anchor.getBoundingClientRect();
  let top, left;
  if (position === 'top') {
    top = pos.top - elem.clientHeight;
    left = pos.left;
  }
  if (position === 'right') {
    top = pos.top;
    left = pos.right;
  }
  if (position === 'bottom') {
    top = pos.bottom;
    left = pos.left;
  }
  elem.setAttribute('style', `
    top: ${top}px;
    left: ${left}px;`
  )
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");