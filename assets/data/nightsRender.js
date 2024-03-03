// const checkInDateInput = document.getElementById("checkInDate");
// const checkOutDateInput = document.getElementById("checkOutDate");
// const nightsInput = document.getElementById("nights");

// // Function to calculate the number of nights
// function calculateNights() {
// 	const checkInDate = new Date(checkInDateInput.value);
// 	const checkOutDate = new Date(checkOutDateInput.value);

// 	// Calculate the difference in milliseconds
// 	const differenceMs = checkOutDate - checkInDate;

// 	// Convert milliseconds to days and round to nearest whole number
// 	const nightsDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

// 	// Update the nights input value
// 	nightsInput.value = nightsDifference;
// }

// // Event listeners for date inputs
// checkInDateInput.addEventListener("change", calculateNights);
// checkOutDateInput.addEventListener("change", calculateNights);

// // Event listener for nights input
// nightsInput.addEventListener("input", function () {
// 	const nights = parseInt(nightsInput.value);
// 	const checkInDate = new Date(checkInDateInput.value);
// 	const checkOutDate = new Date(
// 		checkInDate.getTime() + nights * 24 * 60 * 60 * 1000,
// 	);

// 	// Update the check-out date input value
// 	const year = checkOutDate.getFullYear();
// 	const month = String(checkOutDate.getMonth() + 1).padStart(2, "0");
// 	const day = String(checkOutDate.getDate()).padStart(2, "0");
// 	checkOutDateInput.value = `${year}-${month}-${day}`;
// });

// const checkInDateInput = document.getElementById("checkInDate");
// const checkOutDateInput = document.getElementById("checkOutDate");
// const nightsSelect = document.getElementById("nights");

// // Update check-out date when check-in date changes
// checkInDateInput.addEventListener("change", function () {
// 	const checkOutDate = new Date(checkInDateInput.value);
// 	checkOutDate.setDate(checkOutDate.getDate() + parseInt(nightsSelect.value));
// 	checkOutDateInput.min = checkInDateInput.value;
// 	checkOutDateInput.value = checkOutDate.toISOString().split("T")[0];
// });

// // Update nights when check-out date changes
// checkOutDateInput.addEventListener("change", function () {
// 	const checkInDate = new Date(checkInDateInput.value);
// 	const checkOutDate = new Date(checkOutDateInput.value);
// 	const differenceMs = checkOutDate - checkInDate;
// 	const nights = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
// 	nightsSelect.value = nights;
// });

// // Update check-out date when nights select changes
// nightsSelect.addEventListener("change", function () {
// 	const checkInDate = new Date(checkInDateInput.value);
// 	const nights = parseInt(nightsSelect.value);
// 	const checkOutDate = new Date(
// 		checkInDate.getTime() + nights * 24 * 60 * 60 * 1000,
// 	);
// 	checkOutDateInput.min = checkInDateInput.value;
// 	checkOutDateInput.value = checkOutDate.toISOString().split("T")[0];
// });
const checkInDateInput = document.getElementById("checkInDate");
const checkOutDateInput = document.getElementById("checkOutDate");
const nightsSelect = document.getElementById("nights");

// Function to calculate the nights between two dates
function calculateNights(checkInDate, checkOutDate) {
	const differenceMs = checkOutDate - checkInDate;
	const nightsDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
	return nightsDifference;
}

// Function to populate the nights select input
function populateNightsOptions(checkInDate, checkOutDate) {
	const nightsDifference = calculateNights(checkInDate, checkOutDate);

	// Clear existing options
	nightsSelect.innerHTML = "";

	// Generate options dynamically
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

	// Ensure check-out date is after check-in date
	if (checkInDate > checkOutDate) {
		checkOutDateInput.value = checkInDateInput.value;
	}

	// Populate nights options
	populateNightsOptions(checkInDate, checkOutDate);
});

// Event listener for check-out date change
checkOutDateInput.addEventListener("input", function () {
	const checkInDate = new Date(checkInDateInput.value);
	const checkOutDate = new Date(checkOutDateInput.value);

	// Ensure check-out date is after check-in date
	if (checkOutDate < checkInDate) {
		checkOutDateInput.value = checkInDateInput.value;
	}

	// Populate nights options
	populateNightsOptions(checkInDate, checkOutDate);
});

// Event listener for nights select input change
nightsSelect.addEventListener("change", function () {
	const selectedNights = parseInt(nightsSelect.value);
	const checkInDate = new Date(checkInDateInput.value);
	const checkOutDate = new Date(
		checkInDate.getTime() + selectedNights * 24 * 60 * 60 * 1000,
	);

	// Update the check-out date input value
	const year = checkOutDate.getFullYear();
	const month = String(checkOutDate.getMonth() + 1).padStart(2, "0");
	const day = String(checkOutDate.getDate()).padStart(2, "0");
	checkOutDateInput.value = `${year}-${month}-${day}`;
});

// Initialize nights options on page load
populateNightsOptions(new Date(), new Date());
