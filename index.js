const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

var totalBatteries = batteryBatches.reduce(function(a, b){
  return a + b
},0);

// var wordCountMap = function(){
//   var newArray = []
//   var lineCount = ""
//   var arrayCount = []
//   monologueLines.forEach(function(line){
//     lineCount = (line.split(" "))
//     newArray.push(lineCount.length)
//   })
//   // return newArray
//   // arrayCount = 
//   newArray.sort().reduce(function(a, b){
//     if (a == b){
//       arrayCount.push(a)
//     } else {
//       arrayCount.push(b)
//     }
//   })
//   return arrayCount
// }


// var wordCountMap = new Object();
var wordCountMap = new Object();
var newArray = []
var lineCount = ""
  monologueLines.forEach(function(line){
    lineCount = (line.split(" "))
    newArray.push(lineCount.length)
  })
for(var i = 0; i < newArray.length; i++) {
 if(wordCountMap[newArray[i]] != null) {
    wordCountMap[newArray[i]] += 1;
} else {
    wordCountMap[newArray[i]] = 1;
    }
}




// var wordCountMap = function(){
//   monologueLines.map(function(line){

//   })
// }

// var wordCountMap = function(){
//   var newArray = []
//   monologueLines.forEach(function(line){
//     line.split(" ").reduce(function(a, b){
//       return a + b
//     }, 0)
//     newArray.push(line)
//   })
//   return newArray
// }






