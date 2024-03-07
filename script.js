book_libary = document.querySelector(".bookLibary");
testbook = {
    title : "Think And Grow Rich",
    writer : "Napoleon Hill",
    pages : "269",
    readStatus : "read"
}

const myLibrary= [testbook];
function Book(title, writer, pages, readStatus) {
    this.title = title;
    this.writer = writer;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

for (const books of myLibrary){
    const book_card = document.createElement("div")
    book_card.classList.add("card")

    const book_title = document.createElement("h2");
    book_title.innerHTML = books.title;

    const book_writer = document.createElement("p");
    book_writer.innerHTML = books.writer;

    const book_pages = document.createElement("p");
    book_pages.innerHTML = books.pages;

    const book_readStatus = document.createElement("p");
    book_readStatus.innerHTML = books.status;

    book_libary.appendChild(book_card)
    book_card.appendChild(book_title)
    book_card.appendChild(book_writer)
    book_card.appendChild(book_pages)
    book_card.appendChild(book_readStatus)
}
