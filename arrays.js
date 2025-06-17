//Finding thelast element of an arrayAdd commentMore actions
var arr1= [3,7,34,90,12]
var arr2=[true, "green","where",12,56]
let lastElementArr1 = arr1[arr1.length - 1];
let lastElementArr2 = arr2[arr2.length - 1];
console.log(lastElementArr1); 
console.log(lastElementArr2)


//joining array elemments
 var myPets = ["Cow", "Bird", "Snake", "Dog"];
let joinedString = myPets.join(', ');
console.log({joinedString}); 


//sorting array items
  var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
  arr3.sort((a, b) => a - b); 
console.log({arr3}); 

//Removing duplicates from an array
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [...new Set(arr)];
let duplicatesArr = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(uniqueArr); 
console.log({duplicatesArr}); 

//Searching a word in an array
let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
let result = arr5.includes(searchWord) ? searchWord : "the search word was not found";
console.log({result})

//Sorting string
let word = "renniw"
let sortedWord = [...word].sort().join('');
console.log({sortedWord});

//Inserting an item to an array at a specific position
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", 
    "Grape", "Guava", "Kiwi", "Lemon"];
    fruits.splice(4, 0, "Tomato")
    console.log({fruits})