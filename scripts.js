const container = document.querySelector('#container');

createGrid = function() {
  let counter = 0;
  while (counter < 256){
    const div = document.createElement('div');
    container.appendChild(div);
    counter++;
    console.log(div);
  }
}
createGrid();