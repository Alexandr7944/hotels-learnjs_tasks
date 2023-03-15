const div = document.createElement('div');
document.body.prepend(div);

showClock(div);
updateTime(div)

function showClock(element) {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  element.innerHTML = `
  <span class="red">${hours}</span>:
  <span class="green">${minutes}</span>:
  <span class="blue">${seconds}</span>`;
}


function updateTime(element) {
  const start = document.querySelector('.start');
  const stop = document.querySelector('.stop');
  let timerId;
  start.addEventListener('click', () => {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => showClock(element), 1000);
  })
  stop.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
  });
}
