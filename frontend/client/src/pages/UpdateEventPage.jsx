import {React, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateEventPage() {

    const {id}=useParams();
    const navigate=useNavigate();

    const [eventData, setEventData] = useState({
        eventName: "",
        eventDescription: "",
        date: "",
        location: "",
      });


    useEffect(()=>{
        const fetchEvent=async()=>{
            try{
                const response=await axios.get(`http://localhost:8080/api/events/${id}`);
                const event=response.data.event;
                const formattedDate = event.date ? event.date.split("T")[0] : "";

                // console.log(event)
                setEventData({eventName: event.eventName,
                    eventDescription: event.eventDescription,
                    date: formattedDate,
                    location: event.location});
            }catch(er){
                console.log("Error fetching event:",er);
            }
        };
        fetchEvent();
    }, [id])

    const handleChange=(e)=>{
        setEventData({...eventData,[e.target.name]:e.target.value});
    }

    const handleUpdate=async(e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8080/api/events/update/${id}`,eventData)
            alert("Event updated successfully");
            navigate("/events");
        }catch(er){
            console.log("Error updating event:",er);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3CD] text-black p-6">
  <h1 className="text-3xl font-bold mb-4">Update Event</h1>
  <form onSubmit={handleUpdate} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-300">
    <label className="block mb-2 font-semibold">Event Name:</label>
    <input type="text" name="eventName" value={eventData.eventName} onChange={handleChange} 
      className="w-full p-2 rounded-lg mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />

    <label className="block mb-2 font-semibold">Description:</label>
    <textarea name="eventDescription" value={eventData.eventDescription} onChange={handleChange} 
      className="w-full p-2 rounded-lg mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

    <label className="block mb-2 font-semibold">Date:</label>
    <input type="date" name="date" value={eventData.date} onChange={handleChange} 
      className="w-full p-2 rounded-lg mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />

    <label className="block mb-2 font-semibold">Location:</label>
    <input type="text" name="location" value={eventData.location} onChange={handleChange} 
      className="w-full p-2 rounded-lg mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />

    <button type="submit" className="bg-[#007BFF] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition">
      Update Event
    </button>
  </form>
</div>

    )
}

export default UpdateEventPage
