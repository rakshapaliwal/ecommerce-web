import React from 'react'


function Addcart() {
  return (
    <>
      {/* cart name */}

      <div>
        <p className=' text-3xl font-bold font-serif'>Shopping Cart :- </p>
      </div>
      <div className=' flex'>
      <div className=' flex-col ml-5'>
        <div className=" flex ml-4 space-x-3 mt-3">
          <img src='https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_4_a8583478-7568-4ece-8dd3-4f75c0d128a5.jpg?v=1707915475&width=823' className=' w-20 h-20 mt-4'></img>

          <p className="text-gray-400 font-bold mt-3">U TURN Men Striped Casual Light     Green ,   White Shirt<br /> Size :- L <br />Seller: INTERNNATIOANL COTFAB <br />
            <span className=' line-through text-red-300'>$18</span> <span>$52</span>
            <span className='ml-3 text-green-500'>80% off</span>
          </p>
          </div>

          <div className=' space-x-4'>
            <input
              className="border p-2 mt-2 gap-2 w-30 ml-3"
              type="number"
            // value={quantity}
            // onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className=" bg-black text-white p-2 mt-4 hover:bg-black-600"
            // onClick={handleAddToCart}
            >SAVE FOR LATER</button>
            <button
              className=" bg-black text-white p-2 mt-4 hover:bg-black-600"
            >REMOVE</button>
          </div>

      </div>




      {/* PRICE DETAILS */}

      <div className=" border p-6 mt-3 ml-auto" style={{ width: '40%' }}>
        <p className="text-lg font-semibold mb-2">Price Details</p>
        <div className="flex justify-between mb-2">
          <span>Price (10 Items) :-</span>
          <span>$102.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount :-</span>
          <span className=' text-green-500'>$50.00</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Total Amount :-</span>
          <span>-$200.00</span>
        </div>
        <button
          className=" bg-black text-white p-2 mt-4 hover:bg-black-600"
        // onClick={handleAddToCart}
        >SUBMIT</button>
      </div>

      </div>

      {/* second cart */}

      <div className=' flex'>
      <div className=' flex-col ml-5'>
        <div className=" flex ml-4 space-x-3 mt-3">
          <img src='https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_4_a8583478-7568-4ece-8dd3-4f75c0d128a5.jpg?v=1707915475&width=823' className=' w-20 h-20 mt-4'></img>

          <p className="text-gray-400 font-bold mt-3">U TURN Men Striped Casual Light     Green ,   White Shirt<br /> Size :- L <br />Seller: INTERNNATIOANL COTFAB <br />
            <span className=' line-through text-red-300'>$18</span> <span>$52</span>
            <span className='ml-3 text-green-500'>80% off</span>
          </p>
          </div>

          <div className=' space-x-4 mb-3'>
            <input
              className="border p-2 mt-2 gap-2 w-30 ml-3"
              type="number"
            // value={quantity}
            // onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className=" bg-black text-white p-2 mt-4 hover:bg-black-600"
            // onClick={handleAddToCart}
            >SAVE FOR LATER</button>
            <button
              className=" bg-black text-white p-2 mt-4 hover:bg-black-600"
            >REMOVE</button>
          </div>

      </div>
</div>

    </>
  )
}

export default Addcart
