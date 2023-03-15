// Какой обработчик запустится?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

/**
 * оба обработчика запустятся, потому как удаления 
 * нужно указывать именно функцию
 */