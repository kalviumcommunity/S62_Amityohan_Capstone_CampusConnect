import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

function UpdateItemPage() {
  const {id}=useParams();
  const navigate=useNavigate()
  const[itemData,setItemData]=useState({
    itemName:"",
    itemDescription:"",
    price:"",
    itemImage:"",
  })

  useEffect(()=>{
    const fetchItem=async()=>{
      try{
        const response=await axios.get(`http://localhost:8080/api/marketplace/${id}`)
        setItemData(response.data.item)
      }catch(er){
        console.log("Error fetching  item:", er);
      }
    };
    fetchItem();
  },[id])
  
  const handleChange=(e)=>{
    setItemData({...itemData,[e.target.name]:e.target.value})
  };
  
  const handleUpdate=async(e)=>{
    e.preventDefault();
    try{
      await axios.put(`http://localhost:8080/api/marketplace/update/${id}`,itemData)
      alert("Item update successfully");
      navigate("/marketplace");
      console.log("Update Item in state",itemData)

    }catch(er){
      console.log("Error updating the item:", er)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3CD] text-black p-6">
    <h1 className="text-3xl font-bold mb-4">Update Marketplace Item</h1>
    <form onSubmit={handleUpdate} className="w-full max-w-lg bg-gray-200 p-6 rounded-lg shadow-md">
      
      <label className="block mb-2">Item Name:</label>
      <input 
        type="text" 
        name="itemName" 
        value={itemData.itemName} 
        onChange={handleChange} 
        className="w-full p-2 rounded-lg mb-4 bg-white border border-gray-400 text-black focus:ring-2 focus:ring-[#007BFF]" 
      />
  
      <label className="block mb-2">Description:</label>
      <textarea 
        name="itemDescription" 
        value={itemData.itemDescription} 
        onChange={handleChange} 
        className="w-full p-2 rounded-lg mb-4 bg-white border border-gray-400 text-black focus:ring-2 focus:ring-[#007BFF]"
      ></textarea>
  
      <label className="block mb-2">Price:</label>
      <input 
        type="text" 
        name="price" 
        value={itemData.price} 
        onChange={handleChange} 
        className="w-full p-2 rounded-lg mb-4 bg-white border border-gray-400 text-black focus:ring-2 focus:ring-[#007BFF]" 
      />
  
      <label className="block mb-2">Image URL:</label>
      <input 
        type="text" 
        name="itemImage" 
        value={itemData.itemImage} 
        onChange={handleChange} 
        className="w-full p-2 rounded-lg mb-4 bg-white border border-gray-400 text-black focus:ring-2 focus:ring-[#007BFF]" 
      />
  
      <button type="submit" className="bg-[#007BFF] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition">
        Update Item
      </button>
    </form>
  </div>
  
  )
}

export default UpdateItemPage;