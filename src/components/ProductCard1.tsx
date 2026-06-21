import { Link } from 'react-router-dom'

const ProductCard1 = () => {
    return (
        <div className='px-10  py-16 bg-gray-100'>
            <div className='flex justify-center items-center gap-8 flex-wrap'>

                <Link to="/productdetails/7">
                    <div className='bg-white p-4 cursor-pointer rounded-2xl shadow-lg hover:scale-105 duration-300 w-[320px] h-[570px]'>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/p/2/s-99691h-libas-original-imahg54tfczbzey4.jpeg?q=70" alt="" />
                        <h2 className='text-2xl font-semibold mt-2'>
                            LIBAS Women Cotton Blend Kurta Pant Dupatta Set
                        </h2>
                        <p className='text-amber-600 text-xl font-bold mt-2'>
                            ₹785
                        </p>
                    </div>
                </Link>
                <Link to="/productdetails/8">
                    <div className='bg-white p-4 cursor-pointer rounded-2xl shadow-lg hover:scale-105 duration-300 w-[320px] h-[570px]'>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/l/y/t/s-yaari-blue-yb-011-shivament-original-imahmjzppeefnzej.jpeg?q=70" alt="" />
                        <h2 className='text-2xl font-semibold mt-2'>
                            Women Georgette Kurta Sharara Dupatta Set
                        </h2>
                        <p className='text-amber-600 text-xl font-bold mt-2'>
                            ₹802
                        </p>
                    </div>
                </Link>
                <Link to="/productdetails/9">
                    <div className='bg-white p-4 cursor-pointer rounded-2xl shadow-lg hover:scale-105 duration-300 w-[320px] h-[570px]'>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/z/7/5/s-hop-es-2513-house-of-pataudi-original-imah9h9ppdskehmw.jpeg?q=70" alt="" />
                        <h2 className='text-2xl font-semibold mt-2'>
                            House of Pataudi Women Polyester Kurta Pant Dupatta Set
                        </h2>
                        <p className='text-amber-600 text-xl font-bold mt-2'>
                            ₹898
                        </p>
                    </div>
                </Link>
                <Link to="/productdetails/10">
                    <div className='bg-white p-4 cursor-pointer rounded-2xl shadow-lg hover:scale-105 duration-300 w-[320px] h-[570px]'>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/f/t/xl-lm331wne-pinfit-original-imahhhhgehazhvkd.jpeg?q=70" alt="" />
                        <h2 className='text-2xl font-semibold mt-2'>
                            Pinfit Women Kurta Pant Dupatta Set
                        </h2>
                        <p className='text-amber-600 text-xl font-bold mt-2'>
                            ₹650
                        </p>
                    </div>
                </Link>
                <Link to="/productdetails/11">
                    <div className='bg-white p-4 cursor-pointer rounded-2xl shadow-lg hover:scale-105 duration-300 w-[320px] h-[570px]'>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/o/g/p/xl-s-f-332-kdnnow-original-imahjc87tnzvux7r.jpeg?q=70" alt="" />
                        <h2 className='text-2xl font-semibold mt-2'>
                            KDnOw Women A-Line Kurta Set
                        </h2>
                        <p className='text-amber-600 text-xl font-bold mt-2'>
                            ₹724
                        </p>
                    </div>
                </Link>
                <Link to="/productdetails/12">
                    <div className='bg-white p-4 cursor-pointer rounded-2xl shadow-lg hover:scale-105 duration-300 w-[320px] h-[570px]'>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/2/j/3xl-embroidary-cord-set-rust-rk-jai-original-imahkgf6ap7zyddu.jpeg?q=70" alt="" />
                        <h2 className='text-2xl font-semibold mt-2'>
                            RK-JAI Women Kurta Pant Dupatta Set
                        </h2>
                        <p className='text-amber-600 text-xl font-bold mt-2'>
                            ₹636
                        </p>
                    </div>
                </Link>
            </div>

        </div>

    )
}

export default ProductCard1