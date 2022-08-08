//Set conatiner for grid and reset button variables.
const container = document.querySelector('#container');
const setGridButton = document.createElement('button');
setGridButton.textContent = 'Set Grid';
document.body.appendChild(setGridButton);

createGrid = function(tiles) {
  let totalTiles = tiles * tiles;
  let tileWidthHeight = 600 / tiles;
  //Check if tiles already exist and remove from DOM if they do.
  if (document.getElementById('grid') !== null) {
    while (document.getElementById('grid') !== null){
      div = document.getElementById('grid');
      container.removeChild(div);
    }
  }

  let counter = 1;
  //Create tiles within container and event listener to turn color when mouse
  //hovers over them.
  while (counter <= totalTiles){
    const div = document.createElement('div');
    div.setAttribute('id', 'grid');
    div.style.width = tileWidthHeight + 'px';
    div.style.height = tileWidthHeight + 'px';
    div.addEventListener('mouseover', function(){
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      div.style.backgroundColor = `rgb(${r},${g},${b})`; 
    });
    container.appendChild(div);
    counter++;
  }
}

setGrid = function() {
  do {
    tiles = prompt('Enter tile dimension 100 or less. E.g., 64 for a 64x64 grid.');
  } while (tiles > 100);
  createGrid(tiles);
}

setGridButton.addEventListener('click', setGrid);