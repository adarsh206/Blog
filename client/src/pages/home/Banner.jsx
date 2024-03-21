import React from 'react'

const Banner = () => {
  return (
    <div className="block md:flex md:space-x-2 px-2 lg:p-0">
        <a 
          className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9ufGVufDB8fDB8fHww" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="First Example" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            Good nutrition helps fuel your body. The foods you eat supply the nutrients your body needs to maintain your brain, muscle, bone, nerves, skin, blood circulation, and immune system.
            </h2>
            <div className="flex mt-3">
              <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                <p className="font-semibold text-gray-400 text-xs"> 18 March </p>
              </div>
            </div>
          </div>
        </a>

        <a className="w-full md:w-1/3 relative rounded" 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 top-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
          <img src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="Second Example" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">Science is a rigorous, systematic endeavor that builds and organizes knowledge in the form of testable explanations and predictions about the world.</h2>
            <div className="flex mt-3">
              <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
                <p className="font-semibold text-gray-400 text-xs"> 19 March </p>
              </div>
            </div>
          </div>
        </a>
      </div>
  )
}

export default Banner