import React, { useState } from 'react'

const PricingSection = () => {

    const [productCount,setProductionCount] = useState(1)


    const starterPrice = Math.round(4000*(productCount/50))
    const businessPrice = Math.round(7500*(productCount/50))
  return (
    <section className='py-20 px-4'>
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb:16">Pricing</h2>
        </div>
        
    </section>
  )
}

export default PricingSection