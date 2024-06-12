const checkbox = document.getElementById("checkbox");
const themePrefKey = "userThemePreference";

// Function to set the theme based on user preference
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

// Function to toggle theme
function toggleTheme() {
  // Check the current theme by reading the data-theme attribute
  const currentTheme = document.documentElement.getAttribute("data-theme");

  // Toggle the theme based on the current theme
  if (currentTheme === "light") {
    setTheme("dark");
    // Store the theme preference in localStorage
    localStorage.setItem(themePrefKey, "dark");
    // Move the ball to the right
    document.querySelector(".checkbox-label .ball").style.transform =
      "translateX(24px)";
  } else {
    setTheme("light");
    // Store the theme preference in localStorage
    localStorage.setItem(themePrefKey, "light");
    // Move the ball to the left
    document.querySelector(".checkbox-label .ball").style.transform =
      "translateX(0)";
  }
}

// Function to set the initial position of the ball based on the stored theme preference
function setInitialBallPosition() {
  const storedTheme = localStorage.getItem(themePrefKey);
  if (storedTheme === "dark") {
    document.querySelector(".checkbox-label .ball").style.transform =
      "translateX(24px)";
  }
}

// Check if the user has a stored theme preference
const storedTheme = localStorage.getItem(themePrefKey);
if (storedTheme) {
  // Apply the stored theme preference
  setTheme(storedTheme);
  // Set the initial position of the ball based on the stored theme preference
  setInitialBallPosition();
}

// Add event listener to the checkbox
checkbox.addEventListener("change", toggleTheme);
