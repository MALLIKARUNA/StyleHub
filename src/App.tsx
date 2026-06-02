import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

import Men from './Pages/Men'
import Women from './Pages/Women'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
const App = () => {
    return (
        <div>

            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default App