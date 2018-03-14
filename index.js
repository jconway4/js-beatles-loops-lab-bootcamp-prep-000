var theBeatlesPlay = function(musicians, instruments) {
  var musiciansArray = [...musicians];
  var instrumentsArray = [...instruments];
  
  for (let i = 0; i < musiciansArray.length; i++) {
    return `${musiciansArray[i]} plays ${instrumentsArray[i]}`
  }
  
};