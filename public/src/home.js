function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) {
  let result = 0;
  
  result =  books.reduce((acc, book)=> {
    
    book.borrows.find((checkedOut) => checkedOut.returned == false)
      ? acc+=1 : acc+=0;
      return acc;
 
  },0)

  return result

}

function getMostCommonGenres(books){
  let commonGenres = [];
  let mostCommonGenres = [];
  let result = [];
  let allBooksGenres = books.map((book)=>book.genre);
   allBooksGenres.forEach((genre) => {
    if(!commonGenres.includes(genre)){
      commonGenres.push(genre)
    }
  })
  commonGenres.forEach((genre)=>{
    let count = 0;
    books.map((book)=>{
      if(book.genre == genre){
        count+=1
        
      }
    })
    mostCommonGenres.push({name: genre, ["count"]: count})
  })
    mostCommonGenres = mostCommonGenres.sort((genre1, genre2) => genre2.count - genre1.count)
  for(let i=0; i< 5; i++){
    result.push(mostCommonGenres[i])
  }
  return result
}



function getMostPopularBooks(books) {
  let popularBooks =[];
  let result = []
  books.map((book) => {
    let numberOfBorrows = book.borrows.length;
    let nameOfBook = book.title;
    popularBooks.push({name: nameOfBook,
                      count: numberOfBorrows})
  })
  popularBooks = popularBooks.sort((count1, count2)=> count2.count - count1.count)
  for(let i =0; i<5; i++){
    result.push(popularBooks[i])
  }
  return result;
  }

  function getMostPopularAuthors(books, authors) {
    let authorData = []
    let popularAuthor = []
    let countsById = []
    let result = []
  
    authors.map((author) => {
      authorData.push({
        name: author.name.first + " " + author.name.last,
        id: author.id
      })
    })
    // console.log(authorData)
    authorData.forEach((author) => {
      let booksByAuthor = [];
      booksByAuthor = books.filter((book) =>
        book.authorId == author.id
      )
      popularAuthor.push({
        ["id"]: author.id,
        ["name"]: author.name,
        ["books"]: booksByAuthor
      })
    })
    //  console.log(popularAuthor)
    popularAuthor.forEach((author) => {
      if (author.books.length > 0) {
        let count = 0;
        author.books.forEach((book) => count += book.borrows.length)
        countsById.push({
          ["id"]: author.id,
          ["name"]: author.name,
          ["count"]: count
        })
      }
    })
  
    countsById.sort((count1, count2) => count2.count - count1.count);
    for (let i = 0; i < 5; i++) {
      result.push({["name"]: countsById[i].name, ["count"]: countsById[i].count})
    }
    // console.log(result)
    return result
  }
  
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
