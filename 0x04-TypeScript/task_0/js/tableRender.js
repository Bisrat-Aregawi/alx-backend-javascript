/**
  * makeTag - Function makes HTML elements
  * @param {String} tagName - string description of elements
  * @return {HTMLElement} Created HTML element
  */
function makeTag(tagName) {
  return document.createElement(tagName);
}

/**
  * generateTableSection - Function generates table rows populated with data
  * @param {HTMLElement} tSection - thead HTMLElement
  * @param {Array<any>} data - Data corresponding to either the key or value of
  * object
  * @param {String} rowType - String which determines wether we want to create
  * 'th' Element or 'td' element
  */
function generateTableSection(tSection, data, rowType) {
  const row = tSection.insertRow();
  for (const key of data) {
    const cell = (rowType === 'header') ? makeTag('th') : makeTag('td');
    const text = document.createTextNode(key);
    cell.appendChild(text) && row.appendChild(cell);
  }
}

/**
  * renderTable - Function renders a fully populated table
  * @param {Array<object>} arr - Array of Student objects
  * @returns {HTMLTableElement} Generated table
  */
export default function renderTable(arr) {
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();
  table.setAttribute('border', 1);

  generateTableSection(thead, Object.keys(arr[0]), 'header');
  for (const student of arr) {
    generateTableSection(tbody, Object.values(student), 'body');
  }

  return table;
}
