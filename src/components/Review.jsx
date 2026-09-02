import { Star } from 'lucide-react';
import Child from '../assets/child1.jpg'
import Man1 from '../assets/man1.jpg';
import Man2 from '../assets/man2.jpg';

const reviews = [
  {
    id: 1,
    name: "Lily",
    image: Child,
    comment: "I love these gummies! They are so delicious and have the perfect balance of sweet and sour. I can't get enough of them!",
    flavor: "Strawberry Rush",
    quantity: "2 Pouch",
    price: "$12.00",
  },
  {
    id: 2,
    name: "Bradley",
    image: Man1,
    comment: "I love the assorted flavors in this pack. Each one is unique and delicious. I highly recommend trying them all!",
    flavor: "Assorted Flavors",
    quantity: "3 Pouch",
    price: "$33.00",
  },
  {
    id: 3,
    name: "Liroi",
    image: Man2,
    comment: "The sourness is just right, and the flavors are so vibrant. I can't stop eating them!",
    flavor: "Mango Tango",
    quantity: "2 Pouch",
    price: "$12.00",
  },
];

function Review() {
  return (
    <section className="review">
      <div className="review-header">
        <h2>What Our Customers Are Saying</h2>
      </div>

      <div className="review-container">
        {reviews.map((review) => (
         <div className="review-content" key={review.id}>
          <div className="review-top">
            <div className="review-who">
              <img src={review.image} alt={`${review.name}, happy customer`} className="review-img" />
              <h3>{review.name}</h3>
            </div>
            <div className="review-stars" aria-label="5 out of 5 stars">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
          </div>

          <p className="comments">"{review.comment}"</p>

          <div className="flavor-order">
            <span className="flavor">{review.flavor}</span>
            <span className="quantity">{review.quantity}</span>
            <span className="price">{review.price}</span>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Review;