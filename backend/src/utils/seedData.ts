import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';
import User from '../models/User';

dotenv.config();

const products = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    name: 'Smart Watch',
    description: 'Advanced smartwatch with health monitoring features',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    name: 'Premium T-Shirt',
    description: 'Comfortable cotton t-shirt with modern fit',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Clothing',
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight running shoes for optimal performance',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Sports',
    inStock: false,
    rating: 4.6,
    reviews: 156
  },
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with programmable settings',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'Home & Garden',
    inStock: true,
    rating: 4.2,
    reviews: 74
  },
  {
    name: 'Laptop Backpack',
    description: 'Durable backpack with laptop compartment',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.4,
    reviews: 92
  }
];

const seedData = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/flipit-ecommerce';
    await mongoose.connect(mongoURI);
    
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    
    // Insert products
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    
    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@flipit.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('Admin user created:', adminUser.email);
    
    // Create test user
    const testUser = await User.create({
      name: 'Test User',
      email: 'user@flipit.com',
      password: 'user123',
      role: 'user'
    });
    console.log('Test user created:', testUser.email);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
