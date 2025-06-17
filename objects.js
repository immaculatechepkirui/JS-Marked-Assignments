//  Create a User object with properties like name, stepsWalked (an array of daily steps),Add commentMore actions
//  and a method totalSteps() that calculates and returns the total number of steps walked.
//  Add another method averageSteps() that returns the average steps per day.

// Create a function constructor that takes inthe name of the user and an 
// array of the steps covered daily as arguments
// Create  user properties of name and steps walked inside the constructor
// to store the passed values
// Iterate through the steps walked array summing individual steps to find the totalsteps
// Averagesteps method first checks whether the array is empty then didvides the total steps  result by the number of days



function User(name, stepsCovered) {
    this.name = name;
    this.stepsCovered = stepsCovered;
  
    this.totalSteps = function() {
      let sum = 0;
      for (let i = 0; i < this.stepsCovered.length; i++) {
        sum+= this.stepsCovered[i];
      }
      return sum;
    };
  
    this.averageSteps = function() {
      return this.totalSteps() / this.stepsCovered.length;
    };
  };

  const firstUser = new User ('Elsa', [10342,11806,16435,13254,1292]);
  console.log(firstUser.totalSteps());





//Create a Recipe constructor with name, ingredients (array), and
//cookTime in minutes. Add a method displayRecipe() that logs the name 
// and all ingredients in a readable list, and another method isQuickMeal() 
// that returns true if cookTime is 30 minutes or less.

// Create constructor recipe (recipe name, ingredients array,cooking period[mins])
// Create an object for the recipe .It'll have methods for diplaying rice and quickmeal
// log recipe name and ingredients in readable format using the display rice method
// Check that the cooking timeis thirty minutes or less and return a true or false

function Recipe(recipeName, ingredients,cookingTime){
    this.recipeName = recipeName;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    this.displayRecipe = function (){
        console.log(`Recipe: ${this.name}`);
            console.log('Ingredients:');

            this.ingredients.forEach(ingredient => {
                console.log(`- ${ingredient}`);

                
            });
        
    };
    this.isQuickMeal = function() {
        return this.cookingTime <= 30;
    };
};

const shawarmaRecipe = new  Recipe('ShawarmaRecipe', ['marinated meat','red onions','lemon juice','minced ginger','nutmeg','paprika'],26);
console.log(shawarmaRecipe.isQuickMeal());



//Create a Car object with properties like model, mileage, and
//serviceHistory (an array of service dates). Add a method 
// addService(date) to add a new service record, and 
// lastServiceDate() to return the most recent service date.

// Create a car constructor that takes in mileage and model as arguments
// Initializa an array to store service dates
// Create a servicedate method that adds the dates of service to the service history array
// create a function of the last service date to return the last element of of the history service

function Car(model, mileage, ){
    this.model = model;
    this.mileage = mileage;
    this.serviceHistory = [];
}

Car.prototype.addServiceDate = function(serviceDate) {
    this.serviceHistory.push(serviceDate);
};
  
Car.prototype.lastServiceDate = function() {
    return this.serviceHistory[this.serviceHistory.length - 1];
};
  

 const soldCar = new Car('BMW X5',20300);
 soldCar.addServiceDate('10/12/2024');
 soldCar.addServiceDate('20/2/2025')
 soldCar.addServiceDate('1/1/2025');
 soldCar.addServiceDate('03/3/2025');
 
 console.log(soldCar.lastServiceDate());



// initializa en empty song array
// create a method to add songs
// create a methodto remove songs
//Create a Playlist object with a property songs (an array of song titles). 
//Add methods addSong(title) to add a song, removeSong(title) to delete one,
//and listSongs() to log all songs currently in the playlist.
// List all the songs in the playlist currently


 function songPlaylist(){
    this.songs = [];

    this.addSong = function (songName){
        this.songs.push(songName);
    };
    this.deleteSong = function (songName){
        this.songs = this.songs.filter(song => song !== songName);
    };

    this.listSongs = function(){
        this.songs.forEach((song,index) =>{
            console.log(`${index + 1}. ${song}`);
        });
    };


 };

const amapianoGrooves = new songPlaylist();
amapianoGrooves.addSong('zenzele');
amapianoGrooves.addSong('wadibusa');
amapianoGrooves.addSong('dalie');
amapianoGrooves.addSong('usizola');
amapianoGrooves.addSong('boom')

console.log(amapianoGrooves.listSongs());









//  Create a Course constructor with title, lessons (an array), and completedLessons
// (array). Add a method markComplete(lesson) that adds the lesson to completedLessons,
//and a method getProgress() that returns a string like "3 out of 5 lessons completed".
function Course(unit, lessons){
    this.unit = unit;
    this.lessons = lessons;
    this.completedLessons = [];

    this.markComplete = function(lesson){
        if (!this.completedLessons.includes(lesson)){
            this.completedLessons.push(lesson);
        };
    };
    this.getProgress = function(){
        return `${this.completedLessons.length} out of ${this.lessons.length} lesssons completed`;
    };
}

const currentCourse = new Course('Javascript unit',['Operators','Methods','Functions','Classes']);

currentCourse.markComplete('Operators');
currentCourse.markComplete('Methods');
currentCourse.markComplete('Functions');
console.log(currentCourse.getProgress());