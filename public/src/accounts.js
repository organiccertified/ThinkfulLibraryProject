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
  const borrowing = books.filter((book) => {
    return book.borrows.find(
      (person) => person.id == account.id && person.returned == false
    );
  });
  const findAuthor = (id) => {
    return authors.find((writer) => writer.id == id);
  };

  return borrowing.map((book) => {
    return {
      ...book,
      author: findAuthor(book.authorId),
    };
  });
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
