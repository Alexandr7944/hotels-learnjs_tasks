mouse.tabIndex = 0;
mouse.addEventListener('focus', () => {
  mouse.style.position = 'fixed';
  mouse.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowUp':
        mouse.style.top = mouse.offsetTop - mouse.offsetHeight + 'px';
        break;
      case 'ArrowRight':
        mouse.style.left = mouse.offsetLeft + mouse.offsetWidth + 'px';
        break;
      case 'ArrowDown':
        mouse.style.top = mouse.offsetTop + mouse.offsetHeight + 'px';
        break;
      case 'ArrowLeft':
        mouse.style.left = mouse.offsetLeft - mouse.offsetWidth + 'px';
        break;
      default:
        break;
    }
  })
})