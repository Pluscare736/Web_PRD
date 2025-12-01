import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="space-y-2">
        <div>
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 group"
        >
          <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
