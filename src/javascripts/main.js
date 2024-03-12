//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// getMax
function getMax(x, y, z) {
  let max = x
  if (y > max) {
    max = y
  } else if (z > max) {
    max = z
  }
  return max
}

//console.log(getMax(-2, -2, 2))

// getMin
function getMin(x, y, z) {
  let min = x
  if (y < min) {
    min = y
  } else if (z < min) {
    min = z
  }
  return min
}

//console.log(getMin(-5, -25, -20))

// getMean
function getMean(x, y, z) {
  let mean = (x + y + z) / 3
  return mean
}

//console.log(getMean(1, 2, 3))

// compare
function compare(word1, word2) {
  if (word1 == word2) {
    return 0
  } else if (word1 > word2) {
    return 1
  } else {
    return -1
  }
}

//console.log(compare("hello", "hello"))

// getCharPerLine
function getCharPerLine(str, indent) {
  for (let i = 0; i < str.length; i++) {
    if (!indent) {
      console.log(str[i])
    } else {
      let line = ""
      for (let indents = i; indents >= 0; indents--) {
        line += " "
      }
      line += str[i]
      console.log(line)
    }
  }
}

//getCharPerLine("String", true)

// printArrow
function printArrow(size) {
  for (let i = 0; i <= size; i++) {
    let line = ""
    for (let amount = i; amount >= 0; amount--) {
      line += "*"
    }
    console.log(line)
  }
  for (let i = size - 1; i >= 0; i--) {
    let line = ""
    for (let amount = i; amount >= 0; amount--) {
      line += "*"
    }
    console.log(line)
  }
}

//printArrow(7)
