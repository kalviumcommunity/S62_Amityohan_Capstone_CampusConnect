import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ eventId,
        eventName,
        eventDescription,
        date, 
        organizer, 
        location,
        onDelete }) => {
const navigate = useNavigate();

    return (
      <div className="bg-[#343A40] p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:ring-2 hover:ring-white hover:bg-[#495057]">
        <h2 className="text-2xl font-semibold text-[#ffffff]">{eventName}</h2>
        <p className="text-[#f8f9fa] mt-2">{eventDescription}</p>
        <p className="text-[#adb5bd] mt-2">📅 {date}</p>
        <p className="text-[#ced4da] mt-2">📍 {location}</p>
        <p className="text-[#f8f9fa] mt-2 font-semibold">👤 Organized by {organizer || "Unknown"}</p>
        <div className="mt-4 flex justify-between">
        <button 
          className="bg-[#28A745] text-white px-4 py-2 rounded-lg hover:bg-[#218838] transition"
          onClick={() => navigate(`/events/update/${eventId}`)}
        >
          Update
        </button>
        <button 
          className="bg-[#DC3545] text-white px-4 py-2 rounded-lg hover:bg-[#C82333] transition"
          onClick={() => onDelete(eventId)}
        >
          Delete
        </button>
        </div>
      </div>
    );
};

export default EventCard;
