// I borrowed this modal from W3Schools
let modal = document.getElementById("myModal");
let btn = document.getElementById("addButton");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit");
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
submit.onclick = function() {
    modal.style.display = "none";
    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let pagesInput = document.getElementById("pages");

    let bookTitleModal = titleInput.value;
    let bookAuthorModal = authorInput.value;
    let bookPagesModal = pagesInput.value;

    let newModalBook = new Book(bookTitleModal, bookAuthorModal, bookPagesModal);
    addBookToLibrary(newModalBook);
    addBookCard();
    changeReadStatus();
    removeCard();
  }



let myLibrary = [];

class Book {
    constructor(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);    
}

let lotr = new Book("LOTR", "Tolkkien", 444, "has been read");
addBookToLibrary(lotr)


const mainSection = document.getElementById("books");

function addBookCard() {
    let bookTitle = myLibrary[myLibrary.length-1]["title"];
    let bookAuthor = myLibrary[myLibrary.length-1]["author"];
    let bookPages = myLibrary[myLibrary.length-1]["pages"];

    let bookTitleH3 = document.createElement("h3");
    let bookAuthorH3 = document.createElement("h3");
    let bookPagesH3 = document.createElement("h3");
    let readButton = document.createElement("button");
    let removeButton = document.createElement("button");
    
    bookTitleH3.classList.add("bookTitle");
    bookAuthorH3.classList.add("author");
    bookPagesH3.classList.add("pages");
    readButton.classList.add("notRead");
    removeButton.classList.add("remove");

    bookTitleH3.textContent = `Title: "${bookTitle}"`;
    bookAuthorH3.textContent = `Author: "${bookAuthor}"`;
    bookPagesH3.textContent = `Length: ${bookPages} pages`;
    readButton.textContent = "Not read";
    removeButton.textContent = "Remove"

    let newCard = document.createElement("div")
    newCard.classList.add("bookTest");

    newCard.appendChild(bookTitleH3);
    newCard.appendChild(bookAuthorH3);
    newCard.appendChild(bookPagesH3);
    newCard.appendChild(readButton);
    newCard.appendChild(removeButton);

    mainSection.appendChild(newCard);
}


function changeReadStatus() {
    let readButtons = Array.from(document.getElementsByClassName("notRead"));
    readButtons.forEach(btn => {
        btn.addEventListener("click", function() {
        if (btn.classList == "read") {
            btn.classList.remove("read");
            btn.textContent = "Not read";
            btn.classList.add("notRead");
        }
        else if (btn.classList == "notRead") {
            btn.classList.remove("notRead");
            btn.textContent = "Read";
            btn.classList.add("read");
        }
        })
    })
}

function removeCard() {
    let removeButton = Array.from(document.getElementsByClassName("remove")); 
    removeButton.forEach(btn => {
        btn.addEventListener("click", function(event) {
            let target = event.target;
            let currentCard = target.parentElement;
            mainSection.removeChild(currentCard);
        })
    })
}