
// // all the associations go here. The associations will create the foreign keys
// const Book =  require('./Book')
// const Author =  require('./Author')
// const Genre = require('./Genre')

// Book.hasMany(Author, {
//     foreignKey: 'book_id'
// })

// Author.belongsToMany(Book, {
//     foreignKey: "author_id"
// })

// Book.hasMany(Genre, {
//     foreignKey: 'book_id'
// })

// Genre.belongsToMany(Book, {
//     foreignKey: "author_id"
// })

// // Association for rating, rating belongs to user, foreign key = user_id
// // Association for ratings, book has many ratings, foreign key = book_id


// module.exports =  { Book, Author, Genre}

// import{replaceImageUrl, addBook, searchTitle} from './functions.js';

const bookISBN = "9780142424179"; // Replace with desired ISBN(book reference number)

const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${bookISBN}&format=json&jscmd=data`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const bookInfo = data[`ISBN:${bookISBN}`];
    // view "bookInfo" object in terminal
    console.log(bookInfo);

    // function to control reading now image
    function replaceImageUrl() {
        // Replace the URL with the new URL from the object "bookInfo"
        const newCoverUrl = bookInfo.cover.medium;
        const img = document.getElementById("readingNow");
        img.src = newCoverUrl;
        img.alt = "Active Book";
      }

    //   function to add book to my library
    function addBook(){
    //when add button is clicked, run the function search title
    document.querySelector(".add-button").addEventListener("click", function(event) {
    searchTitle();
    // getPercent();
  });
}

    // get book based off title from api
    function searchTitle(){
     const title = prompt("Enter the title of the book:");
     const libraryContent = document.querySelector(".library-content");
    
      // Prompt the user to enter the amount of pages they have read
      const pagesRead = parseInt(prompt("Enter the amount of pages you have read:"));
    
      // Get the total number of pages from the bookInfo object
      const totalPages = bookInfo.number_of_pages;
    
      // Calculate the percentage of pages read
      const percentage = Math.round((pagesRead / totalPages) * 100);
    
      
    // Search for books by title
    fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`)
      .then(response => response.json())
      .then(data => {
        // Get the first result from the search results
        const book = data.docs[0];
        
        // Get the book cover ID from the book object
        const coverId = book.cover_i;
      
        // If the book has a cover, fetch the cover image and display it
        if (coverId) {
          fetch(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`)
            .then(response => {
            const newFigure = document.createElement("figure");
            const newBook = document.createElement("img");
            const figcaption = document.createElement("figcaption");
            newBook.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
            newBook.classList.add('bookCover');
            figcaption.textContent = `${percentage}%`;
            newFigure.appendChild(newBook);
            newFigure.appendChild(figcaption);
          libraryContent.appendChild(newFigure);
        });
    }
    else {
        alert('Book not found'); // this only works sometimes
        return;
    }
  });
  
  };
    


    // call all functions
      
    replaceImageUrl();
      addBook();
  })

//   if error happens while fetch is running, log error to console and finish running code
  .catch(error => console.error(error));
