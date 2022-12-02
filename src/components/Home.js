import React from 'react';
import  "../style.css";
import AddToCart from './AddToCart';

const Home = () => 
{
  return (
    <div className="container">
       <AddToCart/>
      <h1> Home Component </h1>
      <div className = 'img-phone'>
      <img src = 'https://i.pinimg.com/736x/a7/c5/16/a7c516a342184f85a66f270ab3bdca5a.jpg'   
      />
      <h3> Iphone 14 : 1000$ </h3>
      <div className = 'CartButton'>
      <button className = 'btn btn-primary'> Add to Cart </button>
      </div>
      </div>
    </div>
  );
};

export default Home;
