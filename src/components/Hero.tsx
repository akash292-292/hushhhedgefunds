export default function Hero() {
  return (
    <div className="bg-black text-white min-h-[100vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hushh 🤫 Technologies LLC
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Precision in Data. Power in Investing. Purpose in Results.
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            At Hushh 🤫 Technologies, we leverage advanced math, AI, and statistics to generate sustainable
            alpha in a dynamic market. Invest in the future of wealth with us.
          </p>
          <div className="flex justify-center space-x-4">
          <button className="bg-black text-white py-2 px-4 border border-white rounded-md hover:text-black hover:bg-white">
          Have an account? Login
            </button>
            <button className="bg-black text-white py-2 px-4 border border-white rounded-md hover:text-black hover:bg-white">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}