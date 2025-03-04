// Oefeningen 1
// {
//   const Boek1 = {
//     title: "The Hobbit",
//     author: "J.R.R tolkien",
//     published: "1937",
//     wordCount: 0,

//   };

//   const Boek2 = {
//     title: "1984",
//     author: "George Orwell",
//     published: 1949,
//     wordCount: 88900,
//   };

//   const Boek3 = {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     published: 1813,
//     wordCount: 124713,
//   };

//   // console.log(Boek1);
//   // console.log(Boek2);
//   // console.log(Boek3);
//   // console.log(`totaal woorden ${Boek2.title} en ${Boek3.title}: ${Boek2.wordCount + Boek3.wordCount}`)

//   Object.prototype.getInfo = function()
//   {
//   if (this.wordCount > 0) {
//     return `${this.author}, published in ${this.published}(${this.wordCount})`
//   }else
//   {
//     return `${this.author}, published in ${this.published}`
//   }

//   }
//   console.log(Boek1.getInfo())
//   console.log(Boek2.getInfo())
//   console.log(Boek3.getInfo())

// }
// Oefeningen 2
// {
//   function createBook(titleInput,authorInput,publishedInput,wordCount) {
//    const book = {
//     title: titleInput,
//     author: authorInput,
//     published: publishedInput,
//     wordCount: wordCount,
//    }
//    return book
//   }

//   const books = [
//     createBook('The Hobbit', 'J.R.R. Tolkien', 1937),
//     createBook('1984', 'George Orwell', 1949, 88900),
//     createBook('Pride and Prejudice', 'Jane Austen', 1813, 124713),
//     createBook('War and Peace', 'Leo Tolstoy', 1867, 544406),
//     createBook('The Tell-Tale Heart', 'Edgar Allan Poe', 1843, 2093),
//     createBook('The Metamorphosis', 'Franz Kafka', 1915, 22185),
//     createBook('Strange Case of Dr Jekyll and Mr Hyde', 'Robert Louis Stevenson', 1886, 13500),
//   ];

//   Object.prototype.TypeBepaler = function()
//   {
//     if (this.wordCount === undefined) {
//       return `${this.title} is unknown`
//     }else if (this.wordCount < 7500) {
//       return `${this.title} is a Short Story`
//     }else if (this.wordCount < 20000) {
//       return `${this.title} is a Novelette`
//     }else if (this.wordCount < 40000) {
//       return `${this.title} is a Novella`
//     }else if (this.wordCount < 250000) {
//       return `${this.title} is a Novel`
//     }else
//     {
//       return `${this.title} is a doorstopper`
//     }

//   }
//   for (const x of books)
//   {
//     console.log(x.TypeBepaler())
//   }

// }
// Oefening 3:
// {
//   function createBook(titleInput,authorInput,publishedInput,wordCount) {
//    const book = {
//     title: titleInput,
//     author: authorInput,
//     published: publishedInput,
//     wordCount: wordCount,
//     getInfo: function()
//   {
//   if (this.wordCount > 0) {
//     return `${this.author}, published in ${this.published}(${this.wordCount})`
//   }else
//   {
//     return `${this.author}, published in ${this.published}`
//   }
//   }
//    }
//    return book
//   }

//   const books = [
//     createBook('The Hobbit', 'J.R.R. Tolkien', 1937),
//     createBook('1984', 'George Orwell', 1949, 88900),
//     createBook('Pride and Prejudice', 'Jane Austen', 1813, 124713),
//     createBook('War and Peace', 'Leo Tolstoy', 1867, 544406),
//     createBook('The Tell-Tale Heart', 'Edgar Allan Poe', 1843, 2093),
//     createBook('The Metamorphosis', 'Franz Kafka', 1915, 22185),
//     createBook('Strange Case of Dr Jekyll and Mr Hyde', 'Robert Louis Stevenson', 1886, 13500),
//   ];

//  function yearCap (arr,maxYear)
//   {
//     return arr.filter(book => book.published <= maxYear)
//   }

//  const test = yearCap(books,1900)
//  test.forEach(x => console.log(x.getInfo()))
// }
// Oefening 4:
{
    const object1 = {
        a: 1,
        b: 2,
        c: 3,
    };

    const object2 = {
        b: 4,
        c: 5,
        d: 6,
    };

    function mergeObjects(één, twee) {
        const result = {};

        for (let key of Object.keys(één)) {
            if (twee[key]) {
                console.log(`Key ${Object.keys(één)} exists for both objects.`);
                console.log(`Current values:`);
                console.log(`1: ${één[key]}`);
                console.log(`2: ${twee[key]}`);
                const userInput = Number(
                    prompt(
                        `Wich object shall I use to set the value of the result [1/2]?`,
                        1
                    )
                );
                if (userInput === 1) {
                    result[key] = één[key];
                } else if (userInput === 2) {
                    result[key] = twee[key];
                } else {
                    return console.log(`Je mag enkel 1 & 2 ingeven`);
                }
            } else {
                result[key] = één[key];
            }
        }
        for (let key2 of Object.keys(twee)) {
            if (!result[key2]) {
                result[key2] = twee[key2];
            }
        }
        return result;
    }

    console.log(mergeObjects(object1, object2));
}
