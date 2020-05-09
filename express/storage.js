'use strict'

function storage(){
  const library = [];
  let id = 0;

  return {

    get: () => {
      return library;
    },

    save: (book) => {
      book.id = id++;
      library.push(book);
      return book;
    },

    find: (id) => {
      return library.find( (book) => book.id === Number(id) );
    }, 

    update: (id, body) => {
      let book = library.find( (book) => book.id === Number(id) );
      book.title = body.title;
      book.author = body.author;
            
      return book;
    },

    delete: (id) => {
      let book = library.indexOf( library.find( (book) => book.id === Number(id) ) );
      library.splice(book, 1);
      return library;
    },
  }
}




// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?
module.exports = storage;
