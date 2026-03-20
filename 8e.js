<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Armstrong Number Checker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
            background-color: #f4f4f4;
            text-align: center;
        }
        input, button {
            padding: 10px;
            font-size: 16px;
            margin: 10px;
        }
        .result {
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Armstrong Number Checker</h1>
    <input type="number" id="numberInput" placeholder="Enter a number">
    <button onclick="checkArmstrong()">Check</button>
    <div class="result" id="result"></div>

    <script>
        function checkArmstrong() {
            const num = Number(document.getElementById('numberInput').value);
            const digits = num.toString().split('');
            const numDigits = digits.length;
            let sum = 0;

            for (let digit of digits) {
                sum += Math.pow(Number(digit), numDigits);
            }

            const resultDiv = document.getElementById('result');
            if (sum === num) {
                resultDiv.textContent = num + " is an Armstrong number.";
                resultDiv.style.color = "green";
            } else {
                resultDiv.textContent = num + " is NOT an Armstrong number.";
                resultDiv.style.color = "red";
            }
        }
    </script>
</body>
</html>
