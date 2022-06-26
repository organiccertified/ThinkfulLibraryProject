function findAccountById(accounts, id) {

  return accounts.reduce((acc,account)=> {
      (account.id === id) ? acc = account : {}; //can use find() instead
      return acc;    
  },[])

  }


  function sortAccountsByLastName(accounts) {
    return accounts.sort((account1, account2) => (account1.name.last > account2.name.last) ? 1 : -1 )
}


function getTotalNumberOfBorrows(account, books) {
  let count = 0; 
  let result = books.reduce((acc, borrowedTimes)=> {
      let borrowId = borrowedTimes.borrows;

      count =  borrowId.reduce((acc, borrowedTimes)=> {
              borrowedTimes.id == account.id ? acc += 1 : acc+=0;
              return acc;
      },0);
      acc+=count
      return acc;

  }, 0)
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCurrentlyCheckedOut = books.filter(isTheBookCheckedOut)

  function isTheBookCheckedOut(book){
    let newBorrows = book.borrows.find((stillBorrowed)=> stillBorrowed.returned == false && stillBorrowed.id == account );
    book.borrows = []
    book.borrows.push(newBorrows)
    return newBorrows
  }

  //from each booksCurrentlyCheckedOut get the authorId
  //check which id is the same from authors 
  //bring the information

  booksCurrentlyCheckedOut.reduce((acc, book)=> {
    book["author"] = authors.find((author) => author.id == book.authorId)
  },[])


  return booksCurrentlyCheckedOut

   

}
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
