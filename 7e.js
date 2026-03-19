<html>
<head>
<title>Program Using String Object Properties and Methods</title>
</head>

<body>

<script>
// Creating a string
var message = "Hello JavaScript";

// String Object Property
document.write("Length of String: " + message.length + "<br>");

// String Object Methods
// toUpperCase() method
document.write("Uppercase: " + message.toUpperCase() + "<br>");

// toLowerCase() method
document.write("Lowercase: " + message.toLowerCase() + "<br>");

// charAt() method
document.write("Character at index 6: " + message.charAt(6) + "<br>");

// indexOf() method
document.write("Index of 'JavaScript': " + message.indexOf("JavaScript") + "<br>");

// slice() method
document.write("Slice (0,5): " + message.slice(0,5) + "<br>");
</script>

</body>
</html>
