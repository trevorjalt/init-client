import React, { Component } from 'react';
import '../../css/variables.css';
import '../../css/main.css';
import Benchmark from '../../pictures/benchmark-app-full-page-view.png';
import Fluent from '../../pictures/fluent-app-full-page-view.png';

class Gallery extends Component {
  render() {
    return (
    <div className='gallery-wrapper'>
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
      <img className='gallery-img' src={Fluent} alt='Fluent' />
      <img className='gallery-img' src={Benchmark} alt='Benchmark' />
    </div>
    );
  };
};

export default Gallery;