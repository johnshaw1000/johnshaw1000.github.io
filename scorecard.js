function hideAllEnds() {
    for (let end = 1; end <= 31; end++) {
        $("#end" + end).hide()
    }
}

function getEnd() {
    return +$("#end").val()
}

function recordEnd() {
    $("#end" + getEnd()).show()
}

function nextEnd() {
    $("#end").val(getEnd() + 1)
}

function voidEnd() {
    nextEnd()
}

function checkEndGame() {
    let homeScore = +$("#home").val()
    let awayScore = +$("#away").val()

    recordEnd()

    if (homeScore >= 21) {
        disableButtons()
        $("#homeWin").show()
    } else if (awayScore >= 21) {
        disableButtons()
        $("#awayWin").show()
    } else {
        nextEnd()
    }
}

function disableButtons() {
    $("#buttons").hide()
}

function home1() {
    let score = +$("#home").val()
    $("#home").val(score + 1)
    $("#home" + getEnd()).val(1)
    checkEndGame()
}
function home2() {
    let score = +$("#home").val()
    $("#home").val(score + 2)
    $("#home" + getEnd()).val(2)
    checkEndGame()
}
function home3() {
    let score = +$("#home").val()
    $("#home").val(score + 3)
    $("#home" + getEnd()).val(3)
    checkEndGame()
}
function home4() {
    let score = +$("#home").val()
    $("#home").val(score + 4)
    $("#home" + getEnd()).val(4)
    checkEndGame()
}

function away1() {
    let score = +$("#away").val()
    $("#away").val(score + 1)
    $("#away" + getEnd()).val(1)
    checkEndGame()
}
function away2() {
    let score = +$("#away").val()
    $("#away").val(score + 2)
    $("#away" + getEnd()).val(2)
    checkEndGame()
}
function away3() {
    let score = +$("#away").val()
    $("#away").val(score + 3)
    $("#away" + getEnd()).val(3)
    checkEndGame()
}
function away4() {
    let score = +$("#away").val()
    $("#away").val(score + 4)
    $("#away" + getEnd()).val(4)
    checkEndGame()
}

$(function () {
    hideAllEnds()
    $("#homeWin").hide()
    $("#awayWin").hide()
})