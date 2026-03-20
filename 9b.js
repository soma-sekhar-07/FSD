<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Number Checker</title>
</head>
<body>
  <h2>Number Checker</h2>
  <label>Enter a number: <input type="number" id="num" /></label><br><br>
  <button onclick="calculateFactorial()">Factorial</button>
  <button onclick="generateFibonacci()">Fibonacci</button>
  <button onclick="checkPrime()">Prime</button>
  <button onclick="checkPalindrome()">Palindrome</button>
  <p id="output"></p>

  <script>
    function calculateFactorial() {
      const num = parseInt(document.getElementById("num").value, 10);
      let fact = 1;
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
      document.getElementById("output").innerText = `Factorial of ${num} is ${fact}`;
    }

    function generateFibonacci() {
      const num = parseInt(document.getElementById("num").value, 10);
      let series = "0, 1";
      let a = 0, b = 1, next;
      while (b <= num) {
        next = a + b;
        if (next > num) break;
        series += `, ${next}`;
        a = b;
        b = next;
      }
      document.getElementById("output").innerText = `Fibonacci series up to ${num}: ${series}`;
    }

    function checkPrime() {
      const num = parseInt(document.getElementById("num").value, 10);
      let primes = [];
      for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) primes.push(i);
      }
      document.getElementById("output").innerText = `Primes up to ${num}: ${primes.join(', ')}`;
    }

    function checkPalindrome() {
      const num = document.getElementById("num").value;
      const isPalindrome = num === num.split('').reverse().join('');
      document.getElementById("output").innerText = isPalindrome ? `${num} is a palindrome` : `${num} is NOT a palindrome`;
    }
  </script>
</body>
</html>
