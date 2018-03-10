import React from 'react';

const ImageListItem = ({image, onImageSelect}) => {
   const description = image.getElementsByTagName('description')[0].value;

   return (
      <li onClick={() => onImageSelect(image)} className="list-inline-item">
         <div className="image-list media">
               <img className="media-object" src={image.getElementsByTagName('url')[0].value} alt={description} />
               <div className="media-heading">{description}</div>
         </div>
      </li>
   );
};

export default ImageListItem;
