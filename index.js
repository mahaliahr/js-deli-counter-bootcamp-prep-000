function takeANumber(currentLine, name) {
  var number = currentLine.length + 1
  return 'Welcome, ' + name + '. You are number '+ number + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine && katzDeliLine.length) {
    var firstPerson = katzDeliLine.shift()
    return 'Currently serving ' + firstPerson + '.'
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(currentLine,) {

}
