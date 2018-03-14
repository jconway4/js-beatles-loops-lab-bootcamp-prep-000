var theBeatlesPlay = function(musicians, instruments) {
  var finalArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    finalArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return finalArray;
};

var johnLennonFacts = function(facts) {
  var finalArray = [];
  let countdown = 0;
  
  while (countdown < facts.length) {
    finalArray.push(facts[countdown] + '!!!');
    countdown++;
  }
  
  return finalArray;
};

var iLoveTheBeatles = function(number) {
  var finalArray = [];
  
  function maybeTrue() {
    return Math.random() >= 0.5
  }
   
  do {
    finalArray.push('I love the beatles!');
  } while (maybeTrue());

  return finalArray
};