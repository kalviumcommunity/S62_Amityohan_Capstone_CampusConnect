
import React from "react";
import { useNavigate } from "react-router-dom";

const NotesCard = ({ noteTitle, noteId, noteDescription, uploader, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFAF3] p-6 rounded-lg shadow-md text-[#343A40] hover:shadow-lg transition transform hover:scale-105 hover:ring-2 hover:ring-[#D63384]">
      <h2 className="text-2xl font-semibold text-[#D63384]">{noteTitle}</h2>
      <p className="text-[#6C757D] mt-2">{noteDescription}</p>
      <p className="text-[#8D99AE] mt-4 text-sm">📤 Uploaded by: {uploader || "Unknown"}</p>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-[#28A745] text-white px-4 py-2 rounded-lg hover:bg-[#218838] transition"
          onClick={() => navigate(`/notes/update/${noteId}`)}
        >
          Update
        </button>
        <button
          className="bg-[#DC3545] text-white px-4 py-2 rounded-lg hover:bg-[#C82333] transition"
          onClick={() => onDelete(noteId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;


// const NotesCard = ({ noteTitle, 
//   noteId,
//   noteDescription, 
//   uploader,
//   onDelete }) => {
//   return (
//     <div className="bg-[#FFFAF3] p-6 rounded-lg shadow-md text-[#343A40] hover:shadow-lg transition transform hover:scale-105 hover:ring-2 hover:ring-[#D63384]">
//       <h2 className="text-2xl font-semibold text-[#D63384]">{noteTitle}</h2>
//       <p className="text-[#6C757D] mt-2">{noteDescription}</p>
//       <p className="text-[#8D99AE] mt-4 text-sm">📤 Uploaded by: {uploader || "Unknown"}</p>
//       <div className="mt-4 flex justify-between">
//         <button 
//           className="bg-[#28A745] text-white px-4 py-2 rounded-lg hover:bg-[#218838] transition"
//           onClick={() => navigate(`/notes/update/${itemId}`)}
//         >
//           Update
//         </button>
//         <button 
//           className="bg-[#DC3545] text-white px-4 py-2 rounded-lg hover:bg-[#C82333] transition"
//           onClick={()=>onDelete(noteId)}
//         >
//           Delete
//         </button>
//       </div>

//     </div>
//   );
// };

// export default NotesCard;


// // const NotesCard = ({ noteTitle, noteDescription, uploader }) => {
// //   return (
// //     <div className="bg-[#FDFFFC] p-6 rounded-lg shadow-md text-[#2E2E2E] hover:shadow-lg transition transform hover:scale-105 hover:ring-2 hover:ring-[#2EC4B6]">
// //       <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF4F00] to-[#2EC4B6] text-transparent bg-clip-text">
// //         {noteTitle}
// //       </h2>
// //       <p className="text-[#2E2E2E] mt-2">{noteDescription}</p>
// //       <p className="text-[#6C757D] mt-4 text-sm">📤 Uploaded by: {uploader || "Unknown"}</p>
// //     </div>
// //   );
// // };

// // export default NotesCard;
