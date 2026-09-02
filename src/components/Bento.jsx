import Box from '../assets/Sour_box.jpg';
import Eating from '../assets/bento1.jpg';
import Word from '../assets/sour_word.jpg';
import Sour from '../assets/Eat_sour.jpg';
function Bento() {
    return(
        <section className="bento">
            <div className="bento-grid">

                <div className="bento-item bento-large">
                    <img src={Box} alt="SOUR UP candy" className="bento-img" />
                </div>

                 <div className="bento-item bento-text bento-pink">
                    <h3>5 Bold Flavors</h3>
                    <p>From tangy mango to electric blue raspberry.</p>
                </div>

                <div className="bento-item bento-tall">
                    <img src={Eating} alt="SOUR UP candy close-up" className="bento-img" />
                </div>

                <div className="bento-item bento-text bento-green">
                    <h3>Real Fruit Based</h3>
                    <p>No artificial nonsense, just real fruit flavor.</p>
                 </div>

                <div className="bento-item bento-wide">
                    <img src={Word} alt="SOUR UP candy pouch" className="bento-img" />
                </div>
                
                <div className="bento-item bento-wide">
                    <img src={Sour} alt="SOUR UP candy pouch" className="bento-img" />
                </div>
            </div>
        </section>
    
    );
}

export default Bento;