import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import ImgMediaCard from '../components/ImgMediaCard';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();
    }, []);

    const fetchProducts = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/accounts/products/');
          setProducts(response.data);
      } catch (error) {
          console.error('Error fetching products:', error);
      }
  };

    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <div className="banner-text">
                    
                </div>
            </div>
            <div className="product-intro">
                <h2>Featured Products</h2>
                <p>Explore our top picks of the season.</p>
            </div>
            <div className="product-list">
                {products.map((product) => (
                    <ImgMediaCard
                        key={product.id}
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;


