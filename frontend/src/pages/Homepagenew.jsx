import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

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
            <h1>Welcome to Our E-commerce Website</h1>
            <p>Browse our products and find the best deals.</p>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        
                        {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '70%', height: '70%', objectFit: 'cover' }}
                                />
                            )}
                          <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: Rs {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;


