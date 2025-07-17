interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  }
];

export type { Product, Category };

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    description: 'Advanced smartwatch with health monitoring features',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: '3',
    name: 'Premium T-Shirt',
    price: 29.99,
    description: 'Comfortable cotton t-shirt with modern fit',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Clothing',
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 129.99,
    description: 'Lightweight running shoes for optimal performance',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Sports',
    inStock: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 89.99,
    description: 'Automatic coffee maker with programmable settings',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'Home & Garden',
    inStock: true,
    rating: 4.2,
    reviews: 74
  },
  {
    id: '6',
    name: 'Laptop Backpack',
    price: 59.99,
    description: 'Durable backpack with laptop compartment',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.4,
    reviews: 92
  }
];
