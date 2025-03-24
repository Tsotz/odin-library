const library = [];

const Book = function (title, author, page) {
    
    this.read = "unread";
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

let book1 = new Book ("Tsotz's life", "Tsotz", "548");
let book2 = new Book ("Yggy's life", "Yggrall", "465");
let book3 = new Book ("Morthal's life", "Morthal", "498");

addBookToLibrary(book1, book2, book3);


const displayLibrary = function () {

    const libraryContainer = document.querySelector("#container");
    libraryContainer.innerHTML = "";
    

    library.forEach (book => {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const bookDelete = document.createElement("button");
        bookDelete.classList.add("book-delete");
        bookDelete.textContent = "Delete Book";

        const bookRead = document.createElement("button");
        bookRead.classList.add("book-read");
        bookRead.textContent = "Unread";


        bookDelete.addEventListener("click", () => {

            const bookID = book.id;
            deleteBook(bookID);
            displayLibrary();

        });

        bookRead.addEventListener("click", () => {

            
            if (book.read === "unread") { book.read = "read"; bookRead.textContent = "Read"}
            else if (book.read === "read") { book.read = "unread"; bookRead.textContent = "Unread"};

        });


        bookCard.innerHTML = 
        `<p>Book title: ${book.title}, Author: ${book.author}, Page Count: ${book.page}, Book ID: ${book.id}</p>`

        bookCard.appendChild(bookRead);
        bookCard.appendChild(bookDelete);
        libraryContainer.appendChild(bookCard);
        
    });

    

}



const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", (event) => {

    event.preventDefault();
    const bookTitle = document.querySelector("#book_title").value;
    const bookAuthor = document.querySelector("#author_name").value;
    const bookPage = document.querySelector("#page_count").value;


    const newBook = new Book (bookTitle, bookAuthor, bookPage);
    addBookToLibrary(newBook);
    
    displayLibrary();
});


const deleteBook = function (id) {

    const index = library.findIndex(book => book.id ===id);

    if (index !== -1) {library.splice (index, 1)};

}




displayLibrary();
