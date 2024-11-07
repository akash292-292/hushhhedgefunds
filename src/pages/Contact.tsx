import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const reasonOptions = [
  "General Inquiry",
  "Investment Information",
  "Technical Support",
  "Other"
];

export default function Contact() {
  // State to hold the random numbers and the form data
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
    captcha: ''
  });

  const [captchaError, setCaptchaError] = useState<string>('');  // State for captcha error message

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to generate random numbers between 0 and 99
  const generateRandomNumbers = () => {
    const randomNum1 = Math.floor(Math.random() * 100);  // Random number between 0 and 99
    const randomNum2 = Math.floor(Math.random() * 100);  // Random number between 0 and 99
    setNum1(randomNum1);
    setNum2(randomNum2);
  };

  // Call the generate function when the component mounts
  useEffect(() => {
    generateRandomNumbers();
  }, []); // Empty dependency array means it runs only once when the component mounts

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate CAPTCHA
    const userCaptcha = parseInt(formData.captcha, 10);
    const correctAnswer = num1 + num2;

    if (userCaptcha !== correctAnswer) {
      setCaptchaError('Incorrect sum. Please try again.');
      return;  // Stop form submission
    } else {
      setCaptchaError(''); // Clear error if captcha is correct
    }

    // Handle the form data (e.g., send it to an API, etc.)
    console.log('Form submitted successfully', formData);

    // After successful submission, navigate to the home page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-gray-700">
              For career-related inquiries, please visit our{' '}
              <Link to="https://www.linkedin.com/company/hushh-ai/" className="text-red-700 hover:text-red-800">
                Jobs
              </Link>{' '}
              page.
            </p>
            <p className="mb-8 text-gray-700">
              For all other inquiries, please submit the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Other form fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                  Reason for Contact <span className="text-red-600">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select a reason</option>
                  {reasonOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* CAPTCHA */}
              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                  What is the sum of {num1} and {num2}? <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  required
                  value={formData.captcha}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                {captchaError && <p className="text-red-600 text-sm">{captchaError}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-32 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
