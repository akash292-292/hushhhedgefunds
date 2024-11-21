import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "How does hushh 🤫 Technologies ensure its investment strategies align with long-term value creation?",
    answer: `At hushh, we’re playing the long game. Every strategy we deploy is designed with sustainability in mind. We don’t just focus on short-term gains or trendy assets. Instead, we ground ourselves in businesses with robust cash flows, a strong competitive advantage, and a clear path for compounding growth. Our approach is built on options income, volatility capture, and disciplined dividend reinvestment in market leaders. It’s about making smart, calculated moves that allow us to grow steadily over time, and all our models are built to withstand a variety of market conditions. In short, we’re not interested in chasing the next big thing—we’re here to build something that lasts.`
  },
  {
    question: "What are the key risk management protocols that hushh has in place?",
    answer: `We manage risk with the same precision that we seek in returns. Every strategy is safeguarded by a few core principles: diversification, position limits, and stop-loss triggers. We never allow ourselves to be overexposed in a single sector or asset, and we’re relentless about preserving capital. Options, by nature, introduce leverage and exposure, so we’ve built guardrails to prevent excessive risk-taking. Think of it like an artist using the finest brushstrokes—controlled, intentional, and designed to minimize waste. We know that wealth preservation is as crucial as wealth generation, and we’re fanatical about protecting what we’ve built.`
  },
  {
    question: "You talk about putting data to work for people. How does hushh use data in a way that’s ethical and human-first?",
    answer: `This is the core of what hushh stands for. Data is powerful, but only when it serves people, not exploits them. Every data-driven decision we make is built around empowering our users and investors. We’re not in the business of selling data or compromising privacy. Our AI models are designed to find inefficiencies, identify opportunities, and help us deliver consistent value—all while respecting user privacy. In essence, we use data as a tool to benefit our stakeholders, not as a product. We believe that wealth creation should never come at the cost of trust.`
  },
  {
    question: "How does hushh differentiate itself from traditional investment firms? What’s the “moat” here?",
    answer: ` Our moat is threefold: our technology, our commitment to human-first principles, and our adaptability. Traditional firms are often tied to legacy systems and rigid structures, while we’re built for agility. We leverage cutting-edge AI and machine learning in ways that larger, more bureaucratic firms simply can’t match. Our focus on making data work for individuals—turning it into a genuine personal asset—isn’t just innovative; it’s transformative. Add to that our dedication to transparency and ethical business practices, and you’ve got a platform that stands apart in a world dominated by transactional relationships.`
  },
  {
    question: 'What’s the biggest challenge hushh faces, and how do you plan to address it?',
    answer:'Our biggest challenge is managing growth without losing our soul. We’re gaining traction fast, and with that comes the risk of diluting our values as we scale. To address this, we’re committed to a few non-negotiables: transparency, ethical data use, and a human-centered approach. We’re building a strong core team that not only understands finance but is also deeply aligned with our vision. As we grow, we’ll be deliberate about who joins the hushh family, ensuring that every addition strengthens our values rather than compromises them. Growth is only meaningful if it’s rooted in integrity.',
  },
  {
    question: 'Why should investors trust that hushh’s results are sustainable over time?',
    answer:'Trust comes from discipline, and our discipline is unbreakable. We’re not just achieving returns by chasing the latest market trends; we’re doing it through structured, data-driven strategies that have proven resilient over time. Our options income strategy, our focus on high-free-cash-flow stocks, and our conservative approach to volatility capture are built to endure. We’re not promising the moon—we’re focused on realistic, consistent growth. Just as Apple created products that people could rely on, we’re creating a financial ecosystem that people can count on, year in and year out.',
  },
  {
    question: 'How does hushh plan to handle downturns or market corrections?',
    answer:'Market corrections are a given, and we don’t shy away from that reality. Our strategies are inherently defensive, with built-in risk management features that prioritize capital preservation. During downturns, we lean heavily on our dividend-compounding assets, which provide stability, and we adjust our options strategies to minimize exposure. The beauty of our approach is that we’re not reliant on bull markets to create value. Our focus on fundamentals and disciplined risk protocols allows us to stay resilient. In fact, volatility often creates the very opportunities we’re structured to capture.',
  },
  {
    question: 'How do you ensure hushh remains innovative and adaptable as it grows?',
    answer:'Adaptability is in our DNA. The key is to stay curious and never assume we have it all figured out. We’re constantly refining our models, experimenting with new data sources, and pushing the limits of what our AI can do. Like Steve Jobs always sought perfection through iteration, we’re obsessive about improvement. Innovation doesn’t mean adding complexity; sometimes, it means simplifying even further. Our approach to adaptability is to stay lean, stay focused, and always look for ways to deliver more value without sacrificing the core principles that define us.',
  },
  {
    question: 'What does hushh’s commitment to “human-first” actually look like in practice?',
    answer:'Being “human-first” isn’t a slogan for us—it’s a fundamental operational principle. Every decision we make has to answer the question: “Does this serve our users and investors?” For example, our privacy policies are designed to give users control over their data, not just because it’s compliant, but because it’s the right thing to do. Our platform features are designed to educate, empower, and support, not overwhelm or manipulate. In practical terms, “human-first” means transparency, simplicity, and a commitment to integrity in every interaction we have with our users and stakeholders.',
  },
  {
    question: 'How will hushh continue to attract and retain top talent as it scales?',
    answer:'Talent is the backbone of any great company, and we’re committed to building a team of “learn-it-alls,” not “know-it-alls.” We look for people who are hungry, curious, and aligned with our mission. Our culture is built on transparency, accountability, and a love for innovation. We don’t just offer jobs; we offer a chance to be part of a movement that’s reshaping wealth creation. Like Apple’s approach to product design, we believe in investing in people who believe in our vision, creating an environment that fosters both excellence and creativity.',
  },
  {
    question: 'If hushh could only achieve one thing, what would it be?',
    answer:'To redefine wealth as something personal, empowering, and accessible. At the end of the day, we’re here to make sure that every person can see their data as an asset they own and control. If we can shift the world’s perspective—even a little—toward that vision, we’ll have succeeded beyond measure. We’re not just creating financial returns; we’re creating a legacy where data-driven wealth is human-centered and inclusive.',
  },
  {
    question: 'What’s the biggest risk you’re willing to take, and why?',
    answer:'The biggest risk we’re willing to take is betting on the intelligence and autonomy of our users. We believe people are smarter and more capable than they’re often given credit for. By empowering them with the right tools, insights, and control over their data, we’re stepping away from the traditional “trust us, we know best” model. It’s a leap of faith, but it’s one we believe will pay off. Our users are our greatest asset, and betting on them to succeed is a risk we’re proud to take.',
  },
  
];

const faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="w-full  mx-auto px-6 py-12 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
        <div className="space-y-6 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`w-full bg-white rounded-lg shadow-md transition-all duration-300 ${openIndex === index ? 'shadow-xl' : 'shadow-md'}`}
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center p-6 cursor-pointer"
              >
                <h3 className="text-base md:text-xl font-semibold">{faq.question}</h3>
                <span className="text-xl text-gray-600">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <div className="px-6 text-sm md:text-lg pb-6 text-gray-700 transition-all duration-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default faq;