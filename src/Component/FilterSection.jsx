// src/components/FilterSection.jsx
import React from 'react';

const FilterSection = ({ filters, onFilterChange }) => {
  const handleMaxPriceChange = (e) => {
    onFilterChange({
      ...filters,
      maxPrice: e.target.value
    });
  };

  const handleMinRatingChange = (e) => {
    onFilterChange({
      ...filters,
      minRating: e.target.value
    });
  };

  const clearFilters = () => {
    onFilterChange({
      maxPrice: '',
      minRating: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Maximum Price
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            $
          </span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Enter max price"
            min="0"
            step="0.01"
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Minimum Rating
        </label>
        <select
          value={filters.minRating}
          onChange={handleMinRatingChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
        >
          <option value="">Any Rating</option>
          <option value="1">1+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>

      {/* Active Filters Display */}
      {(filters.maxPrice || filters.minRating) && (
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h3>
          <div className="space-y-1">
            {filters.maxPrice && (
              <div className="text-sm text-gray-600">
                Price: Up to ${filters.maxPrice}
              </div>
            )}
            {filters.minRating && (
              <div className="text-sm text-gray-600">
                Rating: {filters.minRating}+ Stars
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;