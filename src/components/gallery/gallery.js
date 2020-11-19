import React, { Component } from 'react';

// Placeholder images
const image1 = require('../../pictures/BabyTrunks.jpg');
const image2 = require('../../pictures/Bulma.png');
const image3 = require('../../pictures/JapVegeta.jpg');
const image4 = require('../../pictures/SSVegeta.jpg');
const image5 = require('../../pictures/TheFamily.png');
const image6 = require('../../pictures/KidTrunks.jpg');
const image7 = require('../../pictures/GokuVegeta.jpeg');

let dataSource = [
  {title:'My Baby Saiyan Warrior', pic: image1},
  {title:'My Feisty Wife', pic: image2},
  {title:'Glory Days', pic: image3},
  {title:'I am a legend', pic: image4},
  {title:'The Best Family', pic: image5},
  {title:'He is a tough kid', pic: image6},
  {title:'Posing with the Clown', pic: image7},
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