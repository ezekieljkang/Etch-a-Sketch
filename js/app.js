const container = document.getElementById('container');

//Makes rows and columns
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    container.appendChild(cell).className = 'grid-item';
  };
};
makeRows(16,16);

//Outputs entire grid item as an array
const gridItem = document.querySelectorAll('.grid-item');

//Applies function(changeClass) to each gridItem
gridItem.forEach(gridItem => {
  gridItem.addEventListener('mouseover', changeClass);
});

//Adds class active
function changeClass (){
  this.classList.add('active');
};