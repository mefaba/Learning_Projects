var button = document.getElementById("enter");
var input = document.getElementById("userinput");
let anapodcast = document.getElementById("anapodcast")
/* var bookContainer = document.querySelector(".bookContainer");
 */

function removeList (e){
	console.log(e.target)
	e.target.parentElement.remove();
}

function inputLength() {
	return input.value.length;
}

/* function createListElement() {
	var podcast = document.createElement("p");
	podcast.appendChild(document.createTextNode(input.value));
	bookContainer.appendChild(podcast);
	let delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.classList.add('delete')
	li.appendChild(delButton);
	delButton.addEventListener('click', removeList);
	input.value = "";
} */

function bookRow() {
	let div = document.createElement('div')
	anapodcast.appendChild(div)
	let podcast = document.createElement("p");
	podcast.appendChild(document.createTextNode(input.value))
	let delButton = document.createElement("button")
	delButton.appendChild(document.createTextNode("Delete"));

	div.appendChild(podcast);
	div.appendChild(delButton);

	div.classList.add('bookContainer');
	delButton.classList.add('containerButtons')


	delButton.addEventListener('click', removeList);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		bookRow();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		bookRow();
	}
}
function deleteItem () {
	li.remove();
	console.log("hahaha")

}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

/* deleteButton.addEventListener('click', yazdır(event) {
	console.log(event)
}
); */
