
const NotesCard = ({ noteTitle, noteDescription, uploader }) => {
  return (
    <div className="bg-[#FFFAF3] p-6 rounded-lg shadow-md text-[#343A40] hover:shadow-lg transition transform hover:scale-105 hover:ring-2 hover:ring-[#D63384]">
      <h2 className="text-2xl font-semibold text-[#D63384]">{noteTitle}</h2>
      <p className="text-[#6C757D] mt-2">{noteDescription}</p>
      <p className="text-[#8D99AE] mt-4 text-sm">📤 Uploaded by: {uploader || "Unknown"}</p>
    </div>
  );
};

export default NotesCard;




// const NotesCard = ({ noteTitle, noteDescription, uploader }) => {
//   return (
//     <div className="bg-[#FDFFFC] p-6 rounded-lg shadow-md text-[#2E2E2E] hover:shadow-lg transition transform hover:scale-105 hover:ring-2 hover:ring-[#2EC4B6]">
//       <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF4F00] to-[#2EC4B6] text-transparent bg-clip-text">
//         {noteTitle}
//       </h2>
//       <p className="text-[#2E2E2E] mt-2">{noteDescription}</p>
//       <p className="text-[#6C757D] mt-4 text-sm">📤 Uploaded by: {uploader || "Unknown"}</p>
//     </div>
//   );
// };

// export default NotesCard;
