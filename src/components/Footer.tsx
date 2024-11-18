export default function Footer() {
  return (
    <footer className="bg-white text-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">USA</h3>
            <p>Hushh 🤫 Technologies LLC</p>
            <p>1021 5th St W,Kirkland, WA 98033</p>
            <p>+1 (765) 532-4284</p>
          </div>
          <div className="text-left flex items-end justify-end">
            <div className="flex text-sm space-x-6 space-y-2 text-gray-400 flex-col text-right" >
              <a href="/privacy-policy" className="hover:text-gray-600">History and Milestones</a>
              <a href="/eu-gdpr" className="hover:text-gray-600">Portfolio and Performance</a>
              <a href="/brokercheck" className="hover:text-gray-600">Investor Relations</a>
              <a href="/support" className="hover:text-gray-600">Compliance & Legal</a>
              <a href="/support" className="hover:text-gray-600">Strategy and Profit Projection</a>
              <a href="/support" className="hover:text-gray-600">Letter to shareholders</a>
              <a href="/support" className="hover:text-gray-600">FAQs</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>© 2024 Hushh 🤫 Technologies LLC. All Rights Reserved.</p>
          <p className="mt-2">
            The materials on this website are for illustration and discussion purposes only and do not constitute an offering.
            An offering may be made only by delivery of a confidential offering memorandum to appropriate investors.
            PAST PERFORMANCE IS NO GUARANTEE OF FUTURE RESULTS.
          </p>
        </div>
      </div>
    </footer>
  );
}