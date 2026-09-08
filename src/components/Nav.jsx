import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <header className ="header">
            <div className="logo">
                <span className="logo-sour">SOUR</span>
                <span className="logo-up">UP</span>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/sours">Sours</Link>
                <a href="#Reviews">Reviews</a>
                <a href="#About">About</a>
                <a href = "$cart" className = "cart-icon">
                    <ShoppingBag size={20} />
                </a>
            </nav>
        </header>
    );
}

export default Nav;