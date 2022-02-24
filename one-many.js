const db = require('./models')

async function relationshipCrud (){
    try{
        // CREATE
        //find a user
        const foundUser = await db.user.findOne() //first person found
        //give them a pet
        const petMongoose = await foundUser.createPet({
            name: 'Stella',
            description: 'The Bratty Mongoose'
        })
        // console.log(petMongoose)
        // READ
        //fooInstance.getBar()
        const mongooseUser = await petMongoose.getUser()
        // console.log(mongooseUser)
        //foo.getBar()
        const pets = await foundUser.getPets()
        // console.log(pets)
        //fooInstance.countBars
        const petCount = await foundUser.countPets()
        // console.log(petCount)
        // EAGER LOADING
        const eagerBeaver = await db.user.findOne({
            where: {
                firstName: 'Zachary'
            },
            include: [db.pet] // supply an array of models 
        })
        console.log(eagerBeaver.pets)
    }catch(err){
        console.log(err)
    }
}
relationshipCrud()