'use client';
import React, { useEffect, useState } from 'react';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/menu')
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch menu:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 playfair-display">Our Delicious Menu</h1>
          <p className="mt-2 text-gray-600 text-lg playfair-display">Explore our handcrafted dishes</p>
        </div>

        {/* Loading / Empty / Grid */}
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading menu...</p>
        ) : menuItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No menu items found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 font-serif mb-2">{item.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description || 'A delicious item made with love and the freshest ingredients.'}
                  </p>
                </div>
                <div className="mt-6 text-right">
                  <span className="inline-block bg-red-900 text-white text-sm font-medium px-4 py-1 rounded-full shadow-sm">
                    {item.price ? `$${parseFloat(item.price).toFixed(2)}` : '—'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
