export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col py-20  h-full ">
      <h1 className="text-center text-4xl font-bold my-12 text-black">How it works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Download app feature */}
        <div className="feature-item text-center">
          <div className="relative">
            <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center">
              {/* New download icon with color */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9m0 0l-3-3m3 3l3-3m-9 9h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h3 className="text-md font-semibold mt-6 mb-2">
            1. Download our app  <br/> and get started
          </h3>
        </div>

        {/* Analyze social media feature */}
        <div className="feature-item text-center">
          <div className="relative">
            <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center">
              {/* New analytics icon with color */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2 2 4-4 6 6 4-4" />
              </svg>
            </div>
          </div>
          <h3 className="text-md font-semibold mt-6 mb-2">
           2. We analyze your social media <br/> and give you the credit you deserve
          </h3>
        </div>

        {/* Shop at partnered brands feature */}
        <div className="feature-item text-center">
          <div className="relative">
            <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center">
              {/* New shopping cart icon with color */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l1 9h12l1-9h2M3 3l1 9m0 0h12m-12 0l1 9h12l1-9" />
              </svg>
            </div>
          </div>
          <h3 className="text-md font-semibold mt-6 mb-2">
          3. Shop at our partnered brands <br/>using the credit we give you
          </h3>
        </div>

        {/* Repay the credit feature */}
        <div className="feature-item text-center">
          <div className="relative">
            <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center">
              {/* New credit card icon with color */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
          </div>
          <h3 className="text-md font-semibold mt-6 mb-2">
             4. Post about your experience <br/> and repay the credit
          </h3>
        </div>
        
      </div>
    </div>
  );
}