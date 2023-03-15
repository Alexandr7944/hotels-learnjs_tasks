// В чём отличие CSS-свойств width и clientWidth

//В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

/**
 * 1) getComputedStyle(elem).width зависит от свойства box-sizing, 
 *    а clientWidth - это фактическое значение
 * 2) getComputedStyle(elem).width нет единого для всех браузеров отношения к скроллам
 * 3) getComputedStyle(elem).width возвращает строку свойства в 'px',
 *    а clientWidth возвращает число
 */