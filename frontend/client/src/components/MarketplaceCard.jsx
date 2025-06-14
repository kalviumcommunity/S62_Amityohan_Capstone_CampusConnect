import { useNavigate } from "react-router-dom";


const MarketplaceCard = ({ itemName, 
  itemId,
  itemDescription, 
  price, 
  uploader,
  itemImage,
  onDelete }) => {

  const navigate =useNavigate()
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-[#495057] hover:shadow-lg transition transform hover:scale-105 hover:ring-2 hover:ring-[#17A2B8]">
      <img 
          src={itemImage} 
          alt={itemName} 
          className="w-full h-auto object-cover rounded-md mb-4"
       />
      <h2 className="text-2xl font-semibold text-[#007BFF]">{itemName}</h2>
      <p className="text-[#495057] mt-2">{itemDescription}</p>
      <p className="text-[#17A2B8] font-bold mt-2">💲 {price}</p>
      <p className="text-[#6C757D] mt-4 text-sm">📤 Listed by: {uploader || "Unknown"}</p>
      <div className="mt-4 flex justify-between">
        <button 
          className="bg-[#28A745] text-white px-4 py-2 rounded-lg hover:bg-[#218838] transition"
          onClick={() => navigate( `/marketplace/update/${itemId}`)}
        >
          Update
        </button>
        <button 
          className="bg-[#DC3545] text-white px-4 py-2 rounded-lg hover:bg-[#C82333] transition"
          onClick={()=>onDelete(itemId)}
        >
          Delete
        </button>
        </div>
    </div>
  );
};

export default MarketplaceCard;