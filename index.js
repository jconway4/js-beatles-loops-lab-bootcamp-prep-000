var theBeatlesPlay = function(musicians, instruments) {
  var finalArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    finalArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return finalArray;
};