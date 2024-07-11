import React, { useState } from 'react';
import axios from 'axios';

const UploadOutfit = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleUpload = async () => {
    const tagArray = tags.split(',').map(tag => tag.trim());
    await axios.post('http://localhost:5000/api/outfits', {
      image_url: imageUrl,
      description,
      tags: tagArray,
      user: {
        username: 'sample_user',
        user_id: 'user_id'
      }
    });
    setImageUrl('');
    setDescription('');
    setTags('');
  };

  return (
    <div>
      <h2>Upload Outfit of the Day</h2>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadOutfit;
