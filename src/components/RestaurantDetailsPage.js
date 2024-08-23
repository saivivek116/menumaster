import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/RestaurantDetails.css';
import MenuList from './MenuList';

const RestaurantDetailsPage = (props) => {
  const location = useLocation();
  const { id, name, cuisine } = location.state || {};

  // const { id } = useParams();
  const [menu, setMenu] = useState({});


  useEffect(() => {
    fetchRestaurantMenu(id);
  }, [id]);

  const fetchRestaurantMenu = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/restaurants/${id}/menu/`);
    const data = await response.json();
    setMenu(data);
  }

  return (
    <>
      <div className="restaurant-details">
        <h2>{name}</h2>
        <p>Cuisine: {cuisine}</p>
        <h3>Menu</h3>
        <ul>
          <MenuList menu={menu} />
        </ul>
      </div>
    </>
  );
};

export default RestaurantDetailsPage;
