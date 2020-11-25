// Want to understand this better? try this video https://www.youtube.com/watch?v=NZKUirTtxcg

//useState is for allowing state to be used in Functional Components
//useRef allows for a value to persist after a render. A reference value, essentially
//useCallback works in conjunction with useRef to dynamically update the reference value at the end of our page
//We need to be updating our reference value and page to appropriately retrieve the right data for the infinite scroll 
import React, { useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router';
import useBookSearch from './useBookSearch';
import GallerySearch from './GallerySearch';

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
  const [observed, setObserver] = useState(false);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(2);

  //Here we destructure our useBookSearch
  const { results, hasMore, loading, error } = GallerySearch(observed, pageNumber, limit);
  console.log('results?', results)

  //Observer starts off Null
  //It is a ref that tells us where we should be
  //Our useCallback will disconnect it, then it must be set up to observe what ever the node is
  const observer = useRef()
  //Okay...
  //The lastResultElementRef is a Reference Value which must be updated in conjunction with it's apperance on the page
  //So our reference value is equal to a function that takes care of that
  //*Our reference value appear far below, in the Return, right next to our Key
  //If the page is loading we shouldn't be return anything, so that is accounted for
  const lastResultElementRef = useCallback(node => {
    if (loading) return;
    //This is how we clear the observer
    if (observer.current) observer.current.disconnect();
    //This is how we we set the observer to follow our node
    //If you run this you will notice that the if statement is carried out once the pages intersects, or sees, the entry
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log('Visible');
        setPageNumber(prevPageNumber => prevPageNumber + 1);
        setObserver(!observed);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  //Added a search bar to choose our Queries (actual app this is stretch goal)
  //Every query we want to default to Page 1. Starting off on Page 7 or so would be jarring
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <input type='text' value={query} onChange={handleSearch}></input>
      {/* We now map our results. They are all unique because of that Set thing we use in useresultsearch so the result can double as the Key */}
      {results.map((result, index) => {
        console.log('what a result', result)
        //Index + 1 is the final result that shows up, so it become our lastResult reference value
        //All the other results get rendered without needing to update the lastResultElementRef
        if (results.length === index + 1) {
          return <div className='returns' ref={lastResultElementRef} key={result}>{result}</div>
        } else {
        return <div className='returns' key={result}>{result}</div>
      }})}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
};