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
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  str = str.replace(/\((\w{1,}|.{1,})?[\)]/gi, "");
  return str;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
