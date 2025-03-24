const library = [];

const Book = function (title, author, page) {

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.page = page;

}

const addBookToLibrary = function (...bookNames) {

    bookNames.forEach(book => {

    library.push(book);
        
    });
    
    
}



const displayLibrary = function () {

    const libraryContainer = document.querySelector("#container");
    libraryContainer.innerHTML = "";
    

    library.forEach (book => {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");


        bookCard.innerHTML = 
        `<p>Book title: ${book.title}, Author: ${book.author}, Page Count: ${book.page}, Book ID: ${book.id}</p>`
        libraryContainer.appendChild(bookCard);
    });

    

}



const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", () => {

    const bookForm = document.createElement("div");
    bookForm.classList.add("book-form");
    bookForm.innerHTML = ``

});


let book1 = new Book ("Tsotz's life", "Tsotz", "548");
let book2 = new Book ("Yggy's life", "Yggrall", "465");
let book3 = new Book ("Morthal's life", "Morthal", "498");

addBookToLibrary(book1, book2, book3);
displayLibrary();

