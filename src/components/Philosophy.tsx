import lineGraph from '../../files/lineGraph.svg'
export default function Philosophy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Investment meets Innovation</h1>
        <p className="text-lg mb-8">
          We're building a movement toward a future where wealth is built through <span className="text-red-600">intelligent, responsible investing</span>,
          powered by <span className="font-medium">cutting-edge mathematical models, statistical analysis, and artificial intelligence (AI)</span>.
        </p>

        <div className="w-64 h-32 mx-auto mb-8 bg-white rounded-lg flex-shrink-0">
        <img src={lineGraph} alt="SVG Image" width="200" height="200"></img>
</div>
        {/* <div className="w-64 h-32 mx-auto mb-8 bg-red-100 rounded-lg"><img src="/files/https_ 3/lottiefiles.com/animations/Vector.svg" alt="SVG Image" width="200" height="200"></img></div> */}

        <p className="text-lg mb-16">
          Our approach is built on <span className="font-medium">rigorous research, strategic precision</span>, and an
          <span className="font-medium"> unwavering focus</span> on delivering consistent, sustainable growth for our investors.
        </p>
      </div>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our <span className="text-red-600">Mission</span></h2>
        <p className="text-lg mb-4">
          To empower individuals and institutions to achieve long-term financial success
          through <span className="font-medium">data-driven, intelligent investment strategies</span>.
        </p>
        <p className="text-sm text-gray-600">
          We believe that investment should be both powerful and personal—designed to work for people, not just portfolios.
          We're committed to transparency and ethical data use, ensuring that wealth creation is both impactful and aligned with
          our investors' values.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg mb-4">
          We specialise in generating income through innovative options-based
          strategies, capitalising on daily, weekly, and monthly market opportunities.
        </p>
        <p className="text-sm text-gray-600">
          Our proprietary strategies, such as <span className="text-red-600">Sell the Wall</span> and <span className="text-red-600">Strategy 69</span>, are meticulously designed to generate
          consistent "alpha income" by intelligently leveraging price movement and volatility. We focus on high-quality,
          liquid instruments and maintain a disciplined approach that combines deep analysis of market
          fundamentals while optimizing income through our advanced options models.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Our <span className="text-red-600">Investment Philosophy</span></h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <span className="text-3xl">∫𝑥</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Math-Driven Precision</h3>
            <p className="text-sm">
              We apply advanced mathematical models to guide our investment decisions. This
              quantitative approach ensures maximum consistency and removes emotional bias from our
              strategies.
            </p>
          </div>
          <div>
            <div className="mb-4">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Insight</h3>
            <p className="text-sm">
              By harnessing the power of artificial intelligence and machine learning, we identify market inefficiencies
              and predict potential opportunities in real-time, giving us an edge in the ever-changing
              financial landscape.
            </p>
          </div>
          <div>
            <div className="mb-4">
              <span className="text-3xl">⚖️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Long-Term Stability</h3>
            <p className="text-sm">
              We work to demonstrate consistent returns
              through a balanced approach that combines
              innovative strategies with prudent risk management. Our disciplined methodology allows us to
              navigate market fluctuations effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Hu<span className="text-red-600">$$</span>h?</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Simplicity Meets Sophistication</h3>
            <p>
              While our models leverage complex algorithms, our approach is
              refreshingly straightforward and designed to perform in any market. We believe that
              intelligent investing should be accessible and profitable for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Unlocking Options Income</h3>
            <p>
              Our proprietary options strategies allow us to capture premium
              income from short-term market movements, creating a consistent revenue stream that complements
              traditional investment approaches.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Human-Centric Wealth Creation</h3>
            <p>
              We recognize that data is a personal asset, and every decision we
              make respects the privacy, goals, and interests of our investors. Our human-first approach ensures that
              wealth creation is both ethical and impactful.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our <span className="text-red-600">Vision</span></h2>
        <p className="font-bold mb-4">Our Goal is Simple: to create wealth that not only endures but
          thrives, empowering financial freedom for generations to come.</p>
        <p className="text-sm text-gray-600">
          At Hushh Technologies LLC, we're not just another investment firm—we're pioneers at the intersection of
          fresh investment strategies rooted in technological innovation and human-centric values. We are
          committed to continuous improvement, expanding our AI capabilities, and staying at the forefront of
          financial technology to deliver exceptional value to our investors.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Join <span className="text-red-600">Us</span></h2>
        <p className="mb-8">
          Whether you're an individual seeking to grow your wealth or an institution looking for innovative, data-
          driven investment strategies, Hu$h 🤫 Technologies LLC invites you to join us. We're confident that
          our unique blend of mathematical precision, technological innovation, and unwavering commitment to excellence
          makes us the ideal partner for those who demand financial excellence in a new era of investing.
        </p>
        <div className="flex justify-end">
          <a href="https://hushhtechnologies.netlify.app/Login" className="text-red-600 hover:text-red-700 flex items-center">
            Know more about us <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}