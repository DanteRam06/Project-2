function replaceImageUrl() {
    // Replace the URL with the new URL from the object "bookInfo"
    const newCoverUrl = bookInfo.cover.medium;
    const img = document.getElementById("readingNow");
    img.src = newCoverUrl;
    img.alt = "Active Book";
  }

  function addBook(){
    //when add button is clicked, run the function search title
    document.querySelector(".add-button").addEventListener("click", function(event) {
    searchTitle();
  });
}

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

function displayCover(){
  if (coverId) {
    fetch(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`)
      .then(response => {
        const newFigure = document.createElement("figure");
        const newBook = document.createElement("img");
        newBook.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
        const figCaption = document.createElement("figcaption");
        figCaption.textContent = `${book.title} by ${book.author_name}`;
        newFigure.appendChild(newBook);
        newFigure.appendChild(figCaption);
        libraryContent.appendChild(newFigure);

        // Prompt the user to enter the amount of pages they have read
        const pagesRead = parseInt(prompt("Enter the amount of pages you have read:"));

        // Get the total number of pages from the bookInfo object
        const totalPages = book.number_of_pages;

        // Calculate the percentage of pages read
        const percentage = Math.round((pagesRead / totalPages) * 100);

        // Create a new div element to display the percentage
        const percentageDiv = document.createElement("div");
        percentageDiv.textContent = `${percentage}%`;

        // Append the percentage div to the parent element
        newFigure.appendChild(percentageDiv);
      });
  } else {
    alert("Book not found"); // this only works sometimes
    return;
  }
};

function getPercent(){
   // Get the library-content image element
   const img = document.querySelector('.library-content');

   // Prompt the user to enter the amount of pages they have read
   const pagesRead = parseInt(prompt("Enter the amount of pages you have read:"));
 
   // Get the total number of pages from the bookInfo object
   const totalPages = bookInfo.number_of_pages;
 
   // Calculate the percentage of pages read
   const percentage = Math.round((pagesRead / totalPages) * 100);
 
   // Create a new div element to display the percentage
   const percentageDiv = document.createElement("div");
   percentageDiv.textContent = `${percentage}%`;
 
   // Get the parent element of the book cover
   const parentElement = img.parentNode;
 
   // Append the percentage div to the parent element
   parentElement.appendChild(percentageDiv);
 
   // Append the "readingNow" image and the percentage div to the "library-content" element
   const libraryContent = document.querySelector(".library-content");
   libraryContent.appendChild(parentElement);
}


 export{replaceImageUrl, addBook, searchTitle};