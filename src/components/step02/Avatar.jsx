import React from 'react';

function Avatar({size ,person}) {
    const getImageUrl = 'https://i.imgur.com/'
    return (
      <img
          src={getImageUrl+person.imageId +'.jpg'} 
          alt={person.name}
          width={size}
          hight={size}
      />
    );
}

export default Avatar;