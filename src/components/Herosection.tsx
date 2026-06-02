
import background from '../assets/Images/background.png'
const Herosection = () => {
    const HandleScrooll = () => {
        const Section = document.getElementById('ProductCard')
        Section?.scrollIntoView({
            behavior: 'smooth'
        })
    }
    return (
        <div
            className='h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center relative'
            style={{
                backgroundImage: `url(${background})`
            }}
        >


            <div className='absolute inset-0 bg-black/30'></div>


            <div className='relative z-10 text-white'>
                <h1 className='text-5xl md:text-7xl font-bold'>
                    Welcome to StyleHub
                </h1>

                <p className='mt-4 text-lg md:text-2xl'>
                    Discover Trendy Fashion for Men & Women
                </p>

                <button onClick={HandleScrooll} className='mt-6 bg-amber-400 text-black px-8 py-4 cursor-pointer rounded-full text-lg font-medium hover:bg-amber-500 duration-300'>
                    Shop Now
                </button>
            </div>
        </div>

    )
}

export default Herosection