import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({ foods }) {
    return (
        <div>
            <ul>
                {
                    foods.map((food) => <FoodListItem key={food.no} name={food.name} count={food.count} />)
                }
            </ul>
        </div>
    );
}

export default FoodList;