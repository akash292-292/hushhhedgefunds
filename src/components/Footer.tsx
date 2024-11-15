export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">USA</h3>
            <p>Hushh 🤫 Technologies LLC</p>
            <p>1021 5th St W,Kirkland, WA 98033</p>
            <p>+1 (765) 532-4284</p>
          </div>
          {/* <div>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
              <a href="/eu-gdpr" className="hover:text-gray-300">EU GDPR Policy</a>
              <a href="/brokercheck" className="hover:text-gray-300">FINRA's BrokerCheck</a>
              <a href="/support" className="hover:text-gray-300">Support</a>
            </div>
          </div> */}
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