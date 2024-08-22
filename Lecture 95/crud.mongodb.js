//CRUD Operation
use("CrudDb")

console.log(db);
//Create 
// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harry web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//       "name": "Harry web dev free course",
//       "price": 0,
//       "assignments": 12,
//       "projects": 45
//     },
//     {
//       "name": "Python for Data Science",
//       "price": 5000,
//       "assignments": 15,
//       "projects": 30
//     },
//     {
//       "name": "Complete Java Programming",
//       "price": 10000,
//       "assignments": 20,
//       "projects": 40
//     },
//     {
//       "name": "Full-Stack Web Development",
//       "price": 15000,
//       "assignments": 25,
//       "projects": 50
//     },
//     {
//       "name": "Machine Learning with Python",
//       "price": 12000,
//       "assignments": 18,
//       "projects": 35
//     },
//     {
//       "name": "iOS App Development with Swift",
//       "price": 20000,
//       "assignments": 10,
//       "projects": 25
//     },
//     {
//       "name": "Android App Development with Kotlin",
//       "price": 18000,
//       "assignments": 22,
//       "projects": 38
//     },
//     {
//       "name": "React and Redux Bootcamp",
//       "price": 8000,
//       "assignments": 8,
//       "projects": 20
//     },
//     {
//       "name": "Advanced C++ Programming",
//       "price": 9000,
//       "assignments": 12,
//       "projects": 28
//     },
//     {
//       "name": "Cloud Computing with AWS",
//       "price": 25000,
//       "assignments": 30,
//       "projects": 60
//     }
//   ]
//   )

//Read Operations
// let a = db.courses.find({price: 0})
// console.log(a.toArray());

// let b = db.courses.findOne({price: 0})
// console.log(b);


// console.log(a.count());



//Update

// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 100}, {$set:{price: 60}})


//Delete
// db.courses.deleteOne({price: 60})

db.courses.deleteMany({price: 60})