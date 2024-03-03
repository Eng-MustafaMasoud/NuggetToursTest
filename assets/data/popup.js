const openPopupButton = document.getElementById("openPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");

function openPopup() {
	popup.style.display = "block";
}

function closePopup() {
	popup.style.display = "none";
}

openPopupButton.addEventListener("click", openPopup);

closePopupButton.addEventListener("click", closePopup);
