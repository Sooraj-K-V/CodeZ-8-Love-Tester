function findLengthOfInteger(number) {
    // Convert the number to a string and get its length
    var numberString = number.toString();
    var length = numberString.length;
    return length;
}

function calculatePercentage(numberToCalculate) {
    var numString = numberToCalculate.toString();
    var result = "";

    // Iterate through the numbers
    while (numString.length > 1) {
        // Get the first and last digits
        var firstDigit = parseInt(numString.charAt(0));
        var lastDigit = parseInt(numString.charAt(numString.length - 1));
        // Add first and last digits
        var sum = firstDigit + lastDigit;
        result += sum.toString();
        // Remove first and last digits
        numString = numString.substring(1, numString.length - 1);
    }
    // If the number length is odd, add the remaining digit
    if (numString.length === 1) {
        result += numString;
    }

    return parseInt(result);
}

function testIt() {
    var fname = document.getElementById("first-name").value.toLowerCase();
    var sname = document.getElementById("second-name").value.toLowerCase();
    console.log(fname);
    console.log(sname);

    var fullString = fname + "love" + sname;
    var numberToCalculate = "";
    var previouslyUsedLetters = "";
    console.log(fullString.length);

    for (var i = 0; i < fullString.length; i++) {
        var eachLetter = fullString.charAt(i);
        if (eachLetter === " ") continue;
        var numberOfEachLetter = 0;
        if (!previouslyUsedLetters.includes(eachLetter)) {
            previouslyUsedLetters += eachLetter;
            for (var j = 0; j < fullString.length; j++) {
                if (eachLetter == fullString.charAt(j)) {
                    numberOfEachLetter++;
                }
            }
            if (numberOfEachLetter > 1) {
                numberToCalculate += numberOfEachLetter.toString();
            }
        }
    }
    console.log("numberToCalculate  : " + numberToCalculate);
    var percentage = numberToCalculate
    console.log("<2 >2   " + percentage);

    while (findLengthOfInteger(percentage) > 2) {
        percentage = calculatePercentage(percentage);
    }
    console.log("Final percentage : " + percentage);
    document.getElementById("percentage").innerText = percentage + "%";
}