//useState is for allowing state to be used in Functional Components
//useRef allows for a value to persist after a render. A reference value, essentially
//useCallback works in conjunction with useRef to dynamically update the reference value at the end of our page
//We need to be updating our reference value and page to appropriately retrieve the right data for the infinite scroll 
import React, { useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router';
import useBookSearch from './useBookSearch';

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

export default function Gallery() {
  //Next 3 Lines
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const observer = useRef()
  //Okay...
  //The lastBook is a Reference Value which must be updated in conjunction with it's apperance on the page
  //So our reference value is equal to a function that takes care of that
  //And the reference value appears far below, with our Key
  const lastBookElementRef = useCallback(node => {
    console.log('lastBook reference', node)
  })

  //Added a search bar to choose our Queries (actual app this is stretch goal)
  //Every query we want to default to Page 1. Starting off on Page 7 or so would be jarring
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  //Here we destructure our useBookSearch
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  //Deleted the render
  //replaced return with some book nerd stuff
  return (
    <>
      <input type='text' value={query} onChange={handleSearch}></input>
      {/* We now map our books. They are all unique because of that Set thing we use in useBookSearch so the Book can double as the Key */}
      {books.map((book, index) => {
        //Index + 1 is the final book that shows up, so it become our lastBook reference value
        //All the other books get rendered without needing to update the lastBookElementRef
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
        return <div key={book}>{book}</div>
      }})}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
};