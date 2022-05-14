var gStars = [
    {
        name: 'Shabi',
        rate: 200,
    },
    {
        name: 'Uza',
        rate: 130
    },
    {
        name: 'Batz',
        rate: 250
    }
]

var gCanvas
var gCtx
var gBarWidth = 40

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    gCtx.fillStyle = 'pink'
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
}

function drawCharts() {
    // TODO: start from drawing a bar for single star
    // TODO: draw a bar for each star
}

function canvasClicked(ev) {
    const clickedStar = null
    // TODO: find out if clicked a star bar
    // ev.offsetX >= star.x && ev.offsetX <= star.x + gBarWidth &&
    // ev.offsetY >= star.y && ev.offsetY <= star.y + star.rate


    if (clickedStar) openModal(clickedStar.name, clickedStar.rate, ev.clientX, ev.clientY)
    else closeModal()


}

function openModal(starName, starRate, x, y) {
    // TODO: open the modal with the given text in the given coordinates 
    // (style.top = style.left = 18 + 'px')
    const elModal = document.querySelector('.modal')
    const msg = `${starName} is ${starRate}% awesome`
    elModal.innerText = msg
    elModal.hidden = false
}

function closeModal() {
    const elModal = document.querySelector('.modal')
    elModal.hidden = false
}