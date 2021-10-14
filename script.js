let myLibrary= [];

function Book(title,author,pages,isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
}

addBtn = document.getElementById("form-btn");
bookGrid = document.getElementById("library");
formPopUp= document.getElementById("form-popup");
overlay = document.getElementById("overlay");
closeBtn = document.getElementById("close-btn");

function addBookToLibrary(book){
    myLibrary.push(book);
    bookGrid.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookDisplay = `
        <div class ="book_element">
            <h3>${book.title}</h3>
            <h3>${book.author}</h3>
            <h4>${book.pages} Pages</h4>
            <h4>${book.isRead ? "Done Reading" : "Not Read"}</h4>
        </div>
        `;
        bookGrid.insertAdjacentHTML("afterbegin", bookDisplay);

    });
}

addBtn.addEventListener("click", () => {
    formPopUp.classList.add("active");
    overlay.classList.add("active");
    // isRead = true;
    // const newBook = new Book(title,author,pages,isRead);
    // addBookToLibrary(newBook);
})
closeBtn.addEventListener("click", () => {
    formPopUp.classList.remove("active");
    overlay.classList.remove("active");

})






