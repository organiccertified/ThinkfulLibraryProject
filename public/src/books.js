function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id)
}


function findBookById(books, id) {
  return books.find((book) => book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  let total = books.reduce((acc, book) => {
    let bookBorrows = book.borrows;
    let returnedBooks =[];
    let borrowedBooks =[];
    
    
    const stillBorrowed = (hasBeenReturned) => hasBeenReturned.returned == true

    bookBorrows.every(stillBorrowed) ? returnedBooks.push(book) : borrowedBooks.push(book);
    
    return acc = returnedBooks + borrowedBooks; 

  },[])

  return total; 
    

}
    


function getBorrowersForBook(book, accounts) {
  /*
  - A book object.
  - An array of all account objects.
  
  It should return an array of ten or fewer account objects that represents the accounts given 
  by the IDs in the provided book's `borrows` array. However, each account object 
  should include the `returned` entry from the corresponding transaction object in the `borrows` array.
  
  
  */
  
  let totalAccountsThatBorrowedTheBook1 =[];

  let borrowHistory = book.borrows;
  
  borrowHistory.length <=10 ? totalLen = borrowHistory.length : totalLen = 10;
  
  for(let i = 0; i < totalLen; i++){
  
    borrowerData = accounts.find((borrower) => borrowHistory[i].id == borrower.id);
  
      newData = { 
        id: borrowerData.id,
        returned: borrowHistory[i].returned,
        ...borrowerData
      }
   
      totalAccountsThatBorrowedTheBook1.push(newData)
      
  }
  
  

  return totalAccountsThatBorrowedTheBook1
  
  
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
