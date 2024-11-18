import img from '../../files/img.png';
import img2 from '../../files/img (1).png';
import lineGraph from '../../files/lineGraph.svg';

export default function Leadership() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Us Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl font-semibold mb-4">
            Empowering Wealth Creation with Integrity and Innovation
          </p>
          <p className="text-base md:text-lg mb-8">
            We blend quantitative expertise with ethical investment practices to deliver personalized financial solutions.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h1>
          <h2 className='text-xl md:text-2xl font-semibold mb-4'>Innovative Strategies, Proven Results
          </h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-3xl">
            <li className="mb-4">Cutting-edge AI-powered insights for smarter investments.</li>
            <li className="mb-4">Proprietary options-based strategies generating consistent income.</li>
            <li className="mb-4">Focused investments in cash-generating giants like Apple and Microsoft.</li>
            <li>Generating "rental income" through advanced options models.</li>
          </ul>
        </section>

        {/* Unique Approach Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Unique Approach to Investment Management</h2>
          <p className="text-base md:text-lg mb-8">
            At <span className="font-semibold">Hu$$h 🤫 Technologies</span>, we combine the art of investment with the science of technology:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-3xl">
            <li className="mb-4">
              <strong>Differentiation in Investment Approach:</strong> Unlike traditional funds that rely on speculative returns, Hu$$h combines high-frequency options income with disciplined, data-driven long-term growth. We prioritize stability, focusing on high-FCF SPX10 companies that represent the backbone of global markets.
            </li>
            <li className="mb-4">
              <strong>Math-Driven Decision Making:</strong> Every strategy is informed by rigorous quantitative analysis, ensuring precision and accuracy.
            </li>
            <li className="mb-4">
              <strong>AI-Powered Insights:</strong> Leveraging the latest advancements in machine learning, we identify market inefficiencies and capitalize on opportunities in real-time.
            </li>
            <li className="mb-4">
              <strong>Long-Term Stability:</strong> Our investments focus on high-quality, cash-generating businesses, ensuring a balance between growth and reliability.
            </li>
            <li>
              <strong>Transparency You Can Trust:</strong> Clear communication and a human-centric approach to wealth creation.
            </li>
          </ul>
        </section>

        {/* Our Leadership Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Our Leadership Team</h2>
          <h3 className='text-md md:text-xl font-semibold mb-12'>
            At Hu$$h 🤫 Technologies LLC, our leadership team combines expertise in technology, finance, and strategy to redefine wealth creation. Together, they bring innovation, precision, and integrity to every investment decision.</h3>
          {/* Manish Sainani */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="w-36 h-36 md:w-48 md:h-48 mb-6 bg-gray-200 rounded-full overflow-hidden">
              <img src={img} alt="Manish Sainani" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Manish <span className="text-red-600">Sainani</span></h3>
            <p className="text-gray-600 mb-4">Founder & CEO</p>
            <p className="text-md text-gray-700 mb-4">
              With over a decade of leadership at Google, Microsoft, and Splunk, Manish brings unmatched expertise in AI, machine learning, and data-driven innovation. His vision drives Hu$$h’s mission to empower investors with sustainable, technology-powered wealth strategies.
            </p>
          </div>

          {/* Justin Donaldson */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="w-36 h-36 md:w-48 md:h-48 mb-6 bg-gray-200 rounded-full overflow-hidden">
              <img src={img2} alt="Justin Donaldson" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Justin <span className="text-red-600">Donaldson</span></h3>
            <p className="text-gray-600 mb-4">Chief Scientist & Investment Strategist</p>
            <p className="text-md text-gray-700">
              Justin leads Hu$$h’s scientific and strategic investment approaches. As the architect behind proprietary options strategies like "Sell the Wall," he uses advanced quantitative models to deliver consistent, risk-optimized returns.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join <span className="text-red-600">Us</span></h2>
          <p className="text-base md:text-lg mb-8">
            Whether you're an individual or an institution, Hu$$h 🤫 Technologies LLC invites you to join us on our journey.
          </p>
          <div className="flex justify-center">
            <a href="https://hushhtechnologies.netlify.app/Login" className="text-red-600 hover:text-red-700 flex items-center">
              Know more about us <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
