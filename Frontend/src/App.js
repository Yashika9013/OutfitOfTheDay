import React from 'react';
import UploadOutfit from './components/UploadOutfit';
import OutfitList from './components/OutfitList';
import ImageTagging from './components/ImageTagging';

const App = () => {
  return (
    <div>
      <h1>Outfit of the Day</h1>
      <UploadOutfit />
      <ImageTagging />
      <OutfitList />
    </div>
  );
};

export default App;
