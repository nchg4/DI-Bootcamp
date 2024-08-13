import React from 'react';
import { useSelector } from 'react-redux';

const CategorySelector = () => {
    const categories = useSelector(state => state.categories);

    return (
        <select>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategorySelector;