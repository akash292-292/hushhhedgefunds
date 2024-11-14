import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
// import Login from '../pages/Login';
export default function Navbar() {
  // Function to open the careers page in a new tab
  const navigate = useNavigate();
  const openInNewTab = () => {
    window.open('https://www.linkedin.com/company/hushh-ai/', '_blank'); // Replace with your actual careers page URL
  };

  return (
    
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Hushh 🤫 Technologies LLC</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <Menu as="div" className="relative">
              <Menu.Button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                About
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/about/leadership"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Leadership Team
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/about/philosophy"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      About Organization
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

             {/* New Dropdown for Solution */}
            <Menu as="div" className="relative">
              <Menu.Button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                Solution
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/services/consumers"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      For Consumers
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/services/businesses"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      For Businesses
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            
            {/* External link with window.open for Careers */}
            <button
              onClick={openInNewTab} 
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Careers
            </button>

            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <button 
          onClick={() => navigate('/Login')}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Log In
        </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
