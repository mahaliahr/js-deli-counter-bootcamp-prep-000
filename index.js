function takeANumber(currentLine, name) {
  currentLine.push(name)
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
  var x = []
    for(var counter = 1; counter < currentLine.length; counter++ ) {
      x.push('The line is currently:'+ counter + '.' + currentLine[counter-1])
    }
  if (currentLine && currentLine.length) {
  return x 
} else {
  return 'The line is currently empty.'
}

}
}


  return x