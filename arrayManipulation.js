function processArray(arr) 
{
  return arr.map(num => (num % 2 === 0) ? num * num : num * 3);
}


const numbers = [5, 10, 15, 20, 25, 30];
const result = processArray(numbers);
console.log(result); 


function formatArrayStrings(strings, numbers) {
  return strings.map((str, i) => (numbers[i] % 2 === 0) ? str.toUpperCase() : str.toLowerCase());
}


const strings = ['red', 'yellow', 'green', 'blue', 'orange'];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(processedNumbers); 
console.log(formattedStrings); 
