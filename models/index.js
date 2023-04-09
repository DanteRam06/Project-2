// all the associations go here. The associations will create the foreign keys
const Book =  require('./Book')
const Author =  require('./Author')
const Genre = require('./Genre')

Book.hasMany(Author, {
    foreignKey: 'book_id'
})

Author.belongsToMany(Book, {
    foreignKey: "author_id"
})

Book.hasMany(Genre, {
    foreignKey: 'book_id'
})

Genre.belongsToMany(Book, {
    foreignKey: "author_id"
})

// Association for rating, rating belongs to user, foreign key = user_id
// Association for ratings, book has many ratings, foreign key = book_id


module.exports =  { Book, Author, Genre}