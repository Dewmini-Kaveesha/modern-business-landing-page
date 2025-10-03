import React from 'react'

const ServicesSection = () => {
  return (
    <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 '>
        {/*header section */}
        <div className='md:w-1/3 w-full'>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"> Future of support with new shape </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">Discuss your goals, determine success metrices, identify problems</p>
          <div className='space-y-3'>
            <div className="flex items-center gap-2">
              <div className="w-5  h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 "></div>
              </div>
              <span className="text-gray-600">UI design content strategy</span>
            </div>

             <div className="flex items-center gap-2">
              <div className="w-5  h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 "></div>
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>

          <button className='mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full
          hover:bg-indigo-700 transition-colors'>Get Started</button>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection