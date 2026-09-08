import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Berry from '../assets/berry_nobg.png';  
import Grape from '../assets/grape_nobg.png';
import Products from '../components/Products';
import './Sours.css';


function SoursPage() {
  return (
    <div>
      <Nav />
      <main>
      <section className="sours-showcase">
          <div className="sours-header">
            <h1>Meet The Sour Squad</h1>
            <p>Bold, tangy, and dangerously easy to finish the bag!</p>
          </div>
          <div className="images-rigth">
            <img src={Berry} alt="Sour Candy" />
            <img src={Grape} alt="Sour Candy" />
          </div>
      </section>
        <Products />
       </main>
      <Footer />
    </div>      
  );
}

export default SoursPage;