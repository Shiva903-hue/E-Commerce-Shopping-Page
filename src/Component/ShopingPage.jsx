// src/components/ShopingPage.jsx
import React, { useState, useEffect } from 'react';
import ProductsData from '../assets/ProductsData.json';
import CategorySection from './CategorySection';
import BrandFilterSection from './BrandFilterSection';
import FilterSection from './FilterSection';
import ProductGrid from './ProductGrid';

const ShopingPage = () => {
  // Brand mapping by category
  const brandsByCategory = {
    "Mens Clothing": ["Nike", "Adidas", "Puma", "Levi's", "Zara", "H&M", "Uniqlo", "Tommy Hilfiger"],
    "Jewelry": ["Tiffany & Co.", "Cartier", "Pandora", "Swarovski", "Bvlgari", "Chopard", "Mikimoto", "Harry Winston"],
    "Laptops": ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "Microsoft", "MSI"],
    "Mobiles": ["Apple", "Samsung", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Motorola", "Google"]
  };

  // State management
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [filters, setFilters] = useState({
    maxPrice: '',
    minRating: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);

  const PRODUCTS_PER_PAGE = 8;

  // Get unique categories from data
  const categories = [...new Set(ProductsData.map(product => product.category))];

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = ProductsData;

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Price filter
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    // Rating filter
    if (filters.minRating) {
      filtered = filtered.filter(product => product.rating >= parseFloat(filters.minRating));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, selectedBrand, filters]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedBrand(''); // Reset brand when category changes
  };

  // Handle brand change
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Get available brands for selected category
  const availableBrands = selectedCategory ? brandsByCategory[selectedCategory] || [] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          <p className="text-gray-600 mt-2">Discover amazing products across all categories</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Section */}
        <CategorySection
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Brand Filter Section - Only show if category is selected */}
        {selectedCategory && (
          <BrandFilterSection
            brands={availableBrands}
            selectedBrand={selectedBrand}
            onBrandChange={handleBrandChange}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid
              products={paginatedProducts}
              totalProducts={filteredProducts.length}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingPage;