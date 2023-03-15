class Table{
  
  constructor(element) {
    this._element = element;
    this.arr = Array.from(this._element.rows).slice(1);
  }

  number(index) {
    this.arr.sort((a, b) => {
      return a.cells[index].textContent - b.cells[index].textContent
    });
    return this.arr;
  }

  string(index) {
    this.arr.sort((a, b) => {
      return a.cells[index].textContent > b.cells[index].textContent
        ? 1 
        : -1
    });
    return this.arr;
  }
}

export default Table;