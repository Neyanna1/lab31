//z1
const arr = [1, 6, -1, 22, 13];

const max = Math.max.apply(null, arr);
const min = Math.min.apply(null, arr);

console.log('Максимум:', max);
console.log('Минимум:', min);
//z2
const str = "!тевирП";
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr);
//z3
const arr = [3, 5, 8, 13, 21, 42];

const sumOfSquareRoots = arr.reduce((sum, num) => {
  // Проверяем, является ли число четным
  if (num % 2 === 0) {
    
    return sum + Math.sqrt(num);
  }
  return sum;
}, 0);

console.log(sumOfSquareRoots);
//z4
function anagram(str1, str2) {
    
    const normalizedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    
    if (normalizedStr1.length !== normalizedStr2.length) {
      return false;
    }
  
    
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  console.log(anagram("Лунь", "нуль")); // true
  console.log(anagram("Лунь", "ноль")); // false
  //z5
  function palindrome(str) {
    
    const normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  
    
    return normalizedStr === normalizedStr.split('').reverse().join('');
  }
  
  console.log(palindrome("Не гни папин ген")); // true
  console.log(palindrome("123")); // false

  //z6
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  let count = 0;
  
  const intervalId = setInterval(() => {
    console.log(fibonacci(count));
    count++;
  }, 1000);
  
 
  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000); // Остановить через 10 секунд
  //z7 
  function intersect(arrA, arrB) {
    // Создаем множество из первого массива для быстрого поиска
    const setA = new Set(arrA);
  
    // Фильтруем второй массив, оставляя только те элементы, которые есть в первом массиве
    return arrB.filter(element => setA.has(element));
  }
  
  // Пример использования:
  const arrA = [1, 2, 3, 4, 5];
  const arrB = [4, 5, 6, 7, 8];
  console.log(intersect(arrA, arrB)); // Выведет: [4, 5]

  //z8 
  <!DOCTYPE html>
<html>
<head>
    <title>Increment/Decrement Counter</title>
</head>
<body>
    <button id="decrement">-</button>
    <span id="counter">0</span>
    <button id="increment">+</button>

    <script>
        let counter = document.getElementById('counter');
        let incrementButton = document.getElementById('increment');
        let decrementButton = document.getElementById('decrement');

        incrementButton.addEventListener('click', function() {
            counter.textContent = parseInt(counter.textContent) + 1;
        });

        decrementButton.addEventListener('click', function() {
            counter.textContent = parseInt(counter.textContent) - 1;
        });
    </script>
</body>
</html>

//z9 
for(let i = 1; i <= 3; i++) {
    (function(i) {
      setTimeout(() => console.log(i), 1000 * i);
    })(i);
  }