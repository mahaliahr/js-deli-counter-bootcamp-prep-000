function takeANumber(currentLine, name) {
  currentLine.unshift(name)
  return 'Welcome, ' + name + '. You are number '+ currentLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine && katzDeliLine.length) {
    var firstPerson = katzDeliLine.shift()
    return 'Currently serving ' + firstPerson + '.'
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(currentLine) {
  return 'The line is currently: 1.' + currentLine[0]
}
