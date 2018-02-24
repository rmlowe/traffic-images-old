import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
   const videoItems = props.images.map((image) => {
      return (
         <VideoListItem
            onImageSelect={props.onVideoSelect}
            key={image.getElementsByTagName('key').value + Math.random().toString()}
            image={image} />
      );
   });

   return (
      <ul className="col-md-4 list-group">
         {videoItems}
      </ul>
   );
}

export default VideoList;
