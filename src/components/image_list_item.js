import React from 'react';

const ImageListItem = ({image, onImageSelect}) => {
   const description = image.getElementsByTagName('description')[0].value;

   return (
      <li onClick={() => onImageSelect(image)} className="list-group-item">
         <div className="image-list media">
            <div className="media-left">
               <img className="media-object" src={image.getElementsByTagName('url')[0].value} alt={description} />
            </div>
            <div className="media-body">
               <div className="media-heading">{description}</div>
            </div>
         </div>
      </li>
   );
};

export default ImageListItem;
