

const nameElement = document.querySelector('.name');
const button = document.querySelector('.addBook')
const popUp = document.querySelector('.pop-up-screen')
const bookSubmit = document.querySelector('.book-submit')
const form = document.querySelector('.book-form')
const books = document.querySelector('.books');
const deleteBook = document.querySelectorAll('.delete-button')
const notRead = document.querySelector('.read-not-read');


button.addEventListener('click' , function(){
    popUp.style.display = 'flex';
    
})
form.addEventListener('submit', function(event){  
    event.preventDefault();
    
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pageNumber = document.querySelector('.pages').value;
    const readOrNot = document.querySelector('.readStatus');
    const readStatus = readOrNot.checked ? 'read' : 'not read'
    const status = readStatus == 'read' ? 'read' : 'not-read';
    
    const card = document.createElement('div')
    card.className = 'card';

    card.innerHTML = `
        <h2 class="book-name">${title}</h2>
        <h2 class="book-author">${author}</h2>
        <h2 class="book-pages">${pageNumber}</h2>
        <button class="read-not-read ${status}">${readStatus}</button>
        <button class="delete-button">Remove</button>
    `
    books.appendChild(card);

    popUp.style.display='none';

    form.reset();

})

books.addEventListener('click',function(event){
    const clickedButton = event.target
    if(clickedButton.classList.contains('delete-button')){
        clickedButton.parentElement.remove();
    }

    if (clickedButton.classList.contains('read-not-read')) {
        // Toggle between 'read' and 'not-read'
        clickedButton.classList.toggle('read');
        clickedButton.classList.toggle('not-read');
    }

})


deleteBook.forEach(function(event){
    const bookToDelete = event.target;
    bookToDelete.addEventListener('click',()=>{
        bookToDelete.parentElement.remove();
    })
})
