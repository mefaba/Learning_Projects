let myLibrary = [];

function Book(booktitle, author, genre, readstatus,id) {
	this.booktitle = booktitle;
	this.author = author;
	this.genre = genre;
	this.readstatus = readstatus;
	this.id = id || undefined
}

Book.prototype.addBookToLibrary = function () {
	myLibrary.push(this);
};


function handleSubmit(e) {
	e.preventDefault();
	let booktitle = e.target.title.value;
	let author = e.target.author.value;
	let genre = e.target.genre.value;
	let readstatus = e.target.status.value;

	new Book(booktitle, author, genre, readstatus).addBookToLibrary();
	
	//console.log("kitapismi"+myLibrary[0].booktitle);
	render()
	/* add_book_toDOM(booktitle, author, genre, readstatus); */
}

function removeBook(id){
	console.log("clicked")
	myLibrary = myLibrary.filter(book=>{
		return book.id !== id //if book.id is not equal to silinecek id, keep it in myLibrary
	})
	//console.log(myLibrary)
	render()
}

//on load, get books from library and render
function render(){
	//clear library
	document.querySelector("#library").innerHTML = ""

	//add books
	myLibrary.map((book, id)=>{
		const {booktitle, author, genre, readstatus} = book
		book.id = id
		add_book_toDOM(booktitle, author, genre, readstatus,id);
	})
}


//add book to DOM
function add_book_toDOM(booktitle, author, genre, readstatus,id) {
	const bookdiv = document.createElement("li");
	bookdiv.innerHTML = `
		<div class="collapsible-header">
			<i class="material-icons">library_books</i>
			BookName:${booktitle}
			<span class="badge">details</span>
		</div>
		<div class="collapsible-body">
			<p>Author: ${author}</p>
			<p>Genre: ${genre}</p>
			<p>Status: ${readstatus}</p>
			<a class="waves-effect waves-light btn-small" onclick="removeBook(${id})">Delete</a>
		</div>
	`;

	document.querySelector("#library").appendChild(bookdiv);
}


M.AutoInit(); //materialize.css javascript initialization

console.log("Whole main.js executed");
