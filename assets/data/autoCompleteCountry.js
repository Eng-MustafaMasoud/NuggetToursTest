const countries = [
	{
		name: "Egypt",
		flagUrl: "https://flagicons.lipis.dev/flags/4x3/eg.svg",
	},
	{
		name: "Saudi Arabia",
		flagUrl: "https://flagicons.lipis.dev/flags/4x3/sa.svg",
	},

];

const countryInput = document.getElementById("countryInput");
const selectedFlag = document.getElementById("selectedFlag");
const countryContainer = document.getElementById("countryContainer");

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

	countryContainer.innerHTML = "";

	if (inputValue) {
		const filteredCountries = countries.filter((country) =>
			country.name.toLowerCase().includes(inputValue),
		);

		filteredCountries.forEach(appendCountryOption);
	} else {
		selectedFlag.style.display = "none";
	}
});

