const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {

    updateDB()
  
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  async function updateDB() {
    try {
// await Recipe.create({
      //   title: "Bucatini Carbonara",
      //   level: "Easy Peasy",
      //   ingredients: [
      //     "1 Egg",
      //     "5 Egg Yolks",
      //     "200g Pecorino Romano",
      //     "1 Clove of Minced Garlic",
      //     "300g Guanciale",
      //     "Black Pepper",
      //     "Olive Oil",
      //     "500g Bucatini"
      //   ],
      //   cuisine: "Italian",
      //   dishType: "main_course",
      //  
      //   duration: 30,
      //   creator: "Some Italian Dude"
      // })

      await Recipe.insertMany(data);

      data.forEach((recipe) => {
        console.log(recipe.title)
  }) 

  await Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  console.log("Upd8 Success")

  await Recipe.deleteOne({title: "Carrot Cake"});
  console.log("Bye bye carrot cake")

} catch (e) {
  console.log("error occured")
} finally {
  mongoose.connection.close();
}
};




