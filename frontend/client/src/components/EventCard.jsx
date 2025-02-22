
const EventCard = ({ eventName, eventDescription, date, organizer, location }) => {
    return (
      <div className="bg-[#343A40] p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:ring-2 hover:ring-white hover:bg-[#495057]">
        <h2 className="text-2xl font-semibold text-[#ffffff]">{eventName}</h2>
        <p className="text-[#f8f9fa] mt-2">{eventDescription}</p>
        <p className="text-[#adb5bd] mt-2">📅 {date}</p>
        <p className="text-[#ced4da] mt-2">📍 {location}</p>
        <p className="text-[#f8f9fa] mt-2 font-semibold">👤 Organized by {organizer || "Unknown"}</p>
      </div>
    );
  };
  
  export default EventCard;
  
  