import React, { useState } from 'react';
import './ImageTagging.css';

const ImageTagging = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [tags, setTags] = useState([]);

  const handleImageChange = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handleTagClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setTags([...tags, { x: offsetX, y: offsetY }]);
  };

  return (
    <div className="image-tagging">
      <h2>Tag Image</h2>
      <input type="file" onChange={handleImageChange} />
      {imageSrc && (
        <div className="image-container">
          <img src={imageSrc} alt="tag" onClick={handleTagClick} />
          {tags.map((tag, index) => (
            <span key={index} className="tag" style={{ left: tag.x, top: tag.y }}></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageTagging;
