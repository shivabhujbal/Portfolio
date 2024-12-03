import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Interested',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState(''); // New state for email validation error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));

    // Clear email error when user starts typing again
    if (name === 'email') {
      setEmailError('');
    }
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!isValidEmail(formState.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    const templateParams = {
      to_email: 'shivsambhbhujbal@gmail.com',
      email: formState.email,
      name: formState.name,
      subject: formState.subject,
      message: formState.message,
    };

    // Send the email via emailjs
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      console.log('Success:', response);
      setStatus('Message sent successfully!');
      setFormState({ name: '', email: '', subject: '', message: '' });  // Reset formState after successful submission
      setTimeout(() => setStatus(''), 5000);  // Clear the status after 5 seconds
    }).catch((error) => {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.');
      setTimeout(() => setStatus(''), 5000);  // Clear the status after 5 seconds
    });
  };

  const contactInfo = [
    { icon: <FiMail />, text: 'shivsambhbhujbal@gmail.com', link: 'mailto:shivsambhbhujbal@gmail.com' },
    { icon: <FiPhone />, text: '+91 9960416848', link: 'tel:+919960416848' },
    { icon: <FiMapPin />, text: 'Pune, MH' }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-500">Get in Touch</h3>
            <p className="text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-gray-300"
                  whileHover={{ scale: 1.05, color: '#FCD34D' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-yellow-500 text-xl">{item.icon}</span>
                  {item.link ? (
                    <a href={item.link} className="hover:text-yellow-500">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                required
              />
              {/* Show email validation error */}
              {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center justify-center w-full hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend className="mr-2" />
              Send Message
            </motion.button>
            {status && <p className="text-center text-yellow-500 mt-4">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
