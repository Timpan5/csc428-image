import React from 'react';

function generateImages() {
  return Array(50).fill().map((_, i)=> {
    return (<img src={`/images/small/img${i + 1}.jpg`} key={i + 1} />);
  })
}

function ImageDragPreload() {
  return (
    <div id="image-preload">
      {generateImages()}
    </div>
  );
}

export default ImageDragPreload;
