function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id)
}

function findBookById(books, id) {
  return books.find((book) => book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  let total = [],
    stillBorrowedBooks = [],
    returnedBooks = []

    books.forEach(book => {
    book.borrows.some((borrow) => borrow.returned == false) ?
      stillBorrowedBooks.push(book) : returnedBooks.push(book)
  });

  total.push(stillBorrowedBooks)
  total.push(returnedBooks)
  return total;
}


function getBorrowersForBook(book, accounts) {
  let borrowers = []
  let authorData = {}
  let result = []

  book.borrows.forEach((borrow) => {
    authorData = accounts.find((author) => author.id == borrow.id);
    newObject = {
      ...borrow,
      ...authorData
    };
    borrowers.push(newObject);

  })

  if (borrowers.length <= 10) {
    for (let i = 0; i < borrowers.length; i++) {
      result[i] = borrowers[i]
    }
  } else {
    for (let i = 0; i < 10; i++) {
      result[i] = borrowers[i]
    }
  }
  return result
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};