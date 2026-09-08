import berry from '../assets/strawberry.jpg';   
import apple from '../assets/greenApple.jpg';  
import assorted from '../assets/assorted.png';  
import grape from '../assets/grape.jpg';
import blue from '../assets/blueberry.jpg';
import mango from '../assets/mango.jpg';


const getProducts = [
    {
        id: 1,
        name: "Strawberry Rush",
        price: "$5.99",
        image: berry,
        desc: "A sour punch that hits first, then melts into sweet, juicy strawberry. Not for the faint of tongue!",
        cardColor: "var(--color-pink)",
        bestSeller: true,
    },
    {
        id: 2,
        name: "Green Apple Shock",
        price: "$5.99",
        image: apple,
        desc: "Green Apple Shock is a tangy and sweet candy that will make your taste buds tingle with delight.",
        cardColor: "var(--color-green)",
        bestSeller: true,
    },
    {
        id: 3,
        name: "Assorted Fruit",
        price: "$10.99",
        image: assorted,
        desc: "Assorted Flavor is a mix of our most popular candies, perfect for sharing or enjoying on your own",
        cardColor: "var(--color-assorted)",
        bestSeller: true,
    },
    {
        id: 4,
        name: "Blueberry Blast",
        price: "$4.99",
        image: blue,
        desc: "Experience the burst of fresh blueberry flavor in every bite.",
        cardColor: "var(--color-blue)",
        bestSeller: false,
    },
    {
        id: 5,
        name: "Mango Tang",
        price: "$4.99",
        image: mango,
        desc: "Get a taste of the tropics with our juicy mango-flavored candy.",
        cardColor: "var(--color-mango)",
        bestSeller: false,
    },
    {
        id: 6,
        name: "Grape Voltage",
        price: "$4.99",
        image: grape,
        desc: "Experience the burst of fresh grape flavor in every bite.",
        cardColor: "var(--color-purple)",
        bestSeller: false,
    },
];

export default getProducts;