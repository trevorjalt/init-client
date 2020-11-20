import React, { Component } from 'react';

// Placeholder images
const image1 = require('../../pictures/BabyTrunks.jpg');
const image2 = require('../../pictures/Bulma.png');
const image3 = require('../../pictures/JapVegeta.jpg');
const image4 = require('../../pictures/SSVegeta.jpg');
const image5 = require('../../pictures/TheFamily.png');
const image6 = require('../../pictures/KidTrunks.jpg');
const image7 = require('../../pictures/GokuVegeta.jpeg');
// Kaioken times TWO
const image8 = require('../../pictures/BabyTrunks.jpg');
const image9 = require('../../pictures/Bulma.png');
const image10 = require('../../pictures/JapVegeta.jpg');
const image11 = require('../../pictures/SSVegeta.jpg');
const image12 = require('../../pictures/TheFamily.png');
const image13 = require('../../pictures/KidTrunks.jpg');
const image14 = require('../../pictures/GokuVegeta.jpeg');
// KAIOKEN times THREE
const image15 = require('../../pictures/BabyTrunks.jpg');
const image16 = require('../../pictures/Bulma.png');
const image17 = require('../../pictures/JapVegeta.jpg');
const image18 = require('../../pictures/SSVegeta.jpg');
const image19 = require('../../pictures/TheFamily.png');
const image20 = require('../../pictures/KidTrunks.jpg');
const image21 = require('../../pictures/GokuVegeta.jpeg');
// KAIOKEN TIMES FOOOOOUUUUURRRRR
const image22 = require('../../pictures/BabyTrunks.jpg');
const image23 = require('../../pictures/Bulma.png');
const image24 = require('../../pictures/JapVegeta.jpg');
const image25 = require('../../pictures/SSVegeta.jpg');
const image26 = require('../../pictures/TheFamily.png');
const image27 = require('../../pictures/KidTrunks.jpg');
const image28 = require('../../pictures/GokuVegeta.jpeg');

//Example of the data we'll be storing
let dataSource = [
  {title:'My Baby Saiyan Warrior', pic: image1},
  {title:'My Feisty Wife', pic: image2},
  {title:'Glory Days', pic: image3},
  {title:'I am a legend', pic: image4},
  {title:'The Best Family', pic: image5},
  {title:'He is a tough kid', pic: image6},
  {title:'Posing with the Clown', pic: image7},
  //dubs
  {title:'My Baby Saiyan Warrior', pic: image8},
  {title:'My Feisty Wife', pic: image9},
  {title:'Glory Days', pic: image10},
  {title:'I am a legend', pic: image11},
  {title:'The Best Family', pic: image12},
  {title:'He is a tough kid', pic: image13},
  {title:'Posing with the Clown', pic: image14},
  //trips
  {title:'My Baby Saiyan Warrior', pic: image15},
  {title:'My Feisty Wife', pic: image16},
  {title:'Glory Days', pic: image17},
  {title:'I am a legend', pic: image18},
  {title:'The Best Family', pic: image19},
  {title:'He is a tough kid', pic: image20},
  {title:'Posing with the Clown', pic: image21},
  //quads
  {title:'My Baby Saiyan Warrior', pic: image22},
  {title:'My Feisty Wife', pic: image23},
  {title:'Glory Days', pic: image24},
  {title:'I am a legend', pic: image25},
  {title:'The Best Family', pic: image26},
  {title:'He is a tough kid', pic: image27},
  {title:'Posing with the Clown', pic: image28},
];

class Gallery extends Component {
  render() {
    let images = dataSource;
    console.log(images);

    return (
      <div className='gallery'>
        {images.map((image, index) => (
          <div className='img-container'>
            <img className='gallery-img'src={image.pic.default} alt='gallery item' />
          </div>
        ))}
      </div>
    )
  };
};

export default Gallery;