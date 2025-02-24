import { useEffect, useState } from "react";
import axios from "axios";
import NotesCard from "../components/NoteCard";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/notes"); // Adjust URL as needed
        setNotes(response.data.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete=async(noteId)=>{
    console.log("Deleting note with Id",noteId)
    const confirmDelete=window.confirm("Are you sure you want to delete this note?")
    if(!confirmDelete) return 
    
    try{
      await axios.delete(`http://localhost:8080/api/notes/delete/${noteId}`);
      setNotes((prevNotes)=>prevNotes.filter(note=>note._id!==noteId))
    
    }catch(er){
      console.log("Error deleting the note", er )
    }

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#212529] text-white p-6">
      <h1 className="text-4xl font-bold text-[#ffffff] mb-6">Campus Notes</h1>
      {loading ? (
        <p className="text-[#adb5bd] text-lg">Loading notes...</p>
      ) : notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {notes.map((note) => (
            <NotesCard
              key={note._id}
              noteId={note._id}
              noteTitle={note.noteTitle}
              noteDescription={note.noteDescription}
              uploader={note.uploader?.name}  // Assuming uploader is a string (name)
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-[#adb5bd] text-lg">No notes available.</p>
      )}
    </div>
  );
};

export default NotesPage;
