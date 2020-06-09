//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

function Store() {}



Store.getBooksFromLS = function(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

Store.addBooksToLS = function(book){
    const books = Store.getBooksFromLS();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

Store.displayBooksFromLS = function(){
    const books = Store.getBooksFromLS();
    books.forEach(function(book){
        const ui = new UI();
        ui.addBookToList(book);
    })
}

Store.removeBookFromLS = function(isbn){
    // console.log(isbn);
    const books = Store.getBooksFromLS();
    books.forEach(function(book, index){
        if(book.isbn === isbn){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books',JSON.stringify(books));
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(msg, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    // <div class="alert success">Book Added</div>
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 3000);
}
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
       target.parentElement.parentElement.remove();
    }
}

UI.prototype.addBookToList = function(book){
    // Dynamically creating required Elements inside <tbody>
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    const tbody = document.getElementById('book-list');
    tbody.appendChild(row);
}

// Event Listener to Display Books from LS
document.addEventListener('DOMContentLoaded', Store.displayBooksFromLS)

// Event Listener to Add Book
document.getElementById('book-form').addEventListener('submit', 
    function(e){
        // Grab form input values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        const book = new Book(title,author, isbn);

        const ui = new UI();
        
        if(title === '' || author === '' || isbn === ''){
            //Error alert
            ui.showAlert('Please enter every fields', 'error');
        } else{
            ui.addBookToList(book);
            Store.addBooksToLS(book);
            ui.showAlert('Book Added', 'success');
            ui.clearFields();
        }
        

        e.preventDefault();
    });
// Event Listener to Delete Book
document.querySelector('#book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    Store.removeBookFromLS(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Deleted', 'success');
    e.preventDefault();
})

