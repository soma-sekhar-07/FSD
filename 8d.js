<!DOCTYPE html>
<html>
<head>
  <title>User Input and Object Loops</title>
</head>
<body>
  <h2>Enter Person Details</h2>

  <form id="personForm">
    Name: <input type="text" id="name" required><br><br>
    Age: <input type="number" id="age" required><br><br>
    City: <input type="text" id="city" required><br><br>
    Profession: <input type="text" id="profession" required><br><br>
    <button type="submit">Submit</button>
  </form>

  <h3>Output:</h3>
  <div id="output"></div>

  <script>
    const form = document.getElementById("personForm");
    const outputDiv = document.getElementById("output");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent form submission

      // Create object from user input
      const person = {
        name: document.getElementById("name").value,
        age: parseInt(document.getElementById("age").value),
        city: document.getElementById("city").value,
        profession: document.getElementById("profession").value
      };

      outputDiv.innerHTML = ""; // clear previous output

      // 1. Using for-in loop
      outputDiv.innerHTML += "<h4>Using for-in loop:</h4>";
      for (let key in person) {
        if (typeof person[key] === "string") {
          outputDiv.innerHTML += `${key}: ${person[key]}<br>`;
        } else {
          outputDiv.innerHTML += `${key} is a number: ${person[key]}<br>`;
        }
      }

      // 2. Using forEach loop
      outputDiv.innerHTML += "<h4>Using forEach loop:</h4>";
      Object.keys(person).forEach(key => {
        if (key === "age" && person[key] > 18) {
          outputDiv.innerHTML += `Age is ${person[key]}, adult ✅<br>`;
        } else {
          outputDiv.innerHTML += `${key}: ${person[key]}<br>`;
        }
      });

      // 3. Using for-of loop
      outputDiv.innerHTML += "<h4>Using for-of loop:</h4>";
      for (let [key, value] of Object.entries(person)) {
        if (key === "profession") {
          outputDiv.innerHTML += `Profession: ${value} 👩‍💻<br>`;
        } else {
          outputDiv.innerHTML += `${key}: ${value}<br>`;
        }
      }

      // Reset form after submission
      form.reset();
    });
  </script>
</body>
</html>
