import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { PROPERTYLISTINGSAMPLE } from '../constants/index';

const ListingPage: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
    property.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Property Listings</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search properties..."
            className="border p-2 w-full"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{property.name}</h3>
                <p className="text-sm text-gray-600">
                  {property.address.city}, {property.address.country}
                </p>
                <p className="text-lg font-semibold">${property.price}/night</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ListingPage;
