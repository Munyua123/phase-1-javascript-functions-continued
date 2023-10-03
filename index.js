// code your solution here


function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`
}


function mondayWork(workings = "go to the office") {
    return `This Monday, I will ${workings}.`
}

function wrapAdjective(symbol = '*') {
    return function(adjective = "a hard worker") {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
}