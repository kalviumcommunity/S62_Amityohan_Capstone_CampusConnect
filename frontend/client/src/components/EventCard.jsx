import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUser, FiEdit2, FiTrash2, FiArrowRight } from 'react-icons/fi';

const EventCard = ({ 
  eventId,
  eventName,
  eventDescription,
  date, 
  organizer, 
  location,
  onDelete 
}) => {
  const navigate = useNavigate();
  
  // Determine event status based on date
  const getEventStatus = () => {
    const now = new Date();
    const eventDate = new Date(date);
    const timeDiff = eventDate - now;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    if (daysDiff < 0) {
      return { text: 'Completed', color: 'bg-gray-500' };
    } else if (daysDiff < 1) {
      return { text: 'Today', color: 'bg-green-500' };
    } else if (daysDiff < 7) {
      return { text: 'This Week', color: 'bg-blue-500' };
    } else {
      return { text: 'Upcoming', color: 'bg-yellow-500' };
    }
  };

  const status = getEventStatus();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg overflow-hidden border border-purple-200 hover:shadow-xl transition-all relative"
    >
      {/* Status Badge */}
      <div className={`absolute top-3 right-3 ${status.color} text-white text-xs px-2 py-1 rounded-full`}>
        {status.text}
      </div>

      {/* Event Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
        <h2 className="text-xl font-bold text-white truncate">{eventName}</h2>
      </div>

      {/* Event Content */}
      <div className="p-5">
        <p className="text-purple-800 mb-4 line-clamp-3">{eventDescription}</p>
        
        <div className="space-y-3 text-purple-700">
          <div className="flex items-center">
            <FiCalendar className="mr-2 text-purple-600" />
            <span>{new Date(date).toLocaleDateString('en-US', { 
              weekday: 'short', 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</span>
          </div>
          
          <div className="flex items-center">
            <FiMapPin className="mr-2 text-purple-600" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center">
            <FiUser className="mr-2 text-purple-600" />
            <span className="font-medium">Organized by {organizer || "Unknown"}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-sm font-medium text-purple-700 hover:text-purple-900 group"
            onClick={() => navigate(`/events/${eventId}`)}
          >
            View details
            <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
              onClick={() => navigate(`/events/update/${eventId}`)}
              aria-label="Edit event"
            >
              <FiEdit2 />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
              onClick={() => onDelete(eventId)}
              aria-label="Delete event"
            >
              <FiTrash2 />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;