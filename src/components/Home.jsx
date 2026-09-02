import { ChevronRight } from 'lucide-react';
import { Star } from 'lucide-react';
import Child1 from '../assets/child1.jpg';
import Man1 from '../assets/man1.jpg';
import Man2 from '../assets/man2.jpg';
import Woman1 from '../assets/woman1.jpg';
import HeroPouch from '../assets/assorted.png';

function Home(){
    return(
       <section className="homepage">
         <div className="hero-bg"></div>
          <div className="hero-container">
            <div className="hero-left">
            <div className="homepage-banner">
                <h1 className="homepage-header"><span className="logo-pink">SOUR UP </span> <br /> YOUR TASTE BUDS.</h1>
                <p className="hero-subhead">Real fruit flavor with a sour punch that doesn't quit. Sweet, tangy, and dangerously easy to finish the bag.</p>
            </div>
          <div className="hero-cta">
                <button className="cta-button">Get Yours Now <ChevronRight className="arrow" /></button>
          </div>

          <div className="reviews">
            <div className="reviews-avatars">
                <img src={Child1} alt="child1" className="reviews-avatar" />
                <img src={Man1} alt="Man1" className="reviews-avatar" />
                <img src={Man2} alt="Man2" className="reviews-avatar" />
                <img src={Woman1} alt="Woman1" className="reviews-avatar" />
            </div>

            <div className="review-info">
                <div className="review-stars">
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                </div>
                 <p className="review-text">5,000+ Happy Snackers</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
            <img src={HeroPouch} alt="SOUR UP candy pouch" className="hero-product-img" />
            <div className="fact-banner">
                <span>5 Flavors</span>
                <span className="divider"></span>
                <span>100% Real Fruit</span>
                <span className="divider"></span>
                <span>Less Sugar</span>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Home;