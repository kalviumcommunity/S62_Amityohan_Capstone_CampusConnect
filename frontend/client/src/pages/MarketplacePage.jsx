 import axios from 'axios';
 import { useEffect, useState } from 'react';
 import MarketplaceCard from '../components/MarketplaceCard';

 const MarketplacePage=()=>{
    const [items,setItems]= useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchItems=async()=>{
            try{
                const response = await axios.get("http://localhost:8080/api/marketplace");
                setItems(response.data.items);
            }catch(er){
                console.log("Error fetching items:", error);
            }finally{
                setLoading(false);
            }
        };

        fetchItems();

    },[]);
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] text-[#343A40] p-6">
      <h1 className="text-4xl font-bold text-[#007BFF] mb-6">Campus Marketplace</h1>
      {loading ? (
        <p className="text-[#6C757D] text-lg">Loading items...</p>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {items.map((item) => (
            <MarketplaceCard
              key={item._id}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
              price={item.price}
              uploader={item.seller?.name || "Unknown"}
              itemImage={item.itemImage || "../assets/itemNotFound.png"}
            />
          ))}
        </div>
      ) : (
        <p className="text-[#6C757D] text-lg">No items available.</p>
      )}
    </div>
    )
}


export default MarketplacePage;