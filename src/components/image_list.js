import React from 'react';
import ImageListItem from './image_list_item';

const ImageList = (props) => {
   const imageItems = props.images.map((image) => {
      return (
         <ImageListItem
            onImageSelect={props.onImageSelect}
            key={image.getElementsByTagName('key')[0].value}
            image={image} />
      );
   });

   return (
      <ul className="col-md-4 list-group">
         {imageItems}
      </ul>
   );
}

export default ImageList;
