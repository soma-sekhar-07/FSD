<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bank Denomination Calculator</title>
</head>
<body>
  <h2>Bank Denomination Calculator</h2>
  <label>Enter amount (Rs.): <input type="number" id="amount" /></label><br><br>
  <button onclick="calculateDenomination()">Calculate</button>
  <p id="output"></p>

  <script>
    function calculateDenomination() {
      const amount = parseInt(document.getElementById("amount").value, 10);
      let output = "";
      const denominations = [100, 50, 20, 10, 5, 2, 1];
      let remaining = amount;

      for (let denom of denominations) {
        const count = Math.floor(remaining / denom);
        if (count > 0) {
          output += `${count}-${denom}'s, `;
          remaining %= denom;
        }
      }

      // Remove trailing comma and space
      output = output.slice(0, -2);
      document.getElementById("output").innerText = output;
    }
  </script>
</body>
</html>
