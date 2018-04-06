window.onload = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    let xPos = 50
    let yPos = 50
    let xPos2 = 400
    let yPos2 = 400
    let lives = 3
    let lives2 = 3
    let table = []
    let table2 = []

    ctx.fillStyle = 'red'
    ctx.fillRect(xPos, yPos, 50, 50)


    ctx.fillStyle = 'blue'
    ctx.fillRect(xPos2, yPos2, 50, 50)


    const move = e => {
        if (e.keyCode == 39) {
            xPos += 25
            if (xPos >= 400) {
                xPos = 400
            }
        }
        if (e.keyCode == 37) {
            xPos -= 25
            if (xPos <= 50) {
                xPos = 50
            }
        }
        if (e.keyCode == 38) {
            yPos -= 25
            if (yPos <= 50) {
                yPos = 50
            }
        }
        if (e.keyCode == 40) {
            yPos += 25
            if (yPos >= 400) {
                yPos = 400
            }
        }

    }

    const move2 = e => {
        if (e.keyCode == 68) {
            xPos2 += 25
            if (xPos2 >= 400) {
                xPos2 = 400
            }
        }
        if (e.keyCode == 81) {
            xPos2 -= 25
            if (xPos2 <= 50) {
                xPos2 = 50
            }
        }
        if (e.keyCode == 90) {
            yPos2 -= 25
            if (yPos2 <= 50) {
                yPos2 = 50
            }
        }
        if (e.keyCode == 83) {
            yPos2 += 25
            if (yPos2 >= 400) {
                yPos2 = 400
            }
        }
    }

    const collision = e => {
        if (xPos < xPos2 + 50 &&
            xPos + 50 > xPos2 &&
            yPos < yPos2 + 50 &&
            50 + yPos > yPos2) {
            if (yPos == yPos2) {
                if (xPos > xPos2) {
                    xPos += 125
                    xPos2 -= 125
                } else {
                    xPos -= 125
                    xPos2 += 125
                }
            } else if (xPos == xPos2) {
                if (yPos > yPos2) {
                    yPos += 125
                    yPos2 -= 125
                } else {
                    yPos -= 125
                    yPos2 += 125
                }
            }
        }
    }

    const loseCondition = e => {
        if (xPos <= 25 || xPos >= 425 || yPos <= 25 || yPos >= 425) {
            lives = lives - 1
            xPos = 50
            yPos = 50
            xPos2 = 400
            yPos2 = 400
            table2.push('I')
            if (lives <= 0) {
                ctx.font = '48px Georgia'
                ctx.fillText('BLUE WIN!', 125, 250)
                document.removeEventListener('keydown', update)

            }
        } else if (xPos2 <= 25 || xPos2 >= 425 || yPos2 <= 25 || yPos2 >= 425) {
            lives2 = lives2 - 1
            xPos = 50
            yPos = 50
            xPos2 = 400
            yPos2 = 400
            table.push('I')
            if (lives2 <= 0) {
                ctx.font = '48px Georgia'
                ctx.fillText('RED WIN!', 125, 250)
                document.removeEventListener('keydown', update)
            }
        }
    }

    const update = (e) => {
        move(e)
        move2(e)
        collision(e)
        canvas.width = canvas.width
        ctx.fillStyle = 'red'
        ctx.fillRect(xPos, yPos, 50, 50)
        ctx.fillStyle = 'blue'
        ctx.fillRect(xPos2, yPos2, 50, 50)
        loseCondition(e)
    }
    document.addEventListener('keydown', update)

}

const imageSuperman = () => {

    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
        .then(res => res.json())
        .then(rejson => {

            const get = document.getElementById('blue1')
            const imgSuperman = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/644-superman.jpg"
            get.innerHTML = `<img src"${imgSuperman}"/>`
        })
}
imageSuperman()

const imageNaruto = () => {

    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
        .then(res => res.json())
        .then(rejson => {
            const get = document.getElementById('red1')
            const imgNaruto = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/485-naruto-uzumaki.jpg"
            get.innerHTML = `<img src="${imgNaruto}"/>`
        })
}
imageNaruto()
