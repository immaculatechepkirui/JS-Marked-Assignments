const title = document.getElementById('title');
const listOfFruits = document.getElementById('fruList');
const listOfVeg = document.getElementById('vegList');
const image = document.getElementById('vegetableimage');
const fruitsimages = document.getElementById('fruits');
const introduce = document.getElementById('introduction');
const imagecart = document.getElementById('cartimage');

// Change document background color to silver
 document.body.style.backgroundColor = 'Silver'


 // Change the font color for h1 title tag to green
title.style.color = 'Green';


// Change the font case for h3 title tags to uppercase
const h3tags = document.getElementsByTagName('h3')
for(let i=0; i<h3tags.length; i++){
    h3tags[i].style.textTransform='uppercase'
};


// Add one more fruit to the fruits list
const newLi = document.createElement('LI');
const LiContent = document.createTextNode('Pawpaw');;
listOfFruits.appendChild(newLi);
newLi.appendChild(LiContent);
fruList.style.display = 'flex'
fruList.style.gap = '50px'


// Add one more vegetable to the vegetables list
const newVegLi = document.createElement('LI');
const liContent = document.createTextNode('Broccoli');
listOfVeg.appendChild(newVegLi);
newVegLi.appendChild(liContent);
vegList.style.display = 'flex'
vegList.style.gap = '50px'


introduction.style.backgroundColor = 'black';
introduction.style.padding = '85px'

slogan.style.color = 'white'

firstintroduction.style.display = 'flex'
firstintroduction.style.gap = '90px'

const vegetableImage = document.createElement('img')
const imageContent = document.create
vegetableImage.src = 'images/ONIONS.png';
vegetableImage.width = 90
vegetableImage.height = 100
vegetableImage.alt = 'Welcome to mama Mboga '
image.appendChild(vegetableImage);


const vegetable1Image = document.createElement('img')
const image1Content = document.create
vegetable1Image.src = 'images/TOMATOES.png';
vegetable1Image.width = 90
vegetable1Image.height = 100
vegetable1Image.alt = 'Welcome to mama Mboga '
image.appendChild(vegetable1Image);

const vegetable2Image = document.createElement('img')
const image2Content = document.create
vegetable2Image.src = 'images/cabbage.jpg';
vegetable2Image.width = 90
vegetable2Image.height = 100
vegetable2Image.alt = 'Welcome to mama Mboga '
image.appendChild(vegetable2Image);

const vegetable3Image = document.createElement('img')
const image3Content = document.create
vegetable3Image.src = 'images/brooccoollii.png';
vegetable3Image.width = 90
vegetable3Image.height = 100
vegetable3Image.alt = 'Welcome to mama Mboga '
image.appendChild(vegetable3Image);

vegetableimage.style.gap = '49px'
vegetableimage.style.display = 'flex'
vegetableimage.style.margin = '18px'





const fruitImage = document.createElement('img')
const fruitContent = document.create
fruitImage.src = 'images/mangoes.jpg';
fruitImage.width = 90
fruitImage.height = 100
fruitImage.alt = 'Welcome to mama Mboga '
fruitsimages.appendChild(fruitImage);

const fruit1Image = document.createElement('img')
const fruit1Content = document.create
fruit1Image.src = 'images/bananas.jpg';
fruit1Image.width = 90
fruit1Image.height = 100
fruit1Image.alt = 'Welcome to mama Mboga '
fruitsimages.appendChild(fruit1Image);

const fruit2Image = document.createElement('img')
const fruit2Content = document.create
fruit2Image.src = 'images/watermelons.jpg';
fruit2Image.width = 90
fruit2Image.height = 100
fruit2Image.style.borderEndStartRadius = 34
fruit2Image.alt = 'Welcome to mama Mboga '
fruitsimages.appendChild(fruit2Image);


const fruit3Image = document.createElement('img')
const fruit3Content = document.create
fruit3Image.src = 'images/pawpaw.png';
fruit3Image.width = 90
fruit3Image.height = 100
fruit3Image.style.borderEndStartRadius = 34
fruit3Image.alt = 'Welcome to mama Mboga '
fruitsimages.appendChild(fruit3Image);

fruits.style.gap = '49px'
fruits.style.display = 'flex'
fruits.style.margin = '18px'



const cartImage = document.createElement('img')
const cartContent = document.create
cartImage.src = 'images/cart.jpg';
cartImage.width = 190;
cartImage.height = 220;
cartImage.alt = 'Welcome to mama Mboga '
imagecart.appendChild(cartImage);