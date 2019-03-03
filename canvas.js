let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

// c.fillRect(x, y, width, height)
// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(0, 0, 255, 0.5)'
// c.fillRect(400, 100, 100, 100)
// c.fillStyle = 'rgba(0, 255, 0, 0.5)'
// c.fillRect(300, 300, 100, 100)
// console.log(canvas)

// Lines
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = 'pink'
// c.stroke()

// Arc / Circle
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'blue'
// c.stroke()

// for (let i = 0; i < 130; i++) {
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight
    // c.beginPath()
    // c.arc(x, y, 30, 0, Math.PI * 2, false)
    // c.strokeStyle = 'blue'
    // c.stroke()
// }

// let x = Math.random() * innerWidth
// let y = Math.random() * innerHeight
// let dx = (Math.random() - 0.5) * 8
// let dy = (Math.random() - 0.5) * 8
// let radius = 30

function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'blue'
        c.stroke()
        c.fill()
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
    
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}

let circleArray = []

for (let i = 0; i < 400; i++) {
    let radius = 30
    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius
    let dx = (Math.random() - 0.5)
    let dy = (Math.random() - 0.5)
    circleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerWidth)

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate()