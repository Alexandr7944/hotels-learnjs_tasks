const btnStart = document.querySelector('.btnStart');
const formContainer = document.querySelector('#prompt-form-container');
const form = document.querySelector('#prompt-form');

btnStart.onclick = () => {
  showPrompt(
    "Введите что-нибудь<br>...умное :)",
    value => alert(`Вы ввели: ${value}`)
  );
}

const hiddenModal = () => formContainer.classList.add('none');

function showPrompt(text, callback) {
  formContainer.classList.remove('none');
  const input = form.text;
  const btnCancel = form.cancel;
  const message = form.querySelector("#prompt-message");
  const submit = e => {
    if (!input.value.trim()) return false;;
    exit(input.value);
    form.reset();
    return false;
  }

  const exit = message => {
    callback(message);
    hiddenModal();
  }

  message.innerHTML = text;
  input.focus();

  form.addEventListener('submit', submit)

  form.addEventListener('keydown', e => {
    if (e.key === 'Escape') exit(null);
  }, { once: true })

  btnCancel.addEventListener('click', () => exit(null), { once: true })

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = (e) => {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = (e) => {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };
}
