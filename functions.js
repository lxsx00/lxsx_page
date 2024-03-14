// Function to toggle light/dark mode
function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    // Save the mode preference to local storage
    var mode = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", mode);
    updateModeButtonText(mode);
}

// Function to update the button text based on current mode and language
function updateModeButtonText(mode) {
    var modeBtn = document.getElementById("modeBtn");
    if (document.documentElement.lang === "cs") {
        if (mode === "dark") {
            modeBtn.textContent = "Tmavý Mód"; // Czech: Tmavý Mód
        } else {
            modeBtn.textContent = "Světlý Mód"; // Czech: Světlý Mód
        }
    } else {
        if (mode === "dark") {
            modeBtn.textContent = "Dark Mode"; // English: Dark Mode
        } else {
            modeBtn.textContent = "Light Mode"; // English: Light Mode
        }
    }
}

// Function to toggle language to English
function switchToEnglish() {
    document.documentElement.lang = "en";
    updateContent();
}

// Function to toggle language to Czech
function switchToCzech() {
    document.documentElement.lang = "cs";
    updateContent();
}

// Function to update content based on selected language
function updateContent() {
    // Update all elements with text content
    document.querySelectorAll("[data-en]").forEach(element => {
        if (document.documentElement.lang === "en") {
            element.textContent = element.getAttribute("data-en");
        } else {
            element.textContent = element.getAttribute("data-cs");
        }
    });

    // Update buttons
    var languageButtons = document.querySelectorAll(".btn-lang");
    languageButtons.forEach(button => {
        button.classList.remove("active");
        if ((document.documentElement.lang === "en" && button.classList.contains("btn-en")) ||
            (document.documentElement.lang === "cs" && button.classList.contains("btn-cz"))) {
            button.classList.add("active");
        }
    });

    // Update mode button text
    var savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        updateModeButtonText("dark");
    } else {
        updateModeButtonText("light");
    }
}

// Function to display a contact alert
function displayContactAlert() {
    alert("Thank you for your interest! You will be contacted soon.");
}

// Check local storage for saved mode preference
var savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
}

// Initial update on page load
updateContent();

