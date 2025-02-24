import {React,useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function UpdateNotePage() {

  const {id}=useParams();
  const navigate=useNavigate();

  const [noteData, setNoteData]=useState({
    noteTitle:"",
    noteDescription:"",
  })

  useEffect(()=>{
    const fetchNote=async()=>{
      try{
        const response = await axios.get(`http://localhost:8080/api/notes/${id}`);
        setNoteData(response.data.note);
        console.log(response.data);

      }catch(er){
        console.log("Error fetching the note:",er);
      }
    };
    fetchNote();
  },[id])

  const handleChange = (e) => {
    setNoteData({ ...noteData, [e.target.name]: e.target.value });
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/notes/update/${id}`, noteData);
      alert("Note updated successfully!");
      navigate("/notes");
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3CD] text-black p-6">
      <h1 className="text-3xl font-bold mb-4">Update Note</h1>
      <form onSubmit={handleUpdate} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2">Title:</label>
        <input type="text" name="noteTitle" value={noteData.noteTitle} onChange={handleChange} className="w-full p-2 rounded-lg mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />

        <label className="block mb-2">Description:</label>
        <textarea name="noteDescription" value={noteData.noteDescription} onChange={handleChange} className="w-full p-2 rounded-lg mb-4 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

        <button type="submit" className="bg-[#FF5733] text-white px-4 py-2 rounded-lg hover:bg-[#C70039]">
          Update Note
        </button>
      </form>
    </div>
  )
}

export default UpdateNotePage;
