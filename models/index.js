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
  });
}

    // get book based off title from api
    function searchTitle(){
        const title = prompt("Enter the title of the book:");
        const dropdownContent = document.querySelector(".dropdown-content");
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
            // code below wont display image
        const newBook = document.createElement("img");
        // newBook.src = response.url;
        newBook.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
        dropdownContent.appendChild(newBook);
       
        });
    }
    else{
        alert('Book not found'); //this currently doesnt work
    }
  });

    }

    // call all functions
      replaceImageUrl();
      addBook();
  })

//   if error happens while fetch is running, log error to console and finish running code
  .catch(error => console.error(error));


