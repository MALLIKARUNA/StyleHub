
import { Link } from 'react-router-dom'
import logo from '../assets/Images/Logo.png'

interface NavbarProps {
  cartCount: number
}

const Navbar = ({ cartCount }: NavbarProps) => {
    return (
        <nav className='bg-amber-400 flex justify-between items-center px-10 py-3 shadow-sm'>

            {/* Logo */}
            <img
                src={logo}
                alt="logo"
                className='w-30'
            />

            {/* Links */}
            <div className='flex items-center gap-8 text-base fon'>

                <Link to="/" className='hover:text-white duration-300'>
                    Home
                </Link>

                <Link to="/men" className='hover:text-white duration-300'>
                    Men
                </Link>

                <Link to="/women" className='hover:text-white duration-300'>
                    Women
                </Link>


                <Link to="/cart" className='hover:text-white duration-300'>
                    Cart {cartCount > 0 && `(${cartCount})`}
                </Link>

            </div>
        </nav>
    )
}

export default Navbar