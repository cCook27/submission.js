const findSum = function(array) {
  let collector = 0
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    collector = collector + element;
  }
  return collector;
};


const findFrequency = function(array){
  
  let findAmounts = array.reduce(function(accumulator, letter){
    accumulator[letter] += 1
    return accumulator;
  }, {a: 0, b: 0, c: 0, d: 0}
  );
  values = Object.values(findAmounts);
  keys = Object.keys(findAmounts);
  indexMax = values.indexOf(Math.max(...values));
  indexMin = values.indexOf(Math.min(...values));

  return result = {most: keys[indexMax], least: keys[indexMin]};
};



const isPalindrome = function(str) {
  str = str.toLowerCase()
  backwardsArray = []
  for(let i = str.length; i >= 0; i--){
    backwardsArray.push(str[i]);
  }
  return Boolean(backwardsArray.join('') === str);
};



const largestPair = function(array) {
  products = [];
  for(let i = 0; i < array.length -1; i++){
    product = array[i] * array[i +1];
    products.push(product);
  };
  return Math.max(...products);
};



const removeParenth = function(str) {
  str = str.replace(/\((\w{1,}|.{1,})?[\)]/gi, "");
  return str;
};



const scoreScrabble = function(str) {

  pointsAwarded = 0

  const organizeInputs = function(onePoint, twoPoint, threePoint, fourPoint, fivePoint, eightPoint, tenPoint){
    pointsArray = [];
    mainPointArr = [onePoint, twoPoint, threePoint, fourPoint, fivePoint, eightPoint, tenPoint]
    for (let i = 0; i < mainPointArr.length; i++) {
      const element = pointsArray.push(String(mainPointArr[i]).replace(/\,/gi, '').toLowerCase().split(' '));
    };
    return pointsArray;
  };

  str = str.toLowerCase().split('');
  
  for (let i = 0; i < str.length; i++) {
    
    const element = str[i];
    
    for (let j = 0; j < organizeInputs('A, e, i, o, u, l, n, r, s, t', 'd, g', 'b, c, m, p', 'f, h, v, w, y', 'k', 'j, x', 'q, z').length; j++) {
      
      const pointChecker = organizeInputs('a, e, i, o, u, l, n, r, s, t', 'd, g', 'b, c, m, p', 'f, h, v, w, y', 'k', 'j, x', 'q, z')[j];
        for (let k = 0; k < pointChecker.length; k++) {
          const letterChecker = pointChecker[k];
          if(element === letterChecker && j === 0){
            pointsAwarded = pointsAwarded + 1
          } else if(element === letterChecker && j === 1){
              pointsAwarded = pointsAwarded + 2
          } else if(element === letterChecker && j === 2){
              pointsAwarded = pointsAwarded + 3
          } else if(element === letterChecker && j === 3){
              pointsAwarded = pointsAwarded + 4 
          } else if(element === letterChecker && j === 4){
              pointsAwarded = pointsAwarded + 5
          } else if(element === letterChecker && j === 5){
              pointsAwarded = pointsAwarded + 8
          } else if(element === letterChecker && j === 6){
              pointsAwarded = pointsAwarded + 10
          };
        };
    };
  };
  return pointsAwarded;
};
