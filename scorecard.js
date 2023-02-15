function hideAllEnds() {
    for (let end = 1; end <= 31; end++) {
        $("#end" + end).hide()
    }
}

function getEnd() {
    return +$("#end").val()
}

function nextEnd() {
    let end = getEnd()
    $("#end" + end).show()
    $("#end").val(end + 1)
}

function voidEnd() {
    nextEnd()
}

function home1() {
    let score = +$("#home").val()
    $("#home").val(score + 1)
    $("#home" + getEnd()).val(1)
    nextEnd()
}
function home2() {
    let score = +$("#home").val()
    $("#home").val(score + 2)
    $("#home" + getEnd()).val(2)
    nextEnd()
}
function home3() {
    let score = +$("#home").val()
    $("#home").val(score + 3)
    $("#home" + getEnd()).val(3)
    nextEnd()
}
function home4() {
    let score = +$("#home").val()
    $("#home").val(score + 4)
    $("#home" + getEnd()).val(4)
    nextEnd()
}

function away1() {
    let score = +$("#away").val()
    $("#away").val(score + 1)
    $("#away" + getEnd()).val(1)
    nextEnd()
}
function away2() {
    let score = +$("#away").val()
    $("#away").val(score + 2)
    $("#away" + getEnd()).val(2)
    nextEnd()
}
function away3() {
    let score = +$("#away").val()
    $("#away").val(score + 3)
    $("#away" + getEnd()).val(3)
    nextEnd()
}
function away4() {
    let score = +$("#away").val()
    $("#away").val(score + 4)
    $("#away" + getEnd()).val(4)
    nextEnd()
}

$(function () {
    hideAllEnds()
})