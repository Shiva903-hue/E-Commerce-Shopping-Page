// src/components/BrandFilterSection.jsx
import React from 'react';

const BrandFilterSection = ({ brands, selectedBrand, onBrandChange }) => {

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Brands</h2>
      <div className="flex flex-wrap gap-3">
        {/* All Brands Button */}
        <button
          onClick={() => onBrandChange('')}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedBrand === ''
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Brands
        </button>

        {/* Individual Brand Buttons */}
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => onBrandChange(brand)}
            className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedBrand === brand
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-sm">{brand}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandFilterSection;