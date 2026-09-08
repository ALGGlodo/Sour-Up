import { motion } from 'motion/react';
import { Star, ChevronRight } from 'lucide-react';
import products from '../data/products';

function Products({ limit }) {
  const itemsToShow = limit ? products.slice(0, limit) : products;

  return (
    <section className="products" id="products">
      <div className="products-header">
        <h2 className="products-title">Our Sours</h2>
        <p className="products-subtitle">...</p>
      </div>

      <div className="product-container">
        {itemsToShow.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            style={{ backgroundColor: product.cardColor }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {product.bestSeller && <span className="best-seller">Best Seller</span>}

            <img src={product.image} alt={product.name} className="product-image" loading="lazy" />

            <div className="rating">
              <Star fill="#FF2D78" /><Star fill="#FF2D78" /><Star fill="#FF2D78" /><Star fill="#FF2D78" /><Star fill="#FF2D78" />
            </div>

            <div className="card-body">
              <div className="card-top-row">
                <h3 className="product-title">{product.name}</h3>
                <span className="price-pill">{product.price}</span>
              </div>
              <p className="product-desc">{product.desc}</p>
              <button className="add-cart-btn">
                Add to Bag <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Products;