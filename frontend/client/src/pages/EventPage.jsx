import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";
import { FiPlus, FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/events"); 
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    console.log("Deleting event with ID:", eventId);
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:8080/api/events/delete/${eventId}`);
      setEvents((prevEvents) => prevEvents.filter(event => event._id !== eventId));
    } catch (er) {
      console.log("Error deleting event", er);
    }
  };

  const filteredEvents = events.filter(event => 
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.eventDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto mt-10"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-600 mb-4">
            Campus Events
          </h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Discover and participate in exciting campus activities and gatherings
          </p>
        </div>

        {/* Search and Create Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-purple-900 font-medium rounded-lg shadow hover:shadow-md transition-all"
            onClick={() => navigate("/events/create")}
          >
            <FiPlus /> Create Event
          </motion.button>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FiLoader className="animate-spin text-4xl text-purple-600" />
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event._id}
                eventId={event._id}
                eventName={event.eventName}
                eventDescription={event.eventDescription}
                date={event.date}
                organizer={event.organizer?.name}
                location={event.location}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-purple-800 mb-2">
              {searchTerm ? "No matching events found" : "No events available yet"}
            </h3>
            <p className="text-purple-600">
              {!searchTerm && "Be the first to create an event!"}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EventsPage;