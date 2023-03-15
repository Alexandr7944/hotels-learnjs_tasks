document.addEventListener('mouseover', event => {
  const btn = event.target.closest('[data-tooltip]');
  if (!btn) return;
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerHTML = btn.dataset.tooltip;

  document.body.appendChild(tooltip);

  const btnPos = btn.getBoundingClientRect();
  let top = btnPos.top - tooltip.offsetHeight - 10
  if (top < 0) top = btnPos.bottom + 10; 

  tooltip.style.top = top + 'px';
  tooltip.style.left = btnPos.left + 'px';
})

document.addEventListener('mouseout', event => {
  const btn = event.target.closest('[data-tooltip]');
  if (!btn) return;
  document.querySelector('.tooltip')?.remove();
});