'use strict'
var gStars = [
  {
    name: 'Static',
    rate: 190,
  },
  {
    name: 'Benel',
    rate: 220
  },
  {
    name: 'NoaKilla',
    rate: 80
  }
];

var gBarWidth = 40;
var gCanvas;
var gCtx;


function init() {
  gCanvas = document.querySelector('#canvas');
  gCtx = gCanvas.getContext('2d');

  gCtx.fillStyle = 'pink'
  gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
  drawCharts()
}

function drawChartsPartial() {
  // Draw a bar for single star
  var star = gStars[0];
  var x = 0 * gBarWidth ;
  var y = gCanvas.height - star.rate
  gCtx.fillStyle = 'black'
  gCtx.fillRect(x, y, gBarWidth, star.rate)

}


function drawCharts() {
  const PAD_START = 20;
  const PAD_BAR = 40;
  // Draw a bar for each star
  gStars.forEach((star, idx) => {
    gCtx.fillStyle = 'black'

    star.x = PAD_START + (idx * (gBarWidth + PAD_BAR));
    star.y = gCanvas.height - star.rate

    gCtx.fillRect(star.x, star.y, gBarWidth, star.rate)
  })
}

function canvasClicked(ev) {
  // Find out if clicked inside of star chart
  const clickedStar = gStars.find(star => {
    return (
      ev.offsetX > star.x &&
      ev.offsetX < star.x + gBarWidth &&
      ev.offsetY > star.y &&
      ev.offsetY < star.y + star.rate
    )
  })

  // Open the modal on the clicked coordinates if found a click on a star,
  //       close the modal otherwise
  if (clickedStar) openModal(clickedStar.name, clickedStar.rate, ev.clientX, ev.clientY)
  else closeModal()
}

function openModal(name, rate, x, y) {
  // TODO: open the modal with the given text in the given coordinates
  const elModal = document.querySelector('.modal')
  elModal.innerText = `${name} is ${rate}% awesome`
  elModal.style.top = y + 'px'
  elModal.style.left = x + 'px'
  elModal.style.display = 'block'
}

function closeModal() {
  //TODO: close the modal
  const elModal = document.querySelector('.modal')
  elModal.style.display = 'none'
}