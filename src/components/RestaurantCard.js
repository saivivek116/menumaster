import React from 'react';
import '../styles/RestaurantCard.css';

const RestaurantCard = ({ restaurant, onSelect }) => {
  return (

    <div className="restaurant-card" onClick={() => onSelect(restaurant)}>
      {/* <img src=""></img> */}

      <h3>
        {restaurant.name}
        <span className='rating' title='rating'>⭐️{restaurant.rating}</span>
      </h3>
      <p className='cuisine'>cusine:{restaurant.cuisine}</p>
    </div>

  );
};

export default RestaurantCard;