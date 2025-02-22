import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150",
    marketplaceItems: [],
    events: [],
    notes: [],
  });

  useEffect(() => {
    // Fetch user data (replace with API call)
    const fetchUser= async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/user/67b2fd7cd2944fe1094df1af');
            console.log(response.data)

        }catch(er){
            console.log("Error fetching notes", er)
        }
        // setUser(response.data)

    }
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#343A40] p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQN6r35hHOnaPSm4iZesPIzmwX1_kCPswjpg&s"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-[#2EC4B6]"
        />
        <h1 className="text-3xl font-bold text-[#2EC4B6] mt-4">{user.name}</h1>
        <p className="text-lg text-[#495057]">{user.email}</p>
        <button
          className="mt-4 px-4 py-2 bg-[#2EC4B6] text-white rounded-lg shadow-md hover:bg-[#27B0A3] transition"
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </button>

        {/* User's Marketplace Items */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#FF5733]">Marketplace Listings</h2>
          {user.marketplaceItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {user.marketplaceItems.map((item) => (
                <div key={item.id} className="bg-[#FFF3E6] p-4 rounded-lg shadow">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-sm text-[#6C757D]">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#6C757D] mt-2">No items listed.</p>
          )}
        </div>

        {/* User's Events */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#D63384]">Created Events</h2>
          {user.events.length > 0 ? (
            <ul className="mt-4">
              {user.events.map((event) => (
                <li key={event.id} className="bg-[#FDE2E4] p-4 rounded-lg shadow mb-2">
                  {event.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#6C757D] mt-2">No events created.</p>
          )}
        </div>

        {/* User's Notes */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#FFC107]">Uploaded Notes</h2>
          {user.notes.length > 0 ? (
            <ul className="mt-4">
              {user.notes.map((note) => (
                <li key={note.id} className="bg-[#FFF9C4] p-4 rounded-lg shadow mb-2">
                  {note.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#6C757D] mt-2">No notes uploaded.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
