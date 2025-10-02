import React, { useState } from 'react'

const PricingSection = () => {

    const [productCount,setProductionCount] = useState(1)


    const starterPrice = Math.round(4000*(productCount/50))
    const businessPrice = Math.round(7500*(productCount/50))
  return (
    <section className='py-20 px-4'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pricing</h2>
        
        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {/* starter plan */}
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-xl text-gray-600'>Starter</h3>
            <p className='text-3xl font-bold mb-6'>${starterPrice} Month</p>
          </div>
        
          {/* business plan*/}
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-xl text-gray-600'>Business</h3>
            <p className='text-3xl font-bold mb-6'>${businessPrice}/ Month</p>
          </div>
        </div>

        {/* Product Count Slider - Below Cards */}
        <div className="mb-12">
          <p className="text-center text-lg text-gray-700 mb-6 font-medium">{productCount} Products</p>
          <div className='max-w-md mx-auto'>
            <div className='flex items-center gap-4'>
              <span className='text-sm text-gray-600 font-medium'>1</span>
              <input 
                className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider'
                type="range" 
                min="1" 
                max="50" 
                value={productCount} 
                onChange={(e)=> setProductionCount(parseInt(e.target.value))} 
              />
              <span className='text-sm text-gray-600 font-medium'>50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection