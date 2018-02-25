const bookshelf = require(`./bookshelf`);

class Card extends bookshelf.Model {
  get tableName() { return 'card'}
  get hasTimestamps() { return true }
}

//   author() {
//     return this.belongsTo(User); //referencing User class, ensure include const User
//   }
// }

module.exports = Card;
