const db = require('./models')

//CREATE
// db.user.create({
//     firstName: 'Zach',
//     lastName: 'Brose',
//     age: 28,
//     email: 'zrbrose@gmail.com',
//     birthday: new Date()
// })
// .then(createdUser =>{
//     console.log(createdUser)
// })
// .catch(console.log)


async function userCrud(){
    try{
     //create
     // const createdUser = await db.user.create({
     //     firstName: 'Zachary',
     //     lastName: 'Manning',
     //     age: 32,
     //     email: 'bagadonuts@gmail.com',
     //     birthday: new Date()
     // })
     //  console.log(createdUser.firstName, createdUser.lastName)

     //fancy find or create sequelize function

     const [newUser, wasCreated] = await db.user.findOrCreate({
         where: {
             firstName: 'jo'
         }, 
         defaults: {
          firstName: 'jo',
          lastName: 'Mama',
          age: 32,
          email: 'bababganoush@gmail.com',
          birthday: new Date()
         }
     }) 
     console.log(newUser, `this user was created ${wasCreated}`)
    //  //read
    //   const foundUser = await db.user.findAll({
    //      where: {
    //          firstName: 'Zachary'
    //      }
    //   })
    //   console.log(foundUser)
    //  //update
    //  const numRows = await db.user.update({
    //      age: 30
    //  },{
    //      where: {
    //          firstName: 'Zach'
    //      }
    //  })
    //     console.log(numRows)
    //  //destroy - needs where clause - returns number of rows deleted
    //  const numDeletedRows = await db.user.destroy({
    //      where: {
    //          firstName: 'Zach'
    //      }
    //  })
    //  console.log(numDeletedRows)
        
     }catch(error){
        console.log(error)
    }
}
userCrud()

//arrary/object destructuring - has to have same number as indexes
const numbers = [1,3,55,6,43,999]

const [zero, one, two, taco, banana, hello] = numbers

console.log(zero, taco)

function example(){
    return ['hey','there', 'kidddo']
}
const [stringOne, stringTwo] = example()


//READ
// db.user.findAll()
//     .then(foundUser=>{
//         console.log(foundUser)
//     })

//you have to declare an async function to get access to the await keyword
// async function findAllUsers(){
//     // handle errors with try/catch blocks 
//     // variable = await promise
//     try {
//         const foundUser = await db.user.findAll()
//         console.log(foundUser)
//     } catch (error){
//         console.log(error)
//     }
// }
// findAllUsers()
//UPDATE
//DELETE