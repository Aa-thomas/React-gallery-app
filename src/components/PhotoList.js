import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const PhotoList = ({data, performSearch}) => {
    
    const results = data; 
    let photos;

    const { search } = useParams();

  useEffect(() => {
    if (search) {
      performSearch(search);
    }
  }, [search]);
    
    if (results.length > 0) {
        photos = results.map( photo => 
            <Photo 
                url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                key={photo.id}
            />
    )} else {
        photos = <NotFound />
    }
    
    return(
        <div className="photo-container">
        <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoList;