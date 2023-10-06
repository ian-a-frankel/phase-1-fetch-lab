function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  const gameOfThronesDB = fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => renderBooks(books))

  return gameOfThronesDB

}

function renderBooks(books) {
  //console.log(books)
  const main = document.querySelector('main');
  books.forEach(book => {
    //console.log(book)
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
