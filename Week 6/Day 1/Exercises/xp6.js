(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    var message = "You will be a " + jobTitle + " in " 
    + geographicLocation + ", and married to " + partnerName + 
    " with " + numberOfChildren + " kids.";

    var outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.textContent = message;
    } else {
        console.error("Output element not found in the DOM.");
    }
})(3, "Ella", "Tel Aviv", " Developer");
