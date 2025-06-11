import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiBook, FiDollarSign, FiArrowRight } from "react-icons/fi";
import campusImage from "../assets/christ-uni-img.jpeg"; // Replace with your image

const HomePage = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-purple-200 shadow-lg overflow-hidden">
            <img 
              src={campusImage} 
              alt="Campus Connect" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-600 mb-4">
            Campus Connect
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Your premier platform for campus collaboration and resources
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
          {[
            {
              title: "Events",
              description: "Discover and participate in campus activities",
              icon: <FiCalendar className="text-3xl mb-4 text-purple-600" />,
              link: "/events",
              color: "from-purple-100 to-purple-50",
              border: "border-purple-200",
              text: "text-purple-800"
            },
            {
              title: "Marketplace",
              description: "Buy and sell within campus community",
              icon: <FiDollarSign className="text-3xl mb-4 text-yellow-600" />,
              link: "/marketplace",
              color: "from-yellow-50 to-yellow-100",
              border: "border-yellow-200",
              text: "text-yellow-800"
            },
            {
              title: "Notes",
              description: "Share and access academic resources",
              icon: <FiBook className="text-3xl mb-4 text-purple-600" />,
              link: "/notes",
              color: "from-purple-100 to-purple-50",
              border: "border-purple-200",
              text: "text-purple-800"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Link 
                to={item.link}
                className={`block bg-gradient-to-br ${item.color} p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full border ${item.border}`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white backdrop-blur-sm border ${item.border}`}>
                    {item.icon}
                  </div>
                  <h2 className={`text-2xl font-bold mb-3 ${item.text}`}>{item.title}</h2>
                  <p className={`${item.text}/80 mb-6`}>{item.description}</p>
                  <div className={`inline-flex items-center text-sm font-medium group ${item.text}`}>
                    Explore now 
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 bg-white backdrop-blur-sm p-8 rounded-xl border border-purple-200 max-w-4xl w-full shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-900">Ready to enhance your campus experience?</h3>
          <p className="text-purple-700 mb-6">
            Join thousands of students using Campus Connect to collaborate, learn, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg font-medium hover:shadow-lg text-purple-900"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-transparent border border-purple-300 rounded-lg font-medium hover:bg-purple-50 transition-colors text-purple-800"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;