function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  )
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0

  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        result++
      }
    }
  }

  return result
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
