import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Star } from 'lucide-react';
import berry from '../assets/strawberry.jpg';   
import apple from '../assets/greenApple.jpg';  
import assorted from '../assets/assorted.png';   

function Products(){
    return (
       <section className="products" id="products">
            <div className="products-header">
                <h1 className="products-title">OUR <span className="product-mix">BEST SOURS</span></h1>
                <p className="products-subtitle">
                SOUR UP your taste buds with our deliciously tangy and sweet candy.
                Made with real fruit, our candy is a guilt-free indulgence that will leave you wanting more.
                </p>
            </div>

            <div className="product-container">
            <motion.div
                className="product-card card-strawberry"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="best-seller">Best Seller</span>

                    <img src={berry} alt="Strawberry Rush candy" className="product-image" />

                    <div className="rating">
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                    </div>

                    <div className="card-body">
                        <div className="card-top-row">
                        <h3 className="product-title">Strawberry <br />Rush</h3>
                        <span className="price-pill">$5.99</span>
                        </div>

                        <p className="product-desc">
                        A sour punch that hits first, then melts into sweet, juicy strawberry. Not for the faint of tongue!
                        </p>

                        <div className="tag-row">
                        <span className="tag tag-fire">🔥 Best Seller</span>
                        <span className="tag tag-stock">9 left</span>
                        </div>

                        <button className="add-cart-btn">
                        Add to Bag 
                        </button>
                    </div>
            </motion.div>

            <motion.div
                className="product-card card-assorted"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="best-seller">Best Seller</span>

                    <img src={assorted} alt="Assorted candy" className="product-image" />

                    <div className="rating">
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                    </div>

                    <div className="card-body">
                        <div className="card-top-row">
                        <h3 className="product-title">Assorted <br />Flavor</h3>
                        <span className="price-pill">$10.99</span>
                        </div>

                        <p className="product-desc">
                        Assorted Flavor is a mix of our most popular candies, perfect for sharing or enjoying on your own.
                        </p>

                        <div className="tag-row">
                        <span className="tag tag-fire"> Best Seller</span>
                        <span className="tag tag-stock">12 left</span>
                        </div>

                        <button className="add-cart-btn">
                        Add to Bag 
                        </button>
                    </div>
            </motion.div>

            <motion.div
                className="product-card card-apple"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="best-seller">Best Seller</span>

                    <img src={apple} alt="Green Apple candy" className="product-image" />

                    <div className="rating">
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                        <Star className="star" fill="currentColor" />
                    </div>

                    <div className="card-body">
                        <div className="card-top-row">
                        <h3 className="product-title">Green Apple <br />Shock</h3>
                        <span className="price-pill">$5.99</span>
                        </div>

                        <p className="product-desc">
                        Green Apple Shock is a tangy and sweet candy that will make your taste buds tingle with delight.
                        </p>

                        <div className="tag-row">
                        <span className="tag tag-fire"> Best Seller</span>
                        <span className="tag tag-stock">15 left</span>
                        </div>

                        <button className="add-cart-btn">
                        Add to Bag
                        </button>
                    </div>
            </motion.div>
        </div>
          <div className="products-btn">
                 <button className="view-all-btn">
                    View All Sours <ChevronRight size={18} />
                </button>
            </div>
    </section>
    );
}

export default Products;