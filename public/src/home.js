function getTotalBooksCount(books = []) {
  return books.length
}

function getTotalAccountsCount(accounts = []) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowed = 0

  books.filter((book) => {
    if (!book.borrows[0].returned) {
      borrowed++
    }
  })

  return borrowed
}

function getMostCommonGenres(books = []) {
  let genres = {}

  books.forEach((book) => {
    const { genre } = book

    if (genres.hasOwnProperty(genre)) {
      genres[genre] += 1
    } else {
      genres[genre] = 1
    }
  })

  const grenresArr = Object.keys(genres)

  let result = grenresArr.map((genre) => {
    let count = genres[genre]
    return { name: genre, count: count }
  })

  return result
    .sort((genreA, genreB) => {
      return genreB.count - genreA.count
    })
    .slice(0, 5)
}

function getMostPopularBooks(books = []) {
  books.sort((bookA, bookB) => {
    return bookB.borrows.length - bookA.borrows.length
  })

  return books
    .map((book) => {
      const { title, borrows } = book

      return { name: title, count: borrows.length }
    })
    .slice(0, 5)
}

function getMostPopularAuthors(books = [], authors = []) {
  books.sort((bookA, bookB) => {
    return bookB.borrows.length - bookA.borrows.length
  })

  return books
    .map((book) => {
      const { title, authorId, borrows } = book

      const author = authors.find((author) => {
        return authorId === author.id
      })

      const authorFullName = `${author.name.first} ${author.name.last}`

      return { name: authorFullName, count: borrows.length }
    })
    .slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}
