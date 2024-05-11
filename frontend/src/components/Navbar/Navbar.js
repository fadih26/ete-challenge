import Styles from './Navbar.module.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [collapesed, setCollapsed] = useState(false);

    useEffect(() => {
        function updateSize() {
            if (window.innerWidth > 600) {
                setCollapsed(false)
            }

        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const toggleClasses = [Styles.linksWrapperMobile, collapesed ? Styles.activeNav : ''].join(' ');
    const bar1 = [Styles.line1, collapesed ? Styles.a : ''].join(' ');
    const bar2 = [Styles.line2, collapesed ? Styles.a : ''].join(' ');
    const bar3 = [Styles.line3, collapesed ? Styles.a : ''].join(' ');

    return (
        <header className={Styles.header}>
            <nav className={Styles.navBar}>
                <a
                    className={Styles.logoContainer}
                    href="/"
                    aria-label="Go to homepage">

                    NexaMarket

                </a>
                <ul className={Styles.linksWrapper}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='products'>Products</Link></li>
                    <li>
                        <div className={Styles.icons}>
                            <Link to="/search"><FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} /></Link>
                            <Link to="/user"><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /></Link>
                            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} /></Link>
                        </div>
                    </li>

                </ul>
                <ul className={toggleClasses}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='products'>Products</Link></li>
                    <li>
                        <div className={Styles.icons}>
                            <Link to="/search"><FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} /></Link>
                            <Link to="/user"><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /></Link>
                            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} /></Link>
                        </div>
                    </li>
                </ul>

                <div className={Styles.burgerButton} onClick={() => setCollapsed(!collapesed)}>
                    <div className={bar1}></div>
                    <div className={bar2}></div>
                    <div className={bar3}></div>
                </div>

            </nav>
        </header>
    )
}


export default Navbar