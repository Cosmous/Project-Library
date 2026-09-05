
function displayBooks() {
  const grid = document.getElementById('library-grid');
  if (!grid) return;
  
  grid.innerHTML = ''; 

  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p class="author">by ${book.author}</p>
      <p>${book.pages} pages</p>
      <button class="btn-primary">${book.isRead ? 'Read' : 'Not Read'}</button>
    `;
    grid.appendChild(card);
  });
}


const testBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
myLibrary.push(testBook);
displayBooks(); 

const testBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
myLibrary.push(testBook);

document.addEventListener("DOMContentLoaded", () => {
  console.log("HTML completely loaded. Drawing the layout now...");
  displayBooks();
});