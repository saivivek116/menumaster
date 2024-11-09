import { createContext, useState } from "react"

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    return (
        <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default RestaurantContext;