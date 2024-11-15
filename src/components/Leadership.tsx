import img from '../../files/img.png';
import img2 from '../../files/img (1).png';

export default function Leadership() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-lg md:text-xl mb-4">Welcome to Hu$$h 🤫 Technologies LLC, meet</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h1>
        <p className="text-base md:text-lg mb-4">
          At Hu$$h 🤫 Technologies LLC, our leadership team combines decades of experience
          in <span className="text-red-600">technology, finance,</span> and <span className="text-red-600">AI</span> to bring a unique, data-driven approach to investment management.
        </p>
        <p className="text-base md:text-lg">
          We're united by a shared vision: to empower individuals and institutions to achieve
          lasting financial success through intelligent, responsible investing.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet the minds behind Hu$$h</h2>
        
        {/* Manish Sainani */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="w-36 h-36 md:w-48 md:h-48 mb-6 bg-gray-200 rounded-full overflow-hidden">
            <img src={img} alt="Manish Sainani" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-1">Manish <span className="text-red-600">Sainani</span></h3>
          <p className="text-gray-600 mb-4">Founder & CEO</p>
          <p className="text-lg md:text-xl mb-2">Visionary. Innovator. Builder.</p>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Manish founded Hu$$h 🤫 Technologies LLC with a bold vision: to transform the investment
            landscape through the power of technology and data-driven insights.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            His deep understanding of AI and machine learning, honed over a decade of leadership at
            Google, Microsoft, and Splunk, provides Hu$$h with an unparalleled advantage in identifying
            market opportunities and managing risk.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Driven by an insatiable intellectual curiosity and a commitment to first principles, Manish leads
            Hu$$h with a unique blend of analytical precision and a human-centric approach.
          </p>
        </div>

        {/* Justin Donaldson */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="w-36 h-36 md:w-48 md:h-48 mb-6 bg-gray-200 rounded-full overflow-hidden">
            <img src={img2} alt="Justin Donaldson" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-1">Justin <span className="text-red-600">Donaldson</span></h3>
          <p className="text-gray-600 mb-4">Chief Scientist, Advisor to CEO, & Investment Strategist</p>
          <p className="text-lg md:text-xl mb-2">Strategist. Scientist. Architect.</p>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Justin is the driving force behind Hu$$h's investment methodologies. As Chief Scientist and
            Advisor to the CEO, he brings a wealth of experience in quantitative finance, data science, and AI.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            His comprehensive understanding of market dynamics, combined with his innovative approach,
            helps Hu$$h generate sustainable returns while adhering to core values of transparency and efficiency.
          </p>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Together, Creating the Future of <span className="text-red-600">Wealth Management</span></h2>
          <p className="text-gray-700 text-sm md:text-base">
            Manish and Justin lead Hu$$h 🤫 Technologies LLC with a shared purpose: to build an investment firm that seamlessly
            blends mathematical sophistication with ethical clarity. Their combined expertise and unwavering vision allow Hu$$h to
            explore new frontiers in investment management.
          </p>
        </div>
      </div>
    </div>
  );
}
