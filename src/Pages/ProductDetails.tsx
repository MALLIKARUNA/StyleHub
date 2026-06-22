import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ProductDetails = ({ addCart }: any) => {

  const { id } = useParams()
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/19189138/pexels-photo-19189138.jpeg",
      name: "Casual Blue Shirt",
      price: 1299,
      color: "Blue"
    },

    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/a/6/u/l-1-no-jacket-06-mozero-original-imahh5zrgyghkghh.jpeg?q=70",
      name: "Mozero Men Relaxed Collar Casual Shirt",
      price: 481,
      color: "Black"
    },

    {
      id: 3,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/shirt/k/1/v/xxl-jiobble-jackbella-original-imahe6jfwmdjdjd4.jpeg?q=90",
      name: "JACKBELLA Casual Shirt",
      price: 878,
      color: "White"
    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/y/2/m-grey-shirt-m-ritz-original-imahnz2hgnshqj8w.jpeg?q=70",
      name: "Ritz Men Regular fit Checkered Casual Shirt",
      price: 339,
      color: "grey"
    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/q/d/l-formal-shirt-mantratextiles-collection-original-imahhn6hmrezh9fm.jpeg?q=70",
      name: "Manthra Textilie Formaml shirt ",
      price: 499,
      color: "Blue"
    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/k/n/l-warp-chex-nofilter-original-imahg84jrr4sbcdm.jpeg?q=70",
      name: "Nofilter Men Regular Fit casual Shirt",
      price: 241,
      color: "Sky Blue"
    },

    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/p/2/s-99691h-libas-original-imahg54tfczbzey4.jpeg?q=70",
      name: "Libas Women Cotton Blend Kurta Pant Dupatta Set",
      price: 785,
      color: "Red"
    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/l/y/t/s-yaari-blue-yb-011-shivament-original-imahmjzppeefnzej.jpeg?q=70",
      name: " Women Georgette Kurta Sharara Dupatta Set",
      price: 802,
      color: "Blue"
    },
    {
      id: 9,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/z/7/5/s-hop-es-2513-house-of-pataudi-original-imah9h9ppdskehmw.jpeg?q=70",
      name: " House of Pataudi Women Polyester Kurta Pant Dupatta Set",
      price: 898,
      color: "Pink"
    },
    {
      id: 10,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/f/t/xl-lm331wne-pinfit-original-imahhhhgehazhvkd.jpeg?q=70",
      name: "  Pinfit Women Kurta Pant Dupatta Set",
      price: 650,
      color: "Chocalate"
    },
    {
      id: 11,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/o/g/p/xl-s-f-332-kdnnow-original-imahjc87tnzvux7r.jpeg?q=70",
      name: "Kdnow Women A-Line Kurta Set",
      price: 724,
      color: "White and blue"

    },
    {
      id: 12,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/2/j/3xl-embroidary-cord-set-rust-rk-jai-original-imahkgf6ap7zyddu.jpeg?q=70",
      name: "  Women Embroidery Cord Set",
      price: 636,
      color: "Rust"
    }

  ]

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [selectedSize, setSelectedSize] = useState("")
  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select size")
      return
    }

    navigate("/Cheackout")
  }



  return (
    <div className='min-h-screen bg-gray-100 p-10'>

      <div className='bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-20'>

        <div className='flex-1'>
          <img
            src={product?.image}
            alt={product?.name}
            className='w-full h-[600px] object-cover rounded-2xl'
          />
        </div>


        <div className='flex-1'>

          <h1 className='text-4xl font-bold'>
            {product?.name}
          </h1>

          <p className='text-2xl text-amber-500 font-bold mt-4'>
            {product?.price}
          </p>

          <p className='mt-4 text-lg'>
            Color:
            <span className='font-semibold ml-2'>
              {product?.color}
            </span>
          </p>
          <div className='mt-6'>
            <h2 className='text-xl font-semibold mb-3'>
              Select Size
            </h2>

            <div className='flex gap-4'>

              <button
                onClick={() => setSelectedSize("S")}
                className='border px-5 py-2 rounded-lg'>
                S
              </button>

              <button
                onClick={() => setSelectedSize("M")}
                className='border px-5 py-2 rounded-lg'>
                M
              </button>

              <button
                onClick={() => setSelectedSize("L")}
                className='border px-5 py-2 rounded-lg'>
                L
              </button>

              <button
                onClick={() => setSelectedSize("XL")}
                className='border px-5 py-2 rounded-lg'>
                XL
              </button>

              <button
                onClick={() => { setSelectedSize("XXL") }}
                className='border px-5 py-2 rounded-lg'>
                XXL
              </button>

            </div>
          </div>
          <div className='flex gap-4 mt-10'>

            <button
              onClick={() => {
                if (selectedSize === "") {
                  alert("please select size")
                  return
                }
                addCart({ ...product, size: selectedSize })
              }}
              className='bg-amber-400 px-8 py-3 rounded-lg'
            >
              Add To Cart
            </button>

            <button
              onClick={() => {
                if (selectedSize === "") {
                  alert("please select size")
                  return
                }
                navigate("/Cheackout")
              }}
              className='bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 duration-300'>
              Buy It Now
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails