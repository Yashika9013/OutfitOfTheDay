import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OutfitList.css';

const OutfitList = () => {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    const fetchOutfits = async () => {
      const response = await axios.get('http://localhost:5000/api/outfits');
      setOutfits(response.data);
    };
    fetchOutfits();
  }, []);

  return (
    <div className="outfit-list">
      {outfits.map(outfit => (
        <div key={outfit._id} className="outfit-card">
          <img src={outfit.image_url} alt="outfit" className="outfit-image"/>
          <p className="outfit-description">{outfit.description}</p>
          <p className="outfit-tags">Tags: {outfit.tags.join(', ')}</p>
          <p className="outfit-user">Uploaded by: {outfit.user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default OutfitList;
