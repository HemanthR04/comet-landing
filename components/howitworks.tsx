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
            1. Sign Up & Get Access
          </h3>
          <p className="text-gray-500">
          Connect your Instagram, and we will calculate your Social Credit.
          </p>
          
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
           2. Get Your Credits
          </h3>
          <p className="text-gray-500">
          Unlock a weekly credit limit based on your influence.          </p>
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
          3.Shop Your Fave Brands
          </h3>
          <p className="text-gray-500">
          Spend your credits at partnered brands.          </p>
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
             4. Post & Pay Back
          </h3>
          <p className="text-gray-500">
          Share your experience on Instagram, and your credit is paid.  
          </p>
        </div>
        
      </div>
    </div>
  );
}