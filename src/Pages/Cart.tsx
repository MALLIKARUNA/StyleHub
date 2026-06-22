
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
interface CartProps {
    cartItems: any[]
    removeCart: (index: number) => void
}


const Cart = ({ cartItems, removeCart }: CartProps) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
    const navigate = useNavigate()
    return (
        <div className='min-h-screen bg-gray-50 p-10 flex flex-col items-center'>
            <div className='w-full max-w-4xl bg-white shadow-md rounded-2xl p-8'>
                <h1 className='text-3xl font-bold mb-6 text-gray-800 border-b pb-4'>Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className='text-center py-16'>
                        <p className='text-xl text-gray-500 mb-6'>Your cart is empty.</p>
                        <Link
                            to="/"
                            className='bg-amber-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 duration-300'
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-6 border-b pb-4 last:border-0 last:pb-0'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-20 h-24 object-cover rounded-lg'
                                    />
                                    <div className='flex-1'>
                                        <h2 className='text-xl font-semibold text-gray-800'>{item.name}</h2>
                                        <p className='text-gray-500 text-sm mt-1'>Color: {item.color}</p>
                                    </div>
                                    <div className='text-right flex flex-col items-end gap-2'>
                                        <p className='text-lg font-bold text-amber-500'>{item.price}</p>
                                        <button
                                            onClick={() => removeCart(index)}
                                            className='text-red-500 cursor-pointer hover:text-red-700 text-sm font-semibold transition-colors duration-300'
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
                            <div className='text-xl font-semibold text-gray-800'>
                                Total Items: <span className='text-amber-500 font-bold'>{cartItems.length}</span>
                                Total price: <span className='text-amber-500 font-bold'>{totalPrice}</span>
                            </div>

                            <button
                                onClick={() => {
                                    navigate('/Cheackout')
                                }}
                                className='w-full md:w-auto cursor-pointer bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 duration-300'>
                                Buy now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart