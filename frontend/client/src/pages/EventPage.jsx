import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/events"); // Adjust URL as needed
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#212529] text-white p-6">
      <h1 className="text-4xl font-bold text-[#ffffff] mb-6">Campus Events</h1>
      {loading ? (
        <p className="text-[#adb5bd] text-lg">Loading events...</p>
      ) : events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {events.map((event) => (
            <EventCard
              key={event._id}
              eventName={event.eventName}
              eventDescription={event.eventDescription}
              date={event.date}
              organizer={event.organizer?.name}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <p className="text-[#adb5bd] text-lg">No events available.</p>
      )}
    </div>
  );
};

export default EventsPage;
