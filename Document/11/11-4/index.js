// Покажите заметку рядом с элементом


function positionAt(anchor, position, elem) {
  const pos = anchor.getBoundingClientRect();
  switch(position) {
    case 'top-out':
      elem.setAttribute('style', `
        top: ${pos.top - elem.clientHeight}px;
        left: ${pos.left}px;`
      )
      break;
    case 'top-in':
      elem.setAttribute('style', `
        top: ${pos.top}px;
        left: ${pos.left}px;`
      )
      break;
    case 'right-out':
      elem.setAttribute('style', `
        top: ${pos.top}px;
        left: ${pos.right}px;`
      )
      break;
    case 'right-in':
      elem.setAttribute('style', `
        top: ${pos.top}px;
        left: ${pos.right - elem.clientWidth}px;`
      )
      break;
    case 'bottom-out':
      elem.setAttribute('style', `
        top: ${pos.bottom}px;
        left: ${pos.left}px;`
      )
      break;
    case 'bottom-in':
      elem.setAttribute('style', `
        top: ${pos.bottom - elem.clientHeight}px;
        left: ${pos.left}px;`
      )
      break;
  }
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

showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note above");
showNote(blockquote, "right-in", "note at the right");
showNote(blockquote, "bottom-in", "note below");