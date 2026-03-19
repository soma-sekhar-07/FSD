<!DOCTYPE html>
<html>
<head>
    <title>Find Larger Number</title>
</head>
<body>

<h2>Check Larger Number</h2>

<script>
    // Step 1: Take input from user
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    let num3 = parseInt(prompt("Enter third number:"));

    let result = "";

    // Step 2: Check largest or equal
    if (num1 === num2 && num2 === num3) {
        result = "EQUAL NUMBERS";
    } 
    else {
        let largest = num1;

        if (num2 > largest) {
            largest = num2;
        }
        if (num3 > largest) {
            largest = num3;
        }

        result = largest + " LARGER NUMBER";
    }

    // Step 3: Display result in alert dialog
    alert(result);

    // Step 4: Display result on webpage
    document.write("<h3>" + result + "</h3>");
</script>

</body>
</html>
