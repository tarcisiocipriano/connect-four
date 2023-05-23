let isPlayerOne = true

const spots = boardSpots.querySelectorAll('.spot')
spots.forEach(spot => {
  spot.addEventListener('click', function () {
    // check if is not filled
    if (spot.dataset.state === 'filled') {
      return
    }

    // get spots from context column
    const col = spot.dataset.col
    const colSpots = Array.from(spots).filter(s => s.dataset.col == col)

    // get last empty spot
    const lastEmptySpot = colSpots.findLast(s => s.dataset.state === 'empty')

    // fill the last spot
    lastEmptySpot.dataset.state = 'filled'
    const ball = document.createElement('span')
    ball.classList.add('ball')
    ball.classList.add(isPlayerOne ? 'ball--pink' : 'ball--yellow')
    lastEmptySpot.appendChild(ball)

    // send distance from the top to css
    const boardY = board.getBoundingClientRect().top
    const ballY = ball.getBoundingClientRect().top
    const ballSize = ball.clientHeight
    const distanceY = boardY - ballY - ballSize
    ball.style.setProperty('--distanceY', distanceY)
    ball.style.setProperty('--row', lastEmptySpot.dataset.row)

    // after add ball
    isPlayerOne = !isPlayerOne
  })
})
