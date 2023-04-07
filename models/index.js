const bookISBN = "9780142424179"; // Replace with desired ISBN(book reference number)

const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${bookISBN}&format=json&jscmd=data`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const bookInfo = data[`ISBN:${bookISBN}`];
    console.log(bookInfo);
    // Do something with the book information here
  })
  .catch(error => console.error(error));


