let myLibrary= [];

function Book(title,author,pages,isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
}

addBtn = document.getElementById("form-btn");

formPopUp= document.getElementById("form-popup");
overlay = document.getElementById("overlay");
closeBtn = document.getElementById("close-btn");
titleInput = document.getElementById("title-input");
authorInput = document.getElementById("author-input");
pagesInput = document.getElementById("pages-input");
isReadInput = document.getElementById("isread-input")
submitBtn = document.getElementById("submit-btn");

function capitalize(text) {
    var words = text.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);     
    }
    return words.join(' '); 
 }

function displayBook(book) {
    const div = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    const bookGrid = document.getElementById("library");
    div.classList.add("book_element");

    titleDiv.textContent = `"${capitalize(book.title)}"`;
    titleDiv.classList.add('book_title');
    div.appendChild(titleDiv);

    authDiv.textContent = capitalize(book.author);
    authDiv.classList.add('author');
    div.appendChild(authDiv);

    pageDiv.textContent = `${book.pages} ${book.pages ==1 ? "Page" : "Pages"}`;
    pageDiv.classList.add('pages');
    div.appendChild(pageDiv);

    readBtn.classList.add('button')
    readBtn.setAttribute('id', 'readBtn'); 
    div.appendChild(readBtn);
    if(book.isRead===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#cf2a40';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#36d436'
    }

    removeBtn.textContent = 'Delete';
    removeBtn.classList.add("button");
    removeBtn.setAttribute('id', 'removeBtn');
    div.appendChild(removeBtn);
    
    bookGrid.appendChild(div);

    removeBtn.addEventListener('click', () => {
        console.log("clicked");
        myLibrary.splice(myLibrary.indexOf(book),1);
        saveData();
        renderLibrary();
    })
    readBtn.addEventListener('click', () => { 
        book.isRead = !book.isRead; 
        saveData();
        renderLibrary();
        }); 
}

function renderLibrary(){
    const bookGrid = document.getElementById("library");
    const books = document.querySelectorAll('.book_element');
    
    books.forEach(book => bookGrid.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
         displayBook(myLibrary[i]);
    }}

function addBookToLibrary(book){
    console.log("called")
    myLibrary.push(book);
    renderLibrary();
}

function clearForm (){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}

addBtn.addEventListener("click", () => {
    clearForm();
    formPopUp.classList.add("active");
    overlay.classList.add("active");

})

submitBtn.addEventListener("click", () => {
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    isRead = isReadInput.checked;
    console.log(isRead)
    const newBook = new Book(title,author,pages,isRead);
    addBookToLibrary(newBook);
    formPopUp.classList.remove("active");
    overlay.classList.remove("active");
})
closeBtn.addEventListener("click", () => {
    formPopUp.classList.remove("active");
    overlay.classList.remove("active");

})

function saveData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restoreData() {
    if(!localStorage.myLibrary) {
        renderLibrary();
    }else {
        let objects = localStorage.getItem('myLibrary')
        objects = JSON.parse(objects);
        myLibrary = objects;
        renderLibrary();
    }
}

restoreData();





