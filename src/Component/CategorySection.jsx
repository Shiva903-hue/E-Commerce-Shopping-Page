// src/components/CategorySection.jsx
import React from 'react';

const CategorySection = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {/* All Categories Button */}
        <button
          onClick={() => onCategoryChange('')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === ''
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Categories
        </button>

        {/* Individual Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;