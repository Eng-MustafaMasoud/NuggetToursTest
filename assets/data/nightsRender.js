
const checkInDateInput = document.getElementById("checkInDate");
const checkOutDateInput = document.getElementById("checkOutDate");
const nightsSelect = document.getElementById("nights");

function calculateNights(checkInDate, checkOutDate) {
	const differenceMs = checkOutDate - checkInDate;
	const nightsDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
	return nightsDifference;
}

function populateNightsOptions(checkInDate, checkOutDate) {
	const nightsDifference = calculateNights(checkInDate, checkOutDate);

	nightsSelect.innerHTML = "";

	for (let i = 1; i <= nightsDifference; i++) {
		const option = document.createElement("option");
		option.value = i;
		option.textContent = i;
		nightsSelect.appendChild(option);
	}

	// Set selected nights based on difference
	nightsSelect.value = nightsDifference;
}

// Event listener for check-in date change
checkInDateInput.addEventListener("input", function () {
	const checkInDate = new Date(checkInDateInput.value);
	const checkOutDate = new Date(checkOutDateInput.value);

	if (checkInDate > checkOutDate) {
		checkOutDateInput.value = checkInDateInput.value;
	}

	populateNightsOptions(checkInDate, checkOutDate);
});

checkOutDateInput.addEventListener("input", function () {
	const checkInDate = new Date(checkInDateInput.value);
	const checkOutDate = new Date(checkOutDateInput.value);

	// Ensure check-out date is after check-in date
	if (checkOutDate < checkInDate) {
		checkOutDateInput.value = checkInDateInput.value;
	}

	populateNightsOptions(checkInDate, checkOutDate);
});

nightsSelect.addEventListener("change", function () {
	const selectedNights = parseInt(nightsSelect.value);
	const checkInDate = new Date(checkInDateInput.value);
	const checkOutDate = new Date(
		checkInDate.getTime() + selectedNights * 24 * 60 * 60 * 1000,
	);

	const year = checkOutDate.getFullYear();
	const month = String(checkOutDate.getMonth() + 1).padStart(2, "0");
	const day = String(checkOutDate.getDate()).padStart(2, "0");
	checkOutDateInput.value = `${year}-${month}-${day}`;
});

populateNightsOptions(new Date(), new Date());
