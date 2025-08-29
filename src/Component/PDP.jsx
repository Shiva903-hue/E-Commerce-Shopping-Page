import React, { useState,useRef } from "react";
import { ArrowLeft, StarIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function PDP() {

  const { state: product } = useLocation(); // Get product from navigation

  const [selectedSize, setSelectedSize] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

    // Handle mouse move for zoom effect
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  if (!product) {
    return <h2>No product found</h2>;
  }
  // Rating stars renderer
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      
      <Link to="/">
      <button className=" bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors"> <ArrowLeft/> </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[580px] ">
        {/* Product Image Section */}
        <div onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        className="rounded-lg overflow-hidden">
          <img
            ref={imageRef}
          src={product.image}
          alt={product.product_name}
            className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
          style={
            isHovering 
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                  // transformOrigin:  "100% 100% 50px"
                }
              : {}
          }
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col space-y-6">
          {/* Brand and Title */}
          <div>
            <h3 className="text-sm text-gray-500">{product.brand}</h3>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              {product.product_name}
            </h1>
          </div>
          <div>
            <p className="mt-2 text-gray-600">{product.details}</p>
          </div>
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-gray-500">({product.rating})</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Select Size</h3>

           {product.category === 'Mens Clothing'&& <div className="grid grid-cols-4 gap-2 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-sm font-medium rounded-md ${
                    selectedSize === size
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
}
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
          <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors">
            Buy Now
          </button>

          {/* Product Description */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Hilight</h3>
            <p className="mt-2 text-gray-600">{product.hilight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
