import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { useState } from 'react'
import Men from './Pages/Men'
import Women from './Pages/Women'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Cheackout from './Pages/Cheackout'
import PageNotFound from './Pages/PageNotFound'
const App = () => {
    const [cartItems, setCartItems] = useState<any[]>([])

    const addCart = (product: any) => {
        setCartItems((prev: any) => [...prev, product])
    }
    const removeCart = (index: number) => {
        setCartItems((prev: any) =>
            prev.filter((_: any, i: number) => i !== index)
        )
    }
    return (
        <div className='min-h-screen flex flex-col'>

            <Navbar cartCount={cartItems.length} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/productdetails/:id" element={<ProductDetails addCart={addCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeCart={removeCart} />} />
                <Route path="/Cheackout" element={<Cheackout />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App