import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // const restaurantlist = fetch('')
    fetchRestaurants();
  }, [])

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/restaurants/');
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, id) => (
            <RestaurantCard
              key={id}
              restaurant={restaurant}
              onSelect={() => { navigate(`/restaurant/${id}`, { state: restaurant }) }}
            />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  )
}

export default HomePage