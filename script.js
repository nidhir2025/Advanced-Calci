// Function to handle button clicks
function pressKey(key) {
    document.getElementById("screen").value += key;
}

// Function to clear screen
function clearScreen() {
    document.getElementById("screen").value = "";
}

// Function to evaluate expression
function calculate() {
    try {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    } catch {
        document.getElementById("screen").value = "Error";
    }
}

// Voice Recognition Feature
document.getElementById("voiceInput").addEventListener("click", function () {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    
    recognition.onresult = function (event) {
        let voiceInput = event.results[0][0].transcript;
        document.getElementById("screen").value = voiceInput;

        // Convert voice commands into math symbols
        let processedInput = voiceInput.toLowerCase()
            .replace("plus", "+")
            .replace("minus", "-")
            .replace("multiply", "*")
            .replace("divide", "/");

        try {
            document.getElementById("screen").value = eval(processedInput);
        } catch (error) {
            document.getElementById("screen").value = "Error";
        }
    };

    recognition.start();
});
