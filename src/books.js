function findAuthorById(authors = [], id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books = [], id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books = []) {
  let isBorrowed = books.filter((book) => !book.borrows[0].returned)

  let notBorrowed = books.filter((book) => book.borrows[0].returned)

  return [isBorrowed, notBorrowed]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrows) => {
      return {
        ...borrows,
        ...accounts.find((account) => borrows.id === account.id),
      }
    })
    .slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
}
