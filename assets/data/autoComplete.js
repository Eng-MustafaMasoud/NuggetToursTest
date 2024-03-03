const places = [
	"cairo",

	"giza",

	"hurgada",

	"aLexandria",

	"mekkah",

	"medina",

	"istanbul",

	"manama",

	"dubai",
	"cazblanca",
];

let input = document.getElementById("auto_complete");
input.addEventListener("keyup", (e) => {
	removeElements();
	for (let i of places) {
		if (
			i.toLowerCase().startsWith(input.value.toLowerCase()) &&
			input.value != ""
		) {
			let listItem = document.createElement("li");
			listItem.classList.add("list-items");
			listItem.style.cursor = "pointer";
			listItem.style.textTransform = "capitalize";
			listItem.setAttribute("onclick", "displayNames('" + i + "')");
			let word = "<b>" + i.substring(0, input.value.length) + "</b>";
			word += i.substring(input.value.length);
			listItem.innerHTML = word;
			document.querySelector(".list").appendChild(listItem);
		}
	}
});
function displayNames(value) {
	input.value = value;
	removeElements();
}
function removeElements() {
	let items = document.querySelectorAll(".list-items");
	items.forEach((item) => {
		item.remove();
	});
}
