import React from 'react';

const VideoListItem = ({image, onImageSelect}) => {
   return (
      <li onClick={() => onImageSelect(image)} className="list-group-item">
         <div className="video-list media">
            <div className="media-left">
               <img className="media-object" src={image.getElementsByTagName('url').value} />
            </div>
            <div className="media-body">
               <div className="media-heading">{image.getElementsByTagName('description').value}</div>
            </div>
         </div>
      </li>
   );
};

export default VideoListItem;
