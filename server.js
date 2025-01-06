// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Midleware
app.use(cors());
app.use(bodyParser.json());

const products = [
  {
    id: 1,
    name: "Classic Milk Tea",
    description: "A rich and creamy milk tea with chewy boba pearls.",
    price: 500,
    imageUrl: "https://www.health.com/thmb/oFbdnkg81K22zRilx0K2PQfFT78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Boba-Tea-5b1f1d8b46e0fb00260769c8.jpg"
  },
  {
    id: 2,
    name: "Green Tea Boba",
    description: "A refreshing green tea blend with chewy boba pearls.",
    price: 550,
    imageUrl: "https://cdn.pixabay.com/photo/2020/07/14/12/30/bubble-tea-5412686_960_720.jpg"
  },
  {
    id: 3,
    name: "Taro Milk Tea",
    description: "A delicious taro-flavored milk tea with chewy pearls.",
    price: 600,
    imageUrl: "https://www.thespruceeats.com/thmb/5hxF2dN3DE7mmPmyAfMlGFtqGGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taro-bubble-tea-556217077-5a8467056d39d80036b51972.jpg"
  },
  {
    id: 4,
    name: "Mango Green Tea",
    description: "A sweet and tropical mango-flavored green tea with boba pearls.",
    price: 650,
    imageUrl: "https://cdn.pixabay.com/photo/2018/07/13/10/01/bubble-3531380_960_720.jpg"
  },
  {
    id: 5,
    name: "Brown Sugar Milk Tea",
    description: "A rich milk tea with a caramelized brown sugar taste.",
    price: 700,
    imageUrl: "https://images.unsplash.com/photo-1593944868769-215c31e23835"
  }
];

let cart = [];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.post('/api/cart', (req, res) => {
  const { itemId, quantity } = req.body;
  const product = products.find(p => p.id === itemId);

  if (product) {
    // Add product to cart, or increase quantity if already in cart
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    res.status(200).json({ message: "Item added to cart", cart });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.delete('/api/cart/:itemId', (req, res) => {
  const { itemId } = req.params;
  cart = cart.filter(item => item.id !== parseInt(itemId));
  res.status(200).json({ message: "Item removed from cart", cart });
});

app.delete('/api/cart', (req, res) => {
  cart = [];
  res.status(200).json({ message: "Cart cleared", cart });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
