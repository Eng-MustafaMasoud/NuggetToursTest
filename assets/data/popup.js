const openPopupButton = document.getElementById("openPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");

// Function to open the popup
function openPopup() {
	popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
	popup.style.display = "none";
}

// Event listener for opening the popup
openPopupButton.addEventListener("click", openPopup);

// Event listener for closing the popup
closePopupButton.addEventListener("click", closePopup);
