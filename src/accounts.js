function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  )
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const { borrows } = book

    for (let borrow of borrows) {
      if (borrow.id === account.id) {
        total++
      }
    }

    return total
  }, 0)
}

function getBooksPossessedByAccount(account = {}, books = [], authors = []) {
  let booksAccountPossesses = books.filter((bookObj) => {
    const { borrows } = bookObj
    return borrows.find((borrowObj) => {
      return borrowObj.id === account.id && borrowObj.returned === false
    })
  })

  let result = booksAccountPossesses.map((book) => {
    let foundAuthor = authors.find((author) => {
      return author.id === book.authorId
    })

    book.author = foundAuthor

    return book
  })

  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
}
