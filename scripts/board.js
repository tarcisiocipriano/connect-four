const $ = x => document.querySelector(x)

const board = $('.board')
const boardSpots = $('.board__spots')
const cols = 7
const rows = 6

// create the spots
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const spot = document.createElement('div')
    spot.classList.add('spot')
    spot.dataset.state = 'empty'
    spot.dataset.row = i + 1
    spot.dataset.col = j + 1
    boardSpots.append(spot)
  }
}

board.style.setProperty('--cols', cols)
board.style.setProperty('--rows', rows)

// style front board
const boardFront = document.createElement('div')
boardFront.classList.add('board__spots')
boardFront.classList.add('board__front')
for (let i = 0; i < cols * rows; i++) {
  boardFront.insertAdjacentHTML('beforeend', '<div class="spot"></div>')
}
board.prepend(boardFront)

// style back board
const boardBack = document.createElement('div')
boardBack.classList.add('board__spots')
boardBack.classList.add('board__back')
for (let i = 0; i < cols * rows; i++) {
  boardBack.insertAdjacentHTML('beforeend', '<div class="spot"></div>')
}
// board.append(boardBack)
