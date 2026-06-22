import React from 'react'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    const navigate = useNavigate();
    const placeorder = () => {
        alert("Order Successfull! Thank you for shopping with us visit Again  ");
        navigate('/')
    }
    return (
        <div className='min-h-screen bg-gray-100 flex justify-center items-center p-10'>

            <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl'>
                <h1 className='text-3xl font-bold mb-6 text-center'>
                    Checkout
                </h1>

                <form className='flex flex-col gap-4'>

                    <input
                        type="text"
                        placeholder="Enter Your First Name"
                        className='border p-3 rounded-lg outline-none'
                    />

                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        className='border p-3 rounded-lg outline-none'
                    />

                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className='border p-3 rounded-lg outline-none'
                    />

                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className='border p-3 rounded-lg outline-none'
                    />

                    <textarea
                        placeholder="Enter Address"
                        className='border p-3 rounded-lg outline-none h-32'
                    ></textarea>

                    <button
                        onClick={placeorder}
                        className='bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 duration-300'
                    >
                        Place Order
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Checkout