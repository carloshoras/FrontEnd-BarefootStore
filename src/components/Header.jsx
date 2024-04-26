import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <div class='navMenu'>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/'>Mens</Link>
                    <Link to='/'>Womens</Link>
                    <Link to='/'>About Us</Link>
                </div>
                <input class='searchBar' type='text' />
                <div class='interactive'>
                    <Link to='/login'>Sign In</Link>
                    <Link to='/register'>Sign Up</Link>
                    <Link to='/logout'>Log Out</Link>
                    <a href=''><img class='cart' src='src/assets/icons/cart.png' /></a>
                </div>
            </nav>
        </header>
    )
}

export default Header