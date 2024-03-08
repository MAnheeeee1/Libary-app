book_libary = document.querySelector(".bookLibary");

const button_form = document.querySelector("button");
const dialog = document.querySelector("dialog");
const close_button = document.querySelector("#close-dialog");
const submitButton = document.querySelector("#submit-form");
const form = document.querySelector("form");

submitButton.addEventListener("click", ()=>{
    book_writer = document.querySelector("#book-writer");
    book_title = document.querySelector("#book_title");
    book_pages = document.querySelector("#book_pages");
    book_status = document.querySelector("#read-status");
    let book = new Book(book_title.value, book_writer.value, book_pages.value, book_status.value, myLibrary.length);
    addBookToLibrary(book);
    updateLibary();
    const emptyLibaryText = document.querySelector("#emptylibary-text");
    emptyLibaryText.remove();
    form.submit();
})
button_form.addEventListener("click", () =>{
    dialog.showModal();
})
close_button.addEventListener("click", () =>{
    dialog.close();
})

const myLibrary= [];
function Book(title, writer, pages, readStatus, bookIndex) {
    this.title = title;
    this.writer = writer;
    this.pages = pages;
    this.readStatus = readStatus;
    this.bookIndex = bookIndex;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function updateLibary(){
    let addedBook = myLibrary[myLibrary.length -1];
    let book_card = document.createElement("div")
    book_card.classList.add("card");
    let bookIndex = addedBook.bookIndex
    book_card.classList.add(bookIndex);

    let book_title = document.createElement("h2");
    book_title.innerHTML = addedBook.title;

    let book_writer = document.createElement("p");
    book_writer.innerHTML = addedBook.writer;

    let book_pages = document.createElement("p");
    book_pages.innerHTML = addedBook.pages;

    let book_readStatus = document.createElement("p");
    book_readStatus.innerHTML = addedBook.status;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBook");
    deleteButton.innerHTML = "Delete Book";
    deleteButton.addEventListener("click", ()=>{
        book_card.remove();
    })
    book_libary.appendChild(book_card);
    book_card.appendChild(book_title);
    book_card.appendChild(book_writer);
    book_card.appendChild(book_pages);
    book_card.appendChild(book_readStatus);
    book_card.appendChild(deleteButton);
}





