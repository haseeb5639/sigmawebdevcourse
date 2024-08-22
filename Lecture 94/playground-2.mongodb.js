// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "Price": "30000",
    "Instructor": "Harry"
  },
  {
    "name": "Python",
    "Price": "18000",
    "Instructor": "John"
  },
  {
    "name": "JavaScript",
    "Price": "15000",
    "Instructor": "Jane"
  },
  {
    "name": "C++",
    "Price": "17000",
    "Instructor": "Mike"
  },
  {
    "name": "C#",
    "Price": "16000",
    "Instructor": "Sarah"
  },
  {
    "name": "Ruby",
    "Price": "19000",
    "Instructor": "Anna"
  },
  {
    "name": "Swift",
    "Price": "21000",
    "Instructor": "Tom"
  },
  {
    "name": "Go",
    "Price": "22000",
    "Instructor": "Steve"
  },
  {
    "name": "Kotlin",
    "Price": "23000",
    "Instructor": "Emma"
  },
  {
    "name": "PHP",
    "Price": "14000",
    "Instructor": "Bob"
  }
]
);


// Print a message to the output window.
console.log('Done inserting Data');

