import React from 'react'

function MenuList({ menu = {} }) {
    // display the menu items according to the categories in the menu object
    //first check if the menu object is empty
    if (Object.keys(menu).length === 0) {
        return <div>Menu is empty</div>
    }
    //if the menu object is not empty, display the menu items
    //first get the categories from the menu object
    const categories = Object.keys(menu);
    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>
                    <h4>{category}</h4>
                    <ul>
                        {Array.isArray(menu[category]) ? (
                            menu[category].map((item, index) => (
                                <li key={index}>
                                    {item.name} - ${item.price}
                                </li>
                            ))
                        ) : (
                            <li>No items available</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default MenuList