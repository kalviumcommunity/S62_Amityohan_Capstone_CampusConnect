
import { Link } from "react-router-dom";
import image from "../assets/freepik__background__88202.png"
const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#212529] text-white">
        <div className="text-center">
          <header className="mb-8">
            <img src={image} alt="Campus Connect Logo" className="w-50 h-50 mx-auto " />
            <h1 className="text-4xl font-bold text-[#ffffff]">Welcome to Campus Connect</h1>
            <p className="text-[#f8f9fa] mt-2">Your go-to platform for campus events, marketplace, and notes!</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            <Link to="/events" className="bg-[#343A40] p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:ring-2 hover:ring-white hover:bg-[#495057]">
              <h2 className="text-2xl font-semibold text-[#ffffff]">Events</h2>
              <p className="text-[#f8f9fa] mt-2">Discover and participate in campus events.</p>
            </Link>
            <Link to="/marketplace" className="bg-[#343A40] p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:ring-2 hover:ring-white hover:bg-[#495057]">
              <h2 className="text-2xl font-semibold text-[#ffffff]">Marketplace</h2>
              <p className="text-[#f8f9fa] mt-2">Buy and sell items within the campus community.</p>
            </Link>
            <Link to="/notes" className="bg-[#343A40] p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:ring-2 hover:ring-white hover:bg-[#495057]">
              <h2 className="text-2xl font-semibold text-[#ffffff]">Notes</h2>
              <p className="text-[#f8f9fa] mt-2">Share and access academic notes and resources.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;