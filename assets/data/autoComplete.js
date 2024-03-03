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
//Execute function on keyup
input.addEventListener("keyup", (e) => {
	//loop through above array
	//Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
	removeElements();
	for (let i of places) {
		//convert input to lowercase and compare with each string
		if (
			i.toLowerCase().startsWith(input.value.toLowerCase()) &&
			input.value != ""
		) {
			//create li element
			let listItem = document.createElement("li");
			//One common class name
			listItem.classList.add("list-items");
			listItem.style.cursor = "pointer";
			listItem.style.textTransform = "capitalize";
			listItem.setAttribute("onclick", "displayNames('" + i + "')");
			//Display matched part in bold
			let word = "<b>" + i.substring(0, input.value.length) + "</b>";
			word += i.substring(input.value.length);
			//display the value in array
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
	//clear all the item
	let items = document.querySelectorAll(".list-items");
	items.forEach((item) => {
		item.remove();
	});
}
