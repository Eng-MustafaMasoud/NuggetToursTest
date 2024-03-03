// Sample array of countries with their flags
const countries = [
	{
		name: "Egypt",
		flagUrl: "https://flagicons.lipis.dev/flags/4x3/eg.svg",
	},
	{
		name: "Saudi Arabia",
		flagUrl: "https://flagicons.lipis.dev/flags/4x3/sa.svg",
	},

	// Add more countries as needed
];

const countryInput = document.getElementById("countryInput");
const selectedFlag = document.getElementById("selectedFlag");
const countryContainer = document.getElementById("countryContainer");

// // Function to update input value with selected country and flag
// function updateInputValue(country) {
// 	countryInput.value = country.name;
// 	selectedFlag.src = country.flagUrl;
// 	selectedFlag.style.display = "inline-block";
// 	countryContainer.innerHTML = ""; // Clear the container after selecting
// }

// // Function to create and append a country option with flag
// function appendCountryOption(country) {
// 	const countryOption = document.createElement("div");
// 	countryOption.className = "countryOption";

// 	const countryFlag = document.createElement("img");
// 	countryFlag.className = "countryFlag";
// 	countryFlag.src = country.flagUrl;

// 	const countryName = document.createElement("span");
// 	countryName.textContent = country.name;

// 	countryOption.appendChild(countryFlag);
// 	countryOption.appendChild(countryName);

// 	countryOption.addEventListener("click", function () {
// 		updateInputValue(country); // Update input value when country is selected
// 	});

// 	countryContainer.appendChild(countryOption);
// }

// // Populate dropdown with countries
// countries.forEach(appendCountryOption);

// Function to update input value with selected country and flag
function updateInputValue(country) {
	countryInput.value = country.name;
	selectedFlag.src = country.flagUrl;
	selectedFlag.style.display = "inline-block";
	countryContainer.innerHTML = ""; // Clear the container after selecting
}

// Function to create and append a country option with flag
function appendCountryOption(country) {
	const countryOption = document.createElement("div");
	countryOption.className = "countryOption";

	const countryFlag = document.createElement("img");
	countryFlag.className = "countryFlag";
	countryFlag.src = country.flagUrl;

	const countryName = document.createElement("span");
	countryName.textContent = country.name;

	countryOption.appendChild(countryFlag);
	countryOption.appendChild(countryName);

	countryOption.addEventListener("click", function () {
		updateInputValue(country); // Update input value when country is selected
	});

	countryContainer.appendChild(countryOption);
}

// Event listener for input changes
countryInput.addEventListener("input", function () {
	const inputValue = countryInput.value.toLowerCase();

	// Clear previous options
	countryContainer.innerHTML = "";

	// Show dropdown only when there's input
	if (inputValue) {
		// Filter countries based on input value
		const filteredCountries = countries.filter((country) =>
			country.name.toLowerCase().includes(inputValue),
		);

		// Append new options based on filtered countries
		filteredCountries.forEach(appendCountryOption);
	} else {
		// Hide the dropdown when input is empty
		selectedFlag.style.display = "none";
	}
});

// Event listener for clicking outside the autocomplete dropdown
// document.addEventListener("click", function (event) {
// 	if (!event.target.matches(".autocomplete *")) {
// 		selectedFlag.style.display = "none";
// 		countryContainer.innerHTML = "";
// 	}
// });
