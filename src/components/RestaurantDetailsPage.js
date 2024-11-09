import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/RestaurantDetails.css';
import MenuList from './MenuList';
import { getRestaurantMenu } from '../utils/constants';

const RestaurantDetailsPage = ({ restaurant }) => {
  // const location = useLocation();
  // const { id, name, cuisine } = location.state || {};
  // const navigate = useNavigate();

  // const { id } = useParams();
  // const [menu, setMenu] = useState({});

  // const [menu, setMenu] = useState(getRestaurantMenu(id));
  // console.log(menu);
  // useEffect(() => {
  //   fetchRestaurantMenu(id);
  // }, [id]);

  // const fetchRestaurantMenu = async (id) => {
  //   const response = await fetch(`http://127.0.0.1:8000/restaurants/${id}/menu/`);
  //   const data = await response.json();
  //   setMenu(data);
  // }

  return (
    <>
      <div className="restaurant-details">
        {/* <div>
          <button onClick={() => navigate('/')}>view Restaurants</button>
        </div> */}
        {
          Object.keys(restaurant.menu) === 0 ? <p> Restaurant Details not found</p> :
            <>
              <h2>{restaurant.name}</h2>
              <p>Cuisine: {restaurant.cuisine}</p>
              <h3>Menu</h3>
              <ul>
                <MenuList menu={restaurant.menu} />
              </ul>
            </>
        }
      </div>
    </>
  );
};

export default RestaurantDetailsPage;
