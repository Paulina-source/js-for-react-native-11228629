function processArray(arr) 
{
  return arr.map(num => (num % 2 === 0) ? num * num : num * 3);
}


const numbers = [5, 10, 15, 20, 25, 30];
const result = processArray(numbers);
console.log(result); 
