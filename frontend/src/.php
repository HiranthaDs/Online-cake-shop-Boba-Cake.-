import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the PHP API
        fetch('http://localhost/api.php')
            .then(response => response.json())  // Parse the JSON response
            .then(data => {
                setProducts(data);  // Set products data
            })
            .catch(error => {
                console.error('Error fetching products:', error);  // Handle any errors
            });
    }, []);  // Empty array ensures this runs once on component mount

    return (
        <div>
            <h1>Products</h1>
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product._id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p><strong>{product.price} LKR</strong></p>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>  // Show this if no products are available
                )}
            </div>
        </div>
    );
};

export default Products;
